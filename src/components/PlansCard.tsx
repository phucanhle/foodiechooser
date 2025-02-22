import Image from "next/image";
import React from "react";

interface MealPlanProps {
    name: string;
    image: string;
    duration: string;
    calories: string;
    meals: string[];
    price: string;
}

const MealPlanCard: React.FC<MealPlanProps> = ({
    name,
    image,
    duration,
    calories,
    meals,
    price,
}) => {
    return (
        <div
            className="border rounded-xl shadow-lg p-4 bg-white hover:shadow-xl transition
            w-full
            max-w-[325px]"
        >
            <Image
                src={image}
                width={500}
                height={500}
                alt={name}
                className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">
                {name}
            </h2>
            <p className="text-sm text-gray-600">
                {duration} • {calories} kcal/day
            </p>

            <ul className="mt-3 text-sm text-gray-800">
                {meals.map((meal, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-2"
                    >
                        🍽 {meal}
                    </li>
                ))}
            </ul>

            <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-[#E9C46A]">
                    {price}
                </span>
                <button className="px-4 py-2 bg-[#E9C46A] text-white rounded-lg hover:brightness-105 transition">
                    Contact now
                </button>
            </div>
        </div>
    );
};

export default MealPlanCard;
