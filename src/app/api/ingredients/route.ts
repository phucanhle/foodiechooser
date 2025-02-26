import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search");
    let query = supabase
        .from("foods")
        .select(
            `id, ingredient_name, ingredient_des, group_id, food_groups(name)`
        );

    if (search) {
        query = query.ilike(
            "ingredient_name",
            `%${search}%`
        );
    }
    const { data, error } = await query;

    if (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }

    return NextResponse.json(data);
}
