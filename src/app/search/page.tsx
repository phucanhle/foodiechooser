"use client";
import {
    useRouter,
    useSearchParams,
} from "next/navigation";
import { useState, useEffect } from "react";
import ItemCard from "@/components/Card";
import IngredientCard from "@/components/IngredientsCard";
import SearchBar from "@/components/SearchBar";

export default function SearchPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";

    const [searchQuery, setSearchQuery] = useState(query);

    // Cập nhật URL khi searchQuery thay đổi
    useEffect(() => {
        if (searchQuery) {
            router.push(`/search?q=${searchQuery}`);
        }
    }, [searchQuery]);

    const listDished = [
        {
            recipeID: "7",
            imageSrc:
                "https://carlsbadcravings.com/wp-content/uploads/2023/06/chicken-street-tacos-7a.jpg",
            imageDes:
                "Mexican-style tacos with fresh toppings",
            foodName: "Street Tacos",
            foodDes:
                "Soft corn tortillas filled with seasoned meat, fresh cilantro, and onions.",
        },
    ];
    const listIngre = [
        {
            imageSrc:
                "https://southmill.com/wp-content/uploads/2021/12/beech-isolated-white@2x.png",
            imageDes: "A mix of fresh mushrooms",
            ingredientName: "Beech Mushrooms",
            ingredientDes:
                "Earthy and umami-rich, perfect for stir-fries, soups, and pasta.",
            nutritionFacts: {
                calories: 22,
                protein: "3g",
                fat: "0.3g",
                carbohydrates: "3.3g",
                vitamins: ["B2", "B3", "D"],
                minerals: ["Selenium", "Copper"],
            },
            group: "Tastes",
        },
    ];

    return (
        <div className="w-[90%] max-w-[1080px] min-h-screen py-32">
            <h1>Search Results for: &quot;{query}&quot;</h1>
            <SearchBar onSearch={setSearchQuery} />
            <h1 className="py-2 text-lg font-bold text-[#454139]">
                Recipes
            </h1>
            <div className="flex justify-around md:justify-start">
                {listDished.map((item, index) => (
                    <ItemCard
                        key={index}
                        recipeID={item.recipeID}
                        ImageSource={item.imageSrc}
                        ImageDescription={item.imageDes}
                        ItemName={item.foodName}
                        ItemDescription={item.foodDes}
                    />
                ))}
            </div>
            <h1 className="py-2 text-lg font-bold text-[#454139]">
                Ingredient
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {listIngre.map((item, index) => (
                    <IngredientCard
                        key={index}
                        imageSrc={item.imageSrc}
                        imageDes={item.imageDes}
                        ingredientName={item.ingredientName}
                        ingredientDes={item.ingredientDes}
                        nutritionFacts={item.nutritionFacts}
                        group={item.group}
                    />
                ))}
            </div>
        </div>
    );
}
