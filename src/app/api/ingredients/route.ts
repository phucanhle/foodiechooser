import { NextResponse, NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
    const { data, error } = await supabase
        .from('foods')
        .select('*, food_groups(name)')
        .eq('food_groups.name', "Protein"); // Lọc theo nhóm thực phẩm

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    const body = await req.json();

    const { data, error } = await supabase
        .from('foods')
        .insert(body)
        .select()

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data);

}