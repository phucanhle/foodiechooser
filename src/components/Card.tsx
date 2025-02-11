export default function ItemCard({ ImageSource, ImageDescription, ItemName, ItemDescription }: any) {
    return (
        <div className="w-full max-w-[25rem]  rounded-lg bg-white shadow-md transition-transform">
            <img src={ImageSource} alt={ImageDescription} className="h-[16rem] w-full object-cover rounded-lg" />
            <div className="p-4">
                <h1 className="mb-2 text-md font-semibold">{ItemName}</h1>
                <p className=" text-sm">{ItemDescription}</p>
                {/* <span className="rounded-xl bg-gray-400 px-3 text-sm">40 min</span> */}
                <button className="border border-orange-300 rounded-md mt-2 py-1 px-4 text-sm hover:bg-orange-300 active:bg-orange-200">
                    View Formula
                </button>
            </div>
        </div>
    );
}
