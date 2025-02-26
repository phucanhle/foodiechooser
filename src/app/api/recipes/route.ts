import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        let query;

        if (id) {
            query = supabase
                .from("recipes")
                .select(
                    `
                    id, food_name, image_src, image_des, food_des,
                    recipe_steps (id, step_number, description),
                    recipe_ingredients (
                        quantity, 
                        foods (
                            nutrition_facts (food_id, calories, protein, fat, carbohydrates), 
                            ingredient_name
                        )
                    )
                `
                )
                .eq("id", id);
        } else {
            query = supabase
                .from("recipes")
                .select(
                    "id, food_name, image_src, image_des, food_des"
                );
        }

        const { data, error } = await query;

        if (error) {
            console.error("Supabase Error:", error);
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }

        if (!data || data.length === 0) {
            return NextResponse.json(
                { error: "Can not find ID" },
                { status: 404 }
            );
        }

        return NextResponse.json(data);
    } catch (err) {
        console.error("Server Error:", err);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
