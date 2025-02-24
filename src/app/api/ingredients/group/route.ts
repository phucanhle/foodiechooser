import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

type FoodItem = {
    id: number;
    ingredient_name: string;
    ingredient_des: string;
    image_src?: string;
    image_des?: string;
    nutrition_facts?: {
        calories: number;
        protein: number;
        fat: number;
        carbohydrates: number;
    }[];
    food_groups?: { name: string };
    food_minerals?: { minerals: { name: string } }[];
    food_vitamins?: { vitamins: { name: string } }[];
};

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const group = searchParams.get("group");
    const search = searchParams.get("search");

    if (!group) {
        return NextResponse.json(
            { error: "Missing 'group' parameter" },
            { status: 400 }
        );
    }

    let query = supabase
        .from("foods")
        .select(
            `
            id, ingredient_name, ingredient_des, group_id, image_src, image_des,
            food_groups(name),
            food_minerals(minerals(name)),
            food_vitamins(vitamins(name)),
            nutrition_facts(calories, protein, fat, carbohydrates)
            `
        )
        .not("food_groups", "is", null)
        .eq("food_groups.name", group);

    if (search) {
        query = query.ilike(
            "ingredient_name",
            `%${search}%`
        );
    }

    // const { data, error } = await query;
    const { data, error } = await query.returns<
        FoodItem[]
    >();

    if (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
    // **Định dạng lại dữ liệu**
    const formattedData = data.map((item) => ({
        imageSrc: item.image_src || "/default-image.jpg",
        imageDes:
            item.image_des ||
            `Image of ${item.ingredient_name}`,
        ingredientName: item.ingredient_name,
        ingredientDes: item.ingredient_des,
        nutritionFacts: {
            calories:
                item.nutrition_facts?.[0]?.calories || 0,
            protein: `${
                item.nutrition_facts?.[0]?.protein || 0
            }`,
            fat: `${item.nutrition_facts?.[0]?.fat || 0}`,
            carbohydrates: `${
                item.nutrition_facts?.[0]?.carbohydrates ||
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

    return NextResponse.json(formattedData);
}
