import ItemCard from "@/components/Card";
import SearchBar from "@/components/SearchBar";

export default function Recipes() {
    const fakedatafood = [
        {
            imageSrc: "https://www.hallstromhome.com/wp-content/uploads/2022/04/chicken-pot-pie-2-scaled.jpeg",
            imageDes: "A delicious chicken pot pie with a crispy crust",
            foodName: "Chicken Pot Pie",
            foodDes: "Savory chicken and vegetables baked in a golden, flaky crust.",
        },
        {
            imageSrc: "https://www.cookingclassy.com/wp-content/uploads/2018/05/grilled-salmon-3.jpg",
            imageDes: "Grilled salmon with lemon and herbs",
            foodName: "Grilled Salmon",
            foodDes: "Perfectly grilled salmon fillet with fresh herbs and a squeeze of lemon.",
        },
        {
            imageSrc:
                "https://www.redefinemeat.com/uk/wp-content/uploads/2024/08/Retail_Recipe_Photoshoot_Premium-Burgers_Plain-1-scaled.jpg",
            imageDes: "A juicy cheeseburger with lettuce and tomato",
            foodName: "Classic Cheeseburger",
            foodDes: "Juicy beef patty topped with melted cheese, lettuce, and tomato on a toasted bun.",
        },
        {
            imageSrc: "https://img.bestrecipes.com.au/lGmBtihN/br/2020/10/spaghetti-marinara-960532-1.jpg",
            imageDes: "Pasta with rich tomato sauce and fresh basil",
            foodName: "Spaghetti Marinara",
            foodDes: "Classic spaghetti pasta with rich marinara sauce and fresh basil.",
        },
        {
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVwNUE-yOHojtzcBXP_Z_PreqHvke1J7e2Q&s",
            imageDes: "Cheese pizza with a crispy crust",
            foodName: "Cheese Pizza",
            foodDes: "A classic cheese pizza with a perfectly crispy crust and rich tomato sauce.",
        },
        {
            imageSrc: "https://tatyanaseverydayfood.com/wp-content/uploads/2019/06/Ribeye-Steak-Dinner-4-of-4-768x1024.jpg",
            imageDes: "A tender and juicy steak",
            foodName: "Grilled Ribeye Steak",
            foodDes: "A perfectly grilled ribeye steak, seasoned to perfection.",
        },
        {
            imageSrc: "https://carlsbadcravings.com/wp-content/uploads/2023/06/chicken-street-tacos-7a.jpg",
            imageDes: "Mexican-style tacos with fresh toppings",
            foodName: "Street Tacos",
            foodDes: "Soft corn tortillas filled with seasoned meat, fresh cilantro, and onions.",
        },
        {
            imageSrc: "https://garlicsaltandlime.com/wp-content/uploads/2022/07/Garden-salad-thumbnail.jpg",
            imageDes: "A fresh garden salad with various vegetables",
            foodName: "Garden Salad",
            foodDes: "A mix of fresh lettuce, cucumbers, tomatoes, and carrots with a light vinaigrette.",
        },
        {
            imageSrc: "https://zushi.com.au/wp-content/uploads/2020/12/sushi-and-sashimi-catering-platter-10-e1691215721899.jpg",
            imageDes: "A plate of assorted sushi rolls",
            foodName: "Sushi Platter",
            foodDes: "A delicious assortment of fresh sushi rolls with soy sauce and wasabi.",
        },
    ];

    return (
        <div className="px-10">
            <h1 className="text-center lg:text-left text-2xl font-bold my-2 text-slate-400">
                <span className="text-orange-600">R</span>ecipes
            </h1>
            <SearchBar />
            <hr className="my-5" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {fakedatafood.map((item, index) => (
                    <ItemCard
                        key={index}
                        ImageSource={item.imageSrc}
                        ImageDescription={item.imageDes}
                        ItemName={item.foodName}
                        ItemDescription={item.foodDes}
                    />
                ))}
            </div>
        </div>
    );
}
