"use client";
import { useState, useEffect } from "react";
// import { FaStar } from "react-icons/fa"; // Import icon sao đánh giá

export default function Fomula() {
    const fakedatafood = {
        recipeID: "8",
        imageSrc: "https://garlicsaltandlime.com/wp-content/uploads/2022/07/Garden-salad-thumbnail.jpg",
        imageDes: "A fresh garden salad with various vegetables",
        foodName: "Garden Salad",
        foodDes: "A mix of fresh lettuce, cucumbers, tomatoes, and carrots with a light vinaigrette.",
        prepTime: "15 phút", // Thời gian chuẩn bị
        calories: 120, // Lượng calo
        servings: 2, // Số phần ăn
        rating: 4.5, // Đánh giá trung bình (trên 5)
        ingredients: [
            "200g xà lách",
            "1 quả dưa leo",
            "1 quả cà chua",
            "1 củ cà rốt",
            "2 thìa dầu oliu",
            "1 thìa giấm balsamic",
            "Muối, tiêu vừa đủ",
        ],
        instructions: [
            "Rửa sạch rau củ, để ráo nước.",
            "Cắt dưa leo, cà chua, cà rốt thành lát mỏng.",
            "Trộn các nguyên liệu vào tô lớn.",
            "Thêm dầu oliu, giấm balsamic, muối và tiêu.",
            "Trộn đều và thưởng thức ngay.",
        ],
    };

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Giả lập delay load ảnh để hiệu ứng đẹp hơn
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-screen max-w-[1080px] min-h-screen flex flex-col gap-6 py-40 px-4 mx-auto">
            {/* Layout chính */}
            <div className="flex gap-6 flex-wrap md:flex-nowrap">
                {/* Hình ảnh */}
                <div className="w-full max-w-[450px] min-h-[300px] border rounded-2xl p-4 relative">
                    {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl"></div>}
                    <img
                        src={fakedatafood.imageSrc}
                        alt={fakedatafood.imageDes}
                        className={`w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${
                            isLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => setIsLoaded(true)}
                        onError={() => setIsLoaded(true)}
                    />
                </div>

                {/* Thông tin món ăn */}
                <div className="w-full min-h-[300px] border rounded-2xl p-4">
                    <h1 className="text-2xl font-bold text-gray-800">{fakedatafood.foodName}</h1>
                    <p className="text-gray-600 mt-2">{fakedatafood.foodDes}</p>

                    {/* Thông tin dinh dưỡng và thời gian chế biến */}
                    <div className="mt-4 flex flex-wrap gap-4 text-gray-700">
                        <p>
                            ⏳ <strong>Thời gian chuẩn bị:</strong> {fakedatafood.prepTime}
                        </p>
                        <p>
                            🔥 <strong>Lượng calo:</strong> {fakedatafood.calories} kcal
                        </p>
                        <p>
                            🍽️ <strong>Khẩu phần:</strong> {fakedatafood.servings} người
                        </p>
                    </div>
                </div>
            </div>

            {/* Thành phần nguyên liệu */}
            <div className="w-full min-h-[200px] border rounded-2xl p-4">
                <h2 className="text-xl font-semibold text-gray-800">Thành phần</h2>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                    {fakedatafood.ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Hướng dẫn chế biến */}
            <div className="w-full min-h-[200px] border rounded-2xl p-4">
                <h2 className="text-xl font-semibold text-gray-800">👨‍🍳 Hướng dẫn chế biến</h2>
                <ol className="list-decimal list-inside text-gray-700 mt-2">
                    {fakedatafood.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
