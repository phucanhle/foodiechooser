"use client";
import { useEffect, useState } from "react";

import SearchBar from "@/components/SearchBar";
import IngredientCard from "@/components/IngredientsCard";
import Title from "@/components/Title";

export default function Ingredients() {
    const fakedatafood = [
        {
            imageSrc:
                "https://www.lovefoodhatewaste.com/sites/default/files/styles/16_9_two_column/public/2022-08/Pork-sh1419942758.jpg.webp?itok=_Ow0IXe6",
            imageDes: "Fresh raw pork with marbling",
            ingredientName: "Pork",
            ingredientDes: "Fresh pork, perfect for braising, grilling, or stir-frying.",
            nutritionFacts: {
                calories: 242,
                protein: "27g",
                fat: "14g",
                carbohydrates: "0g",
                vitamins: ["B1", "B6", "B12"],
                minerals: ["Zinc", "Iron", "Phosphorus"],
            },
            group: "Protein",
        },
        {
            imageSrc:
                "https://www.lovefoodhatewaste.com/sites/default/files/styles/16_9_two_column/public/2022-08/Beef-sh344681603.jpg.webp?itok=qenlRZUs",
            imageDes: "High-quality beef steak",
            ingredientName: "Beef",
            ingredientDes: "Tender beef, rich in protein, great for hotpot, stir-fry, or steak.",
            nutritionFacts: {
                calories: 250,
                protein: "26g",
                fat: "17g",
                carbohydrates: "0g",
                vitamins: ["B12", "B6"],
                minerals: ["Iron", "Zinc", "Selenium"],
            },
            group: "Protein",
        },
        {
            imageSrc: "https://www.hhs1.com/hubfs/carrots%20on%20wood-1.jpg",
            imageDes: "Fresh organic carrots",
            ingredientName: "Carrots",
            ingredientDes: "Crunchy and sweet, great for salads, soups, or roasting.",
            nutritionFacts: {
                calories: 41,
                protein: "1g",
                fat: "0.2g",
                carbohydrates: "10g",
                vitamins: ["A", "K", "C"],
                minerals: ["Potassium", "Fiber"],
            },
            group: "Vegetables",
        },
        {
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
            imageDes: "Fresh red tomatoes",
            ingredientName: "Tomatoes",
            ingredientDes: "Juicy and slightly tangy, great for sauces, salads, and soups.",
            nutritionFacts: {
                calories: 18,
                protein: "0.9g",
                fat: "0.2g",
                carbohydrates: "3.9g",
                vitamins: ["C", "K"],
                minerals: ["Potassium"],
            },
            group: "Vegetables",
        },
        {
            imageSrc: "https://southmill.com/wp-content/uploads/2021/12/beech-isolated-white@2x.png",
            imageDes: "A mix of fresh mushrooms",
            ingredientName: "Beech Mushrooms",
            ingredientDes: "Earthy and umami-rich, perfect for stir-fries, soups, and pasta.",
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
    const colorOfGroup = ["#BA8609", "#90BE6D", "#6D6875", "#D62828"];
    const [titleGroup, setTitleGroup] = useState("");
    const [selectedGroup, setSelectedGroup] = useState(0);

    const handleSelectedGroup = (groupNumber: number) => {
        setSelectedGroup(groupNumber);
        console.log(titleGroup);
        if (groupNumber == 1) setTitleGroup("Carbonhydrat & Fat");
        else if (groupNumber == 2) setTitleGroup("Vegetables");
        else if (groupNumber == 3) setTitleGroup("Tastes");
        else if (groupNumber == 4) setTitleGroup("Protein");
    };

    return (
        <div
            className={`flex flex-col 
            w-full max-w-[1080px] py-40 min-h-screen 
            `}
        >
            <Title content="Ingredients" />
            <div className="flex flex-wrap justify-around gap-10 mt-10 w-screen max-w-[1080px]">
                <div className={`grid grid-rows-2 grid-cols-2 w-[90%] max-w-[475px] max-h-[475px] aspect-square gap-2 `}>
                    <button
                        className={`rounded-[60px] rounded-br-none p-8 
                        bg-gradient-to-br from-[#E9C46A] via-[#FFF19F] via-100%
                        text-2xl font-bold text-white 
                        transition-all 
                        ${selectedGroup === 1 ? "-translate-x-3 -translate-y-3" : "hover:-translate-x-3 hover:-translate-y-3"}
    `}
                        onClick={() => handleSelectedGroup(1)}
                    >
                        Power Fuel
                    </button>
                    <button
                        className={`rounded-[60px] rounded-bl-none p-8 
                        bg-gradient-to-bl from-[#90BE6D] via-[#C5FD9A] via-100%
                        text-2xl font-bold text-white 
                        transition-all 
                        ${selectedGroup === 2 ? "translate-x-3 -translate-y-3" : "hover:translate-x-3 hover:-translate-y-3"}
    `}
                        onClick={() => handleSelectedGroup(2)}
                    >
                        Fresh life
                    </button>
                    <button
                        className={`rounded-[60px] rounded-tr-none p-8 
                        bg-gradient-to-tr from-[#6D6875] via-[#C9B3ED] via-100%
                        text-2xl font-bold text-white 
                        transition-all 
                        ${selectedGroup === 3 ? "-translate-x-3 translate-y-3" : "hover:-translate-x-3 hover:translate-y-3"}
    `}
                        onClick={() => handleSelectedGroup(3)}
                    >
                        Taste Magic
                    </button>
                    <button
                        className={`rounded-[60px] rounded-tl-none p-8 
                        bg-gradient-to-tl from-[#D62828] via-[#F59393] via-100%
                        text-2xl font-bold text-white 
                        transition-all 
                        ${selectedGroup === 4 ? "translate-x-3 translate-y-3" : "hover:translate-x-3 hover:translate-y-3"}
    `}
                        onClick={() => handleSelectedGroup(4)}
                    >
                        Strong bites
                    </button>
                </div>
                {/* className={`bg-gradient-to-b from- via-white`} */}
                <div className={`w-[90%] max-w-[550px] `}>
                    <h1
                        className={`text-xl font-bold p-4 rounded-2xl text-white drop-shadow-lg 
                        bg-gradient-to-r from-[${colorOfGroup[selectedGroup - 1]}] via-80% via-white`}
                    >
                        {titleGroup}
                    </h1>
                    <div className="my-2">
                        <SearchBar />
                    </div>
                    <div className="flex flex-col gap-10 items-center justify-center">
                        {fakedatafood
                            .filter((item) => item.group?.toLowerCase().trim() == titleGroup.toLowerCase())
                            .map((item, index) => (
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
            </div>
        </div>
    );
}
