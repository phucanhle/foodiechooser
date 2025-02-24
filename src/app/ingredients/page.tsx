"use client";
import { useState, useEffect } from "react";
import { getIngredients } from "@/lib/api";
import { NutritionFacts } from "@/types/ingredients";

import SearchBar from "@/components/SearchBar";
import IngredientCard from "@/components/IngredientsCard";
import Title from "@/components/Title";

interface IngredientItem {
    imageSrc: string;
    imageDes: string;
    ingredientName: string;
    ingredientDes: string;
    nutritionFacts: NutritionFacts;
    group: string;
}

const colorOfGroup = [
    "#BA8609",
    "#90BE6D",
    "#6D6875",
    "#D62828",
];

export default function Ingredients() {
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    // const [group, setGroup] = useState("");
    const [titleGroup, setTitleGroup] = useState(
        "Choose a group to see"
    );
    const [selectedGroup, setSelectedGroup] = useState(0);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const data = await getIngredients({
                search,
                group: titleGroup,
            });
            if (data) {
                setIngredients(data);
                setLoading(false);
            } else {
                alert("Loading failed");
            }
        }
        fetchData();
    }, [search, titleGroup]);

    const handleSelectedGroup = (groupNumber: number) => {
        setSelectedGroup(groupNumber);
        setSearch("");
        if (groupNumber == 1)
            setTitleGroup("carbonhydrat & fat");
        else if (groupNumber == 2)
            setTitleGroup("vegetable");
        else if (groupNumber == 3) setTitleGroup("taste");
        else if (groupNumber == 4) setTitleGroup("protein");
    };

    return (
        <div
            className={`flex flex-col 
            w-full max-w-[1080px] py-40 min-h-screen 
            `}
        >
            <Title content="Ingredients" />
            <div className="flex flex-wrap justify-around gap-10 mt-10 w-screen max-w-[1080px]">
                <div
                    className={`grid grid-rows-2 grid-cols-2 w-[90%] max-w-[475px] max-h-[475px] aspect-square gap-2 `}
                >
                    <button
                        className={`rounded-[60px] rounded-br-none p-8 
                        bg-gradient-to-br from-[#E9C46A] via-[#FFF19F] via-100%
                        text-2xl font-bold text-white 
                        transition-all 
                        ${
                            selectedGroup === 1
                                ? "-translate-x-3 -translate-y-3"
                                : "hover:-translate-x-3 hover:-translate-y-3"
                        }
    `}
                        onClick={() =>
                            handleSelectedGroup(1)
                        }
                    >
                        Power Fuel
                    </button>
                    <button
                        className={`rounded-[60px] rounded-bl-none p-8 
                        bg-gradient-to-bl from-[#90BE6D] via-[#C5FD9A] via-100%
                        text-2xl font-bold text-white 
                        transition-all 
                        ${
                            selectedGroup === 2
                                ? "translate-x-3 -translate-y-3"
                                : "hover:translate-x-3 hover:-translate-y-3"
                        }
    `}
                        onClick={() =>
                            handleSelectedGroup(2)
                        }
                    >
                        Fresh life
                    </button>
                    <button
                        className={`rounded-[60px] rounded-tr-none p-8 
                        bg-gradient-to-tr from-[#6D6875] via-[#C9B3ED] via-100%
                        text-2xl font-bold text-white 
                        transition-all 
                        ${
                            selectedGroup === 3
                                ? "-translate-x-3 translate-y-3"
                                : "hover:-translate-x-3 hover:translate-y-3"
                        }
    `}
                        onClick={() =>
                            handleSelectedGroup(3)
                        }
                    >
                        Taste Magic
                    </button>
                    <button
                        className={`rounded-[60px] rounded-tl-none p-8 
                        bg-gradient-to-tl from-[#D62828] via-[#F59393] via-100%
                        text-2xl font-bold text-white 
                        transition-all 
                        ${
                            selectedGroup === 4
                                ? "translate-x-3 translate-y-3"
                                : "hover:translate-x-3 hover:translate-y-3"
                        }
    `}
                        onClick={() =>
                            handleSelectedGroup(4)
                        }
                    >
                        Strong bites
                    </button>
                </div>

                <div className={`w-[90%] max-w-[550px] `}>
                    <h1
                        className={`text-xl font-bold 
                        capitalize p-4 rounded-2xl text-white drop-shadow-lg 
                        bg-gradient-to-r from-[${
                            colorOfGroup[selectedGroup - 1]
                        }] via-80% via-white`}
                    >
                        {titleGroup}
                    </h1>
                    <div className="my-2">
                        {ingredients.length > 0 ? (
                            <SearchBar
                                onSearch={setSearch}
                            />
                        ) : (
                            "Don't have data"
                        )}
                    </div>
                    <div className="flex flex-col gap-10 items-center justify-center">
                        {!loading
                            ? ingredients.map(
                                  (
                                      item: IngredientItem,
                                      index
                                  ) => (
                                      <IngredientCard
                                          key={index}
                                          imageSrc={
                                              item.imageSrc ||
                                              "/default-image.jpg"
                                          } // Nếu không có ảnh, dùng ảnh mặc định
                                          imageDes={
                                              item.imageDes
                                          }
                                          ingredientName={
                                              item.ingredientName
                                          }
                                          ingredientDes={
                                              item.ingredientDes
                                          }
                                          nutritionFacts={
                                              item.nutritionFacts ||
                                              "No data"
                                          }
                                          group={
                                              item.group ||
                                              "Unknown"
                                          }
                                      />
                                  )
                              )
                            : "Loading..."}
                    </div>
                </div>
            </div>
        </div>
    );
}
