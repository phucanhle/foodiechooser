"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import SearchBar from "./SearchBar";

export default function Header() {
    const headerRef = useRef();
    const [isClicking, setIsClicking] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

    useEffect(() => {
        gsap.from(headerRef.current, {
            y: -10,
            duration: 0.5,
            ease: "bounce",
        });
    }, [isClicking]);

    useEffect(() => {
        // Nếu menu mở (isMenuOpen = true), tăng chiều cao của header
        if (isMenuOpen) {
            gsap.to(headerRef.current, {
                height: "240px", // Thay đổi chiều cao khi menu mở
                duration: 0.5,
                ease: "bounce",
            });
        } else {
            // Nếu menu đóng (isMenuOpen = false), giảm chiều cao của header
            gsap.to(headerRef.current, {
                height: "70px", // Chiều cao mặc định của header
                duration: 0.5,
                ease: "bounce",
            });
        }
    }, [isMenuOpen]);

    const handleOnClicking = () => {
        setIsClicking(!isClicking);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
    };

    return (
        <header
            ref={headerRef}
            className="w-[90%] max-w-[1080px] fixed top-5 z-50
            rounded-2xl shadow-sm py-5 px-10 
            flex justify-between flex-col md:flex-row items-center 
            border border-[#F0BD48] bg-white/30 
            backdrop-blur-md 
            animate-[bounce_ease-in_1]"
        >
            <div className="w-full flex justify-between">
                <Link href="/" className="text-2xl font-bold" onClick={handleOnClicking}>
                    Logo
                </Link>

                {/* Button burger icon */}
                <button className="md:hidden block focus:outline-none" onClick={toggleMenu}>
                    <div className="w-6 h-0.5 bg-black mb-1"></div>
                    <div className="w-6 h-0.5 bg-black mb-1"></div>
                    <div className="w-6 h-0.5 bg-black"></div>
                </button>
            </div>
            {/* Menu */}
            <ul
                className={`
                    flex gap-y-5 md:flex-row flex-col md:gap-x-5  items-end md:items-center md:flex
                    bg-transparent 
                    py-5 md:p-0  top-16 left-0 
                    h-fit
                    w-full md:w-fit 
                    transform ${isMenuOpen ? "h-fit" : "h-0 hidden"} 
                    transition-all duration-500 md:translate-x-0 md:flex-row`}
            >
                <li>
                    <Link href="/recipes" className="text-base text-nowrap" onClick={handleOnClicking}>
                        Recipes
                    </Link>
                </li>
                <li>
                    <Link href="/ingredients" className="text-base text-nowrap" onClick={handleOnClicking}>
                        Ingredients
                    </Link>
                </li>
                <li>
                    <Link href="/meal-plans" className="text-base text-nowrap" onClick={handleOnClicking}>
                        Meal Plans
                    </Link>
                </li>
            </ul>
        </header>
    );
}
