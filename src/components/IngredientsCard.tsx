import React from "react";

interface NutritionFacts {
    calories: number;
    protein: string;
    fat: string;
    carbohydrates: string;
    vitamins: string[];
    minerals: string[];
}

interface ItemCardProps {
    imageSrc: string;
    imageDes: string;
    ingredientName: string;
    ingredientDes: string;
    nutritionFacts: NutritionFacts;
}

export default function IngredientCard({ imageSrc, imageDes, ingredientName, ingredientDes, nutritionFacts }: ItemCardProps) {
    return (
        <div className="max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden p-4 transition-transform transform hover:scale-105">
            <img src={imageSrc} alt={imageDes} className="w-full h-40 object-cover rounded-lg" />
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{ingredientName}</h3>
                <p className="text-sm text-gray-600">{ingredientDes}</p>
                <div className="mt-3 text-sm text-gray-800">
                    <p>
                        <strong>Calories:</strong> {nutritionFacts.calories} kcal
                    </p>
                    <p>
                        <strong>Protein:</strong> {nutritionFacts.protein}
                    </p>
                    <p>
                        <strong>Fat:</strong> {nutritionFacts.fat}
                    </p>
                    <p>
                        <strong>Carbs:</strong> {nutritionFacts.carbohydrates}
                    </p>
                    <p>
                        <strong>Vitamins:</strong> {nutritionFacts.vitamins.join(", ")}
                    </p>
                    <p>
                        <strong>Minerals:</strong> {nutritionFacts.minerals.join(", ")}
                    </p>
                </div>
            </div>
        </div>
    );
}
