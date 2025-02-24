import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("q");

    if (!search) {
        return NextResponse.json(
            { error: "Missing 'q' parameter" },
            { status: 400 }
        );
    }

    const { data, error } = await supabase
        .from("foods")
        .select("id, ingredient_name, ingredient_des")
        .ilike("ingredient_name", `%${search}%`); // Không phân biệt hoa thường

    if (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }

    return NextResponse.json(data);
}
