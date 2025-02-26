"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getRecipeDetail } from "@/lib/api";
import { useParams } from "next/navigation";

type Recipe = {
    id: string;
    image_src: string;
    image_des: string;
    food_name: string;
    food_des: string;
};
type NutritionFact = {
    fat: string;
    food_id: string;
    protein: string;
    calories: number;
    carbohydrates: string;
};

type Ingredient = {
    foods: {
        ingredient_name: string;
        nutrition_facts: NutritionFact[];
    };
    quantity: string;
};

type Formula = {
    description: string;
};

export default function Fomula() {
    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [recipe, setRecipe] = useState<Recipe | null>(
        null
    );
    const [ingredients, setIngredients] = useState<
        Ingredient[]
    >([]);
    const [fomula, setFomula] = useState<Formula[]>([]);

    useEffect(() => {
        if (!id) return;

        (async () => {
            try {
                const data = await getRecipeDetail(
                    id as string
                );
                setRecipe(data);
                setIngredients(
                    data.recipe_ingredients || []
                );
                setFomula(data.recipe_steps || []);
            } catch (error) {
                console.error(
                    "Lỗi khi lấy công thức:",
                    error
                );
            }
        })();
    }, [id]);

    return (
        <div className="relative w-screen max-w-[1080px] min-h-screen flex flex-col gap-6 py-28 px-4 mx-auto">
            {/* Layout chính */}
            <div className="flex gap-6 flex-wrap md:flex-nowrap">
                {/* Hình ảnh */}
                <div className="w-full max-w-[450px] min-h-[300px] border rounded-2xl p-4 relative">
                    {!isLoaded && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl"></div>
                    )}
                    <Image
                        src={
                            recipe?.image_src &&
                            recipe.image_src !== ""
                                ? recipe.image_src
                                : "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/9/27/1400438/Pho-4.jpg"
                        }
                        alt={
                            recipe?.image_des ||
                            "Hình ảnh món ăn"
                        }
                        width={500}
                        height={500}
                        className={`w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${
                            isLoaded
                                ? "opacity-100"
                                : "opacity-0"
                        }`}
                        onLoad={() => setIsLoaded(true)}
                        onError={() => setIsLoaded(true)}
                    />
                </div>

                {/* Thông tin món ăn */}
                <div className="w-full min-h-[300px] border rounded-2xl p-4">
                    <h1 className="text-2xl font-bold text-gray-800">
                        {recipe?.food_name || "Tên món ăn"}
                    </h1>
                    <p className="text-gray-600 mt-2">
                        {recipe?.food_des || "Mô tả món ăn"}
                    </p>

                    {/* Thông tin dinh dưỡng và thời gian chế biến
                    <div className="mt-4 flex flex-wrap gap-4 text-gray-700">
                        <p>
                            ⏳{" "}
                            <strong>
                                Thời gian chuẩn bị:
                            </strong>{" "}
                            {recipe?.prepTime || "Không rõ"}
                        </p>
                        <p>
                            🔥 <strong>Lượng calo:</strong>{" "}
                            {recipe?.calories || "Không có"}{" "}
                            kcal
                        </p>
                        <p>
                            🍽️ <strong>Khẩu phần:</strong>{" "}
                            {recipe?.servings || "Không rõ"}{" "}
                            người
                        </p>
                    </div> */}
                </div>
            </div>

            {/* Thành phần nguyên liệu */}
            <div className="w-full min-h-[200px] border rounded-2xl p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    INGREDIENTS
                </h2>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                    {ingredients.length > 0 ? (
                        ingredients.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-end w-full max-w-[380px]"
                            >
                                <span className="capitalize">
                                    {item?.foods
                                        ?.ingredient_name ||
                                        "Không rõ"}
                                </span>
                                <span className="flex-1 border-b border-dashed border-gray-200 mx-2"></span>
                                <span>
                                    {item?.quantity || "0"}
                                </span>
                            </li>
                        ))
                    ) : (
                        <p>Không có nguyên liệu.</p>
                    )}
                </ul>
            </div>

            {/* Hướng dẫn chế biến */}
            <div className="w-full min-h-[200px] border rounded-2xl p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    👨‍🍳 GUIDE
                </h2>
                <ol className="list-decimal list-inside text-gray-700 mt-2">
                    {fomula.length > 0 ? (
                        fomula.map((step, index) => (
                            <li
                                key={index}
                                className="mt-2"
                            >
                                {step?.description ||
                                    "Không rõ"}
                            </li>
                        ))
                    ) : (
                        <p>Chưa có công thức chế biến.</p>
                    )}
                </ol>
            </div>
        </div>
    );
}
