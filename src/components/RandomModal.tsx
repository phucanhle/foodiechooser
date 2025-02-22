"use client";
import { useState } from "react";
import ScrollingList from "./ScrollingList";

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 300); // Khớp với thời gian animation
    };

    return (
        <div className="flex items-center justify-center">
            {/* Nút mở modal */}
            <button
                onClick={() => setIsOpen(true)}
                className="w-full max-w-96 bg-[#F0BD48] text-[#454139] text-xl px-12 py-4 rounded-2xl font-bold"
            >
                Let us choose for you!
            </button>

            {/* Overlay (nền mờ) */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/20 flex items-center justify-center pt-14" onClick={closeModal}>
                    {/* Modal chính */}
                    <div
                        className={`bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg 
                        w-[90%] max-w-[475px]
                        border border-[#F0BD48]
                        transition-transform 
                        transform origin-center ${isClosing ? "animate-closeModal" : "animate-openModal"}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-center text-lg font-bold">RANDOM</h2>
                        <ScrollingList />

                        <button
                            onClick={closeModal}
                            className="w-full mt-4 px-4 py-2 bg-gray-200 text-[#454139] border border-[#454139]/50 rounded-2xl"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Thêm animation vào Tailwind bằng @keyframes */}
            <style>
                {`
                    @keyframes openModal {
                        0% { transform: scaleX(0); opacity: 0; }
                        100% { transform: scaleX(1); opacity: 1; }
                    }

                    @keyframes closeModal {
                        0% { transform: scaleX(1); opacity: 1; }
                        100% { transform: scaleX(0); opacity: 0; }
                    }

                    .animate-openModal { animation: openModal 0.3s forwards; }
                    .animate-closeModal { animation: closeModal 0.3s forwards; }
                `}
            </style>
        </div>
    );
}
