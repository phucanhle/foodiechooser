export default function SearchBar() {
    return (
        <div className="relative w-full max-w-[25rem]">
            <input
                type="text"
                className="py-2 pl-10 pr-4 border rounded-full outline-none 
                border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 
                w-full transition-all duration-300 shadow-sm hover:shadow-md"
                placeholder="Search for food..."
            />
            <svg
                className="w-6 h-6 text-gray-800 dark:text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 "
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
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
            </svg>
        </div>
    );
}
