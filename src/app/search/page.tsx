"use client"; // Đánh dấu đây là Client Component
import ItemCard from "@/components/Card";
import IngredientCard from "@/components/IngredientsCard";
import SearchBar from "@/components/SearchBar";
import { li } from "framer-motion/client";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || ""; // Lấy giá trị `q`, nếu không có thì là ""

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
            <h1>Search Results for: "{query}"</h1>
            <SearchBar />
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
            {listIngre.map(
                (item, index) => (
                    <IngredientCard
                        key={index}
                        imageSrc={item.imageSrc}
                        imageDes={item.imageDes}
                        ingredientName={item.ingredientName}
                        ingredientDes={item.ingredientDes}
                        nutritionFacts={item.nutritionFacts}
                        group={item.group}
                    />
                ),
                []
            )}
        </div>
    );
}
