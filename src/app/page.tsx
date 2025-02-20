import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#F0BD48] via-20% via-white">
            <main className="relative flex flex-col items-center justify-center flex-1 px-6 w-full">
                <div className="text-center">
                    <h1 className="text-6xl">Let's find your</h1>
                    <h1 className="text-8xl text-[#F0BD48] font-bold mt-5">FOOD</h1>
                </div>
                <div className="flex gap-5 w-full my-20 flex-wrap justify-center">
                    <input
                        type="text"
                        placeholder="Type your food you want..."
                        className="w-full max-w-[480px]
                         bg-white px-6 py-4 rounded-2xl font-bold text-xl text-[#454139] placeholder:text-[#454139] 
                        border border-[#F0BD48] outline-none
                        focus:placeholder:text-[#F0BD48] focus:outline-[#F0BD48]  focus:ring-[#F0BD48]"
                    />
                    <button className="w-full max-w-40 bg-[#F0BD48] text-[#454139] text-xl px-6 py-5 rounded-2xl font-bold">
                        And find it!
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <p className=" text-[#454139] mb-2">Can't you pick a food?</p>
                    <button className="w-full max-w-96 bg-[#F0BD48] text-[#454139] text-xl px-12 py-4 rounded-2xl font-bold">
                        Let us choose for you!
                    </button>
                </div>
            </main>

            {/* <footer className="w-full py-4 text-center bg-orange-800 text-white">
                © {new Date().getFullYear()} - Bản quyền thuộc về PA.
            </footer> */}
        </div>
    );
}
