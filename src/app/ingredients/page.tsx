import SearchBar from "@/components/SearchBar";
import IngredientCard from "@/components/IngredientsCard";

export default function Ingredients() {
    const fakedatafood = [
        {
            imageSrc:
                "https://www.lovefoodhatewaste.com/sites/default/files/styles/16_9_two_column/public/2022-08/Pork-sh1419942758.jpg.webp?itok=_Ow0IXe6",
            imageDes: "Fresh raw pork with marbling",
            ingredientName: "Pork",
            ingredientDes: "Fresh pork, perfect for braising, grilling, or stir-frying.",
            nutritionFacts: {
                calories: 242,
                protein: "27g",
                fat: "14g",
                carbohydrates: "0g",
                vitamins: ["B1", "B6", "B12"],
                minerals: ["Zinc", "Iron", "Phosphorus"],
            },
        },
        {
            imageSrc:
                "https://www.lovefoodhatewaste.com/sites/default/files/styles/16_9_two_column/public/2022-08/Beef-sh344681603.jpg.webp?itok=qenlRZUs",
            imageDes: "High-quality beef steak",
            ingredientName: "Beef",
            ingredientDes: "Tender beef, rich in protein, great for hotpot, stir-fry, or steak.",
            nutritionFacts: {
                calories: 250,
                protein: "26g",
                fat: "17g",
                carbohydrates: "0g",
                vitamins: ["B12", "B6"],
                minerals: ["Iron", "Zinc", "Selenium"],
            },
        },
        {
            imageSrc:
                "https://www.bhg.com/thmb/rCjM-NJphWls3OAOJXSyjmkodnQ=/1244x0/filters:no_upscale():strip_icc()/static.onecms.io__wp-content__uploads__sites__37__2020__04__30__carrots-106dce5c-74aa64b81c184bffb80b7381b72615a1.jpg",
            imageDes: "Fresh organic carrots",
            ingredientName: "Carrots",
            ingredientDes: "Crunchy and sweet, great for salads, soups, or roasting.",
            nutritionFacts: {
                calories: 41,
                protein: "1g",
                fat: "0.2g",
                carbohydrates: "10g",
                vitamins: ["A", "K", "C"],
                minerals: ["Potassium", "Fiber"],
            },
        },
        {
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
            imageDes: "Fresh red tomatoes",
            ingredientName: "Tomatoes",
            ingredientDes: "Juicy and slightly tangy, great for sauces, salads, and soups.",
            nutritionFacts: {
                calories: 18,
                protein: "0.9g",
                fat: "0.2g",
                carbohydrates: "3.9g",
                vitamins: ["C", "K"],
                minerals: ["Potassium"],
            },
        },
        {
            imageSrc: "https://southmill.com/wp-content/uploads/2021/12/beech-isolated-white@2x.png",
            imageDes: "A mix of fresh mushrooms",
            ingredientName: "Beech Mushrooms",
            ingredientDes: "Earthy and umami-rich, perfect for stir-fries, soups, and pasta.",
            nutritionFacts: {
                calories: 22,
                protein: "3g",
                fat: "0.3g",
                carbohydrates: "3.3g",
                vitamins: ["B2", "B3", "D"],
                minerals: ["Selenium", "Copper"],
            },
        },
    ];

    return (
        <div className="px-10">
            <h1 className="text-center lg:text-left text-2xl font-bold my-2 text-slate-400">
                <span className="text-orange-600">Ing</span>redients
            </h1>
            <SearchBar />
            <hr className="my-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {fakedatafood.map((item, index) => (
                    <IngredientCard
                        key={index}
                        imageSrc={item.imageSrc}
                        imageDes={item.imageDes}
                        ingredientName={item.ingredientName}
                        ingredientDes={item.ingredientDes}
                        nutritionFacts={item.nutritionFacts} // Nếu có dữ liệu dinh dưỡng
                    />
                ))}
            </div>
        </div>
    );
}
