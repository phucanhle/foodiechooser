import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const fakedatafood = [
    {
        recipeID: "2",
        imageSrc:
            "https://www.cookingclassy.com/wp-content/uploads/2018/05/grilled-salmon-3.jpg",
        imageDes: "Grilled salmon with lemon and herbs",
        foodName: "Grilled Salmon",
        foodDes:
            "Perfectly grilled salmon fillet with fresh herbs and a squeeze of lemon.",
    },
    {
        recipeID: "3",
        imageSrc:
            "https://www.redefinemeat.com/uk/wp-content/uploads/2024/08/Retail_Recipe_Photoshoot_Premium-Burgers_Plain-1-scaled.jpg",
        imageDes:
            "A juicy cheeseburger with lettuce and tomato",
        foodName: "Classic Cheeseburger",
        foodDes:
            "Juicy beef patty topped with melted cheese, lettuce, and tomato on a toasted bun.",
    },
    {
        recipeID: "5",
        imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVwNUE-yOHojtzcBXP_Z_PreqHvke1J7e2Q&s",
        imageDes: "Cheese pizza with a crispy crust",
        foodName: "Cheese Pizza",
        foodDes:
            "A classic cheese pizza with a perfectly crispy crust and rich tomato sauce.",
    },
    {
        recipeID: "6",
        imageSrc:
            "https://tatyanaseverydayfood.com/wp-content/uploads/2019/06/Ribeye-Steak-Dinner-4-of-4-768x1024.jpg",
        imageDes: "A tender and juicy steak",
        foodName: "Grilled Ribeye Steak",
        foodDes:
            "A perfectly grilled ribeye steak, seasoned to perfection.",
    },
    {
        recipeID: "7",
        imageSrc:
            "https://carlsbadcravings.com/wp-content/uploads/2023/06/chicken-street-tacos-7a.jpg",
        imageDes: "Mexican-style tacos with fresh toppings",
        foodName: "Street Tacos",
        foodDes:
            "Soft corn tortillas filled with seasoned meat, fresh cilantro, and onions.",
    },
    {
        recipeID: "8",
        imageSrc:
            "https://garlicsaltandlime.com/wp-content/uploads/2022/07/Garden-salad-thumbnail.jpg",
        imageDes:
            "A fresh garden salad with various vegetables",
        foodName: "Garden Salad",
        foodDes:
            "A mix of fresh lettuce, cucumbers, tomatoes, and carrots with a light vinaigrette.",
    },
];

const SlotMachine = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [slot, setSlot] = useState(fakedatafood[0]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countChange, setCountChange] = useState(0);

    useEffect(() => {
        const loadImages = async () => {
            const promises = fakedatafood.map((item) => {
                return new Promise((resolve) => {
                    const img = new window.Image();
                    img.src = item.imageSrc;
                    img.onload = resolve;
                });
            });
            await Promise.all(promises);
            setIsLoaded(true);
        };
        loadImages();
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning) {
            interval = setInterval(() => {
                setSlot(
                    fakedatafood[
                        Math.floor(
                            Math.random() *
                                fakedatafood.length
                        )
                    ]
                );
            }, 100);
            setTimeout(() => {
                clearInterval(interval);
                setIsRunning(false);
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const handleToggle = () => {
        if (!isRunning && isLoaded) {
            setIsRunning(true);
            setCountChange((prev) => prev + 1);
        }
    };

    return (
        <div className="relative w-full h-fit mx-auto flex flex-col items-center justify-center pt-4 rounded-lg">
            {!isLoaded ? (
                <p className="text-[#454139]">
                    Loading images...
                </p>
            ) : (
                <>
                    <div className="relative flex flex-col items-center justify-center text-center w-full">
                        <div
                            className={`w-full  bg-gray-800 rounded-lg transition-transform duration-500 ${
                                isRunning
                                    ? "animate-spin-slow"
                                    : ""
                            }`}
                        >
                            <Image
                                src={slot.imageSrc}
                                width={500}
                                height={500}
                                alt={slot.foodName}
                                className="w-full  h-[300px] object-cover rounded-lg"
                            />
                        </div>
                        <p className="text-[#454139] mt-3 text-lg font-bold">
                            {slot.foodName}
                        </p>
                        {/* <p className="text-[#454139] text-sm">{slot.foodDes}</p> */}
                        {!isRunning && (
                            <div className="flex w-full gap-2">
                                <Link
                                    href={`/recipes/${slot.recipeID}`}
                                    className="w-full mt-4 px-4 py-2 text-[#454139] bg-[#F0BD48] border border-[#F5C978] rounded-lg shadow-sm"
                                >
                                    View Recipe
                                </Link>
                                <Link
                                    href={`https://www.google.com/maps/search/${slot.foodName}+near+me/`}
                                    target="_blank"
                                    className="w-full mt-4 px-4 py-2 text-[#454139] bg-[#F0BD48] border border-[#F0BD48] rounded-lg shadow-sm"
                                >
                                    Find Restaurant
                                </Link>
                            </div>
                        )}
                    </div>
                    <button
                        className="w-full mt-6 px-4 py-2 bg-[#F0BD48] text-[#454139] text-lg rounded-2xl shadow-xl"
                        onClick={handleToggle}
                        disabled={isRunning}
                    >
                        {isRunning
                            ? "SPINNING..."
                            : countChange === 0
                            ? "SPIN IT"
                            : `SPIN AGAIN? (It's ${countChange} times)`}
                    </button>
                </>
            )}
        </div>
    );
};

export default SlotMachine;
