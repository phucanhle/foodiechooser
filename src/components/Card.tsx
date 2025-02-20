import Image from "next/image";
import Link from "next/link";

interface RecipesItems {
    recipeID: string;
    ImageSource: string;
    ImageDescription: string;
    ItemName: string;
    ItemDescription: string;
}

export default function ItemCard({ recipeID, ImageSource, ImageDescription, ItemName, ItemDescription }: RecipesItems) {
    return (
        <div
            className="relative w-full max-w-[85%] h-[475px] md:max-w-[260px] md:max-h-[375px]
        rounded-lg 
        bg-white 
        shadow-xl
         group "
        >
            <Image
                src={ImageSource}
                width={500}
                height={500}
                alt={ImageDescription}
                className="h-full w-full object-cover rounded-lg brightness-90"
            />
            <div
                className="absolute top-[50%] w-full h-[50%] z-0 rounded-lg 
                group-hover:h-full group-hover:top-0 
                transition-all duration-500 ease-in-out
                bg-gradient-to-b  
            from-white/70 via-[#dc9a00]/90 via-100% group-hover:via-45% "
            ></div>
            <div
                className="absolute top-[50%] w-full h-[50%] z-20 p-4 rounded-lg 
                transition-all  duration-500 ease-in-out
                group-hover:h-full group-hover:top-0"
            >
                <h1 className="mb-2 text-2xl font-bold text-[#454139]">{ItemName}</h1>

                <p className="text-white group-hover:text-[#454139] text-md block">{ItemDescription}</p>
                <Link
                    href={`/recipes/${recipeID}`}
                    className="opacity-0 block w-fit
                    bg-[#F0BD48] text-[#454139]
                    transition-all  duration-500 ease-in-out
                    mt-4 px-4 py-2 rounded-lg shadow-lg
                    group-hover:opacity-100 hover:brightness-110 active:brightness-95"
                >
                    View Formula
                </Link>
                <Link
                    href={`https://www.google.com/maps/search/${ItemName}+near+me/`}
                    target="_blank"
                    className="opacity-0 w-full text-left block
                    bg-[#00000050] text-white
                    border border-[#F0BD48]
                    transition-all duration-500 ease-in-out
                    my-4 px-4 py-2 rounded-lg shadow-lg
                    group-hover:opacity-100 hover:brightness-110 active:brightness-95"
                >
                    Find the restaurant
                </Link>
            </div>
        </div>
    );
}
