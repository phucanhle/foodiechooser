"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { p } from "framer-motion/client";

const foods = [
    { name: "🍣 Sushi", image: "/images/sushi.jpg" },
    { name: "🍔 Burger", image: "/images/burger.jpg" },
    { name: "🍜 Ramen", image: "/images/ramen.jpg" },
    { name: "🍕 Pizza", image: "/images/pizza.jpg" },
    { name: "🍜 Hủ tiếu", image: "/images/hu_tieu.jpg" },
    { name: "🍜 Phở", image: "/images/pho.jpg" },
    { name: "🍗 Gà Rán", image: "/images/fried_chicken.jpg" },
    { name: "🍇 Cơm gà xối mỡ", image: "/images/com_ga_xoi_mo.jpg" },
];

export default function GachaFood() {
    const [selectedFood, setSelectedFood] = useState<{ name: string; image: string } | null>(null);
    const [isSpinning, setIsSpinning] = useState(false);

    const spinGacha = () => {
        if (isSpinning) return;
        setIsSpinning(true);

        const randomIndex = Math.floor(Math.random() * foods.length);
        setTimeout(() => {
            setSelectedFood(foods[randomIndex]);
            setIsSpinning(false);
        }, 2000);
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-r from-orange-300 to-yellow-200 text-gray-900">
            <h1 className="text-4xl font-bold mb-6 text-yellow-700 drop-shadow-lg">Hôm nay ăn gì?</h1>

            <motion.div
                animate={{ rotate: isSpinning ? 360 * 3 : 0, scale: isSpinning ? 1.1 : 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-80 h-80 bg-white flex items-center justify-center rounded-full shadow-2xl border-4 border-yellow-500 glow"
            >
                {selectedFood ? (
                    <motion.img
                        src={selectedFood.image}
                        alt={selectedFood.name}
                        className="w-80 h-80 object-cover rounded-full"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.5, repeat: 2 }}
                    />
                ) : (
                    <span className="text-3xl">🔄</span>
                )}
            </motion.div>
            {selectedFood && (
                <div className="mt-4 text-center">
                    <span>🎉Bấm vào nút bên dưới để tìm quán {selectedFood.name} gần đây</span>
                    <motion.p
                        className="mt-3 text-2xl font-semibold text-yellow-700 bg-white px-4 py-2 rounded-xl shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a href={`https://www.google.com/maps/search/${selectedFood.name} gần đây`} target=" _blank">
                            <span className="font-bold">{selectedFood.name}</span> 🎊
                        </a>
                    </motion.p>
                </div>
            )}
            <motion.button
                onClick={spinGacha}
                whileTap={{ scale: 0.9 }}
                className="mt-6 px-8 py-4 bg-yellow-500 text-black text-lg font-bold rounded-lg hover:bg-yellow-400 transition shadow-lg"
                disabled={isSpinning}
            >
                {isSpinning ? "Đang quay..." : "🎲 Ăn gì?"}
            </motion.button>
        </div>
    );
}
