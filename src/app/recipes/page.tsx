"use client";
import ItemCard from "@/components/Card";
import Title from "@/components/Title";
import { useState, useEffect } from "react";
import { getRecipes } from "@/lib/api";

type Recipe = {
    id: string;
    image_src: string;
    image_des: string;
    food_name: string;
    food_des: string;
};

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getRecipes();
            setRecipes(data);
        };
        fetchData();
    }, []);

    return (
        <div
            className="flex flex-col items-center justify-center
            min-h-screen w-full h-full
            py-32"
        >
            <Title content="Recipes" />
            <div
                className="flex flex-wrap gap-4 justify-around
                w-full max-w-[1080px] 
                mt-10"
            >
                {recipes.map((item: Recipe, index) => (
                    <ItemCard
                        key={index}
                        recipeID={item.id}
                        ImageSource={item.image_src}
                        ImageDescription={item.image_des}
                        ItemName={item.food_name}
                        ItemDescription={item.food_des}
                    />
                ))}
            </div>
        </div>
    );
}
