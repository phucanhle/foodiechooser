import Image from "next/image";
import { useEffect, useState } from "react";
import { NutritionFacts } from "@/types/ingredients";

interface ItemCardProps {
    imageSrc: string;
    imageDes: string;
    ingredientName: string;
    ingredientDes: string;
    group: string;
    nutritionFacts: NutritionFacts;
}
const colorOfGroup = [
    "#BA8609",
    "#D62828",
    "#6D6875",
    "#90BE6D",
];

export default function IngredientCard({
    imageSrc,
    imageDes,
    ingredientName,
    ingredientDes,
    nutritionFacts,
    group,
}: ItemCardProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [color, setColor] = useState("");
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const checkColorOfGroup = (group: string) => {
            switch (group.toLowerCase()) {
                case "protein":
                    return colorOfGroup[1];
                case "taste":
                    return colorOfGroup[2];
                case "vegetable":
                    return colorOfGroup[3];
                default:
                    return colorOfGroup[0];
            }
        };
        setColor(checkColorOfGroup(group));
        if (isLoaded) {
            const timeout = setTimeout(
                () => setShowImage(true),
                500
            ); // Giữ skeleton 1s
            return () => clearTimeout(timeout);
        }
    }, [isLoaded, group]); // Thêm 'group' vào dependency

    return (
        <div className="relative w-full rounded-2xl shadow">
            {!showImage && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg h-[300px]"></div>
            )}

            <Image
                src={imageSrc}
                width={500}
                height={500}
                alt={imageDes}
                className={`w-full h-[300px] object-cover rounded-2xl transition-opacity duration-500 ${
                    showImage ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setIsLoaded(true)}
            />

            <div
                className={`absolute top-0 p-4 h-full w-full  rounded-2xl bg-gradient-to-r from-[${color}]    via-black/35 via-100%`}
            >
                <h3 className="text-3xl text-white font-bold">
                    {ingredientName}
                </h3>
                <p className="text-sm text-white">
                    {ingredientDes}
                </p>
                <div className="flex items-end text-white text-nowrap mt-4">
                    <div>
                        <p>
                            <strong>Calories:</strong>{" "}
                            {nutritionFacts.calories} kcal
                        </p>
                        <p>
                            <strong>Protein:</strong>{" "}
                            {nutritionFacts.protein}
                        </p>
                        <p>
                            <strong>Fat:</strong>{" "}
                            {nutritionFacts.fat}
                        </p>
                        <p>
                            <strong>Carbs:</strong>{" "}
                            {nutritionFacts.carbohydrates}
                        </p>
                    </div>
                    <div>
                        <p>
                            <strong>Vitamins:</strong>{" "}
                            {nutritionFacts.vitamins.join(
                                ", "
                            )}
                        </p>
                        <p>
                            <strong>Minerals:</strong>{" "}
                            {nutritionFacts.minerals.join(
                                ", "
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
