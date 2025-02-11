import Link from "next/link";

export default function Home() {
    return (
        <div
            className="min-h-screen w-screen flex flex-col items-center justify-center bg-orange-50 "
            style={{
                backgroundImage: "url('https://www.foodregulation.gov.au/sites/default/files/2024-06/food-regulation.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <header className="w-full bg-orange-600 text-gray-200 py-2 text-center text-2xl font-bold shadow-md">Foods</header>
            <main className="relative flex flex-col items-center justify-center flex-1 px-6 z-10 ">
                <div className="absolute bg-gray-800 w-screen h-full -z-10 opacity-60  "></div>
                <h1 className="text-4xl font-extrabold  text-center text-orange-600 ">
                    Chào mừng bạn đến với <span className="text-orange-700">?Foods</span>
                </h1>
                <p className="mt-4 text-lg text-center text-orange-700">
                    Khám phá những món ăn hấp dẫn và trải nghiệm ẩm thực tuyệt vời cùng chúng tôi!
                </p>
                <Link
                    href="/foods"
                    className="my-10 px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-700 transition"
                >
                    Món ngẫu nhiên
                </Link>
                <div className="mt-6 flex items-center gap-2 flex-wrap justify-center">
                    <input
                        type="text"
                        className="px-4 py-2 border border-orange-400 rounded-lg focus:ring-2 focus:ring-orange-500 
                        w-full
                        focus:outline-none placeholder:text-orange-500"
                        placeholder="Nhập tên món ăn..."
                    />
                    <button className="px-6 py-3 bg-orange-500 text-white  font-semibold rounded-lg shadow-md hover:bg-orange-700 transition">
                        Tìm kiếm công thức
                    </button>
                </div>
            </main>

            <footer className="w-full py-4 text-center bg-orange-800 text-white">
                © {new Date().getFullYear()} - Bản quyền thuộc về PA.
            </footer>
        </div>
    );
}
