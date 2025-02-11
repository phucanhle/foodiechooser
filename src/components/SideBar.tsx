"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
    const [isClose, setIsClose] = useState(true);

    const handleCloseSidebar = () => {
        setIsClose(true);
    };

    return (
        <div className="z-50">
            {/* Nút mở sidebar */}
            <button
                className={`fixed bg-orange-500 p-3 top-20 -left-4 rotate-45 w-8 h-8 border border-black 
                transition-opacity duration-300 ${isClose ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onMouseEnter={() => setIsClose(false)}
            ></button>
            {!isClose && <label htmlFor="closesidebar" className="fixed w-screen h-screen bg-zinc-900 opacity-50 "></label>}
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen w-[16rem] sm:w-[20rem] p-4 shadow-xl text-gray-700 bg-white
                transform transition-transform duration-300 ${isClose ? "-translate-x-full" : "translate-x-0"}`}
            >
                <div className="mb-10 flex justify-between">
                    <h1 className="text-xl font-bold">
                        <Link href="/" onClick={handleCloseSidebar}>
                            <span className="text-orange-600">?F</span>ood
                        </Link>
                    </h1>
                    <button id="closesidebar" onClick={handleCloseSidebar}>
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-dark"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18 17.94 6M18 18 6.06 6"
                            />
                        </svg>
                    </button>
                </div>
                <ul>
                    <Link
                        href="/foods"
                        className="block w-full text-black hover:bg-orange-300 py-2 px-4 rounded-xl mt-2 cursor-pointer"
                        onClick={handleCloseSidebar}
                    >
                        Foods
                    </Link>
                    <Link
                        href="/recipes"
                        className="block w-full text-black hover:bg-orange-300 py-2 px-4 rounded-xl mt-2 cursor-pointer"
                        onClick={handleCloseSidebar}
                    >
                        Recipes
                    </Link>
                    <Link
                        href="/ingredients"
                        className="block w-full text-black hover:bg-orange-300 py-2 px-4 rounded-xl mt-2 cursor-pointer"
                        onClick={handleCloseSidebar}
                    >
                        Ingredients
                    </Link>
                </ul>
            </div>
        </div>
    );
}
