"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import ItemCard from "@/components/Card";
import IngredientCard from "@/components/IngredientsCard";
import SearchBar from "@/components/SearchBar";
import { Ingredient, Recipe } from "@/types/ingredients";
import { search } from "@/lib/api";

export default function SearchPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";

    const [searchQuery, setSearchQuery] = useState(query);
    const [listIngredient, setListIngredient] = useState<Ingredient[]>([]);
    const [listRecipes, setListRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(false);

    // Cập nhật URL khi searchQuery thay đổi, nhưng chỉ khi khác giá trị hiện tại
    useEffect(() => {
        if (searchQuery && searchQuery !== query) {
            router.push(`/search?q=${searchQuery}`, { scroll: false });
        }
    }, [searchQuery, query, router]);

    // Lấy dữ liệu khi URL thay đổi
    useEffect(() => {
        if (!query) return; // Không fetch nếu không có query
        setLoading(true);
        search(query)
            .then((result) => {
                setListIngredient(result.foods || []);
                setListRecipes(result.recipes || []);
            })
            .catch((error) => console.error("Error fetching data:", error))
            .finally(() => setLoading(false));
    }, [query]);

    return (
        <div className="w-[90%] max-w-[1080px] min-h-screen py-32">
            <h1>Search Results for: &quot;{query}&quot;</h1>
            <SearchBar onSearch={setSearchQuery} />
            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                    <h1 className="py-2 text-lg font-bold text-[#454139]">Recipes</h1>
                    <div className="flex justify-around md:justify-start flex-wrap gap-4">
                        {listRecipes.length > 0 ? (
                            listRecipes.map((item: Recipe) => (
                                <ItemCard
                                    key={item.id}
                                    recipeID={item.id}
                                    ImageSource={item.image_src}
                                    ImageDescription={item.food_name}
                                    ItemName={item.food_name}
                                    ItemDescription={item.food_des}
                                />
                            ))
                        ) : (
                            <p>No recipes found.</p>
                        )}
                    </div>

                    <h1 className="py-2 text-lg font-bold text-[#454139]">Ingredients</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {listIngredient.length > 0 ? (
                            listIngredient.map((item: Ingredient) => (
                                <IngredientCard
                                    key={item.ingredientName}
                                    imageSrc={item.imageSrc}
                                    imageDes={item.imageDes}
                                    ingredientName={item.ingredientName}
                                    ingredientDes={item.ingredientDes}
                                    nutritionFacts={item.nutritionFacts}
                                    group={item.group}
                                />
                            ))
                        ) : (
                            <p>No ingredients found.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
