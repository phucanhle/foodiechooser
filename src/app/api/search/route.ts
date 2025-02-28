import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";
import { FoodItem } from '@/types/ingredients'
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("q");

    let formattedFoods;

    if (!search) {
        return NextResponse.json(
            { error: "Missing 'q' parameter" },
            { status: 400 }
        );
    }

    const { data: foodData, error: foodError } = await supabase.from("foods").select(
        `
    id, ingredient_name, ingredient_des, group_id, image_src, image_des,
    food_groups(name),
    food_minerals(minerals(name)),
    food_vitamins(vitamins(name)),
    nutrition_facts(calories, protein, fat, carbohydrates)
    `).ilike("ingredient_name", `%${search}%`).returns<
            FoodItem[]
        >();

    // Truy vấn bảng recipes
    const { data: recipeData, error: recipeError } = await supabase
        .from("recipes")
        .select("*")
        .ilike("food_name", `%${search}%`);
    // **Định dạng lại dữ liệu**


    // Kiểm tra lỗi
    if (foodError || recipeError) {
        return NextResponse.json(
            { error: foodError?.message || recipeError?.message },
            { status: 500 }
        );
    }
    if (foodData)
        formattedFoods = foodData.map((item) => ({
            imageSrc: item.image_src || "/default-image.jpg",
            imageDes:
                item.image_des ||
                `Image of ${item.ingredient_name}`,
            ingredientName: item.ingredient_name,
            ingredientDes: item.ingredient_des,
            nutritionFacts: {
                calories:
                    item.nutrition_facts?.[0]?.calories || 0,
                protein: `${item.nutrition_facts?.[0]?.protein || 0
                    }`,
                fat: `${item.nutrition_facts?.[0]?.fat || 0}`,
                carbohydrates: `${item.nutrition_facts?.[0]?.carbohydrates ||
                    0
                    }`,
                vitamins:
                    item.food_vitamins?.map(
                        (v) => v.vitamins.name
                    ) || [],

                minerals:
                    item.food_minerals?.map(
                        (m) => m.minerals.name
                    ) || [],
            },
            group: item.food_groups?.name || "Unknown",
        }));
    // return NextResponse.json(formattedData);

    return NextResponse.json({
        foods: formattedFoods,
        recipes: recipeData,
    });
}
