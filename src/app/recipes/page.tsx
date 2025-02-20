import ItemCard from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import Title from "@/components/Title";
export default function Recipes() {
    const fakedatafood = [
        {
            recipeID: "2",
            imageSrc: "https://www.cookingclassy.com/wp-content/uploads/2018/05/grilled-salmon-3.jpg",
            imageDes: "Grilled salmon with lemon and herbs",
            foodName: "Grilled Salmon",
            foodDes: "Perfectly grilled salmon fillet with fresh herbs and a squeeze of lemon.",
        },
        {
            recipeID: "3",
            imageSrc:
                "https://www.redefinemeat.com/uk/wp-content/uploads/2024/08/Retail_Recipe_Photoshoot_Premium-Burgers_Plain-1-scaled.jpg",
            imageDes: "A juicy cheeseburger with lettuce and tomato",
            foodName: "Classic Cheeseburger",
            foodDes: "Juicy beef patty topped with melted cheese, lettuce, and tomato on a toasted bun.",
        },

        {
            recipeID: "5",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVwNUE-yOHojtzcBXP_Z_PreqHvke1J7e2Q&s",
            imageDes: "Cheese pizza with a crispy crust",
            foodName: "Cheese Pizza",
            foodDes: "A classic cheese pizza with a perfectly crispy crust and rich tomato sauce.",
        },
        {
            recipeID: "6",
            imageSrc: "https://tatyanaseverydayfood.com/wp-content/uploads/2019/06/Ribeye-Steak-Dinner-4-of-4-768x1024.jpg",
            imageDes: "A tender and juicy steak",
            foodName: "Grilled Ribeye Steak",
            foodDes: "A perfectly grilled ribeye steak, seasoned to perfection.",
        },
        {
            recipeID: "7",
            imageSrc: "https://carlsbadcravings.com/wp-content/uploads/2023/06/chicken-street-tacos-7a.jpg",
            imageDes: "Mexican-style tacos with fresh toppings",
            foodName: "Street Tacos",
            foodDes: "Soft corn tortillas filled with seasoned meat, fresh cilantro, and onions.",
        },
        {
            recipeID: "8",
            imageSrc: "https://garlicsaltandlime.com/wp-content/uploads/2022/07/Garden-salad-thumbnail.jpg",
            imageDes: "A fresh garden salad with various vegetables",
            foodName: "Garden Salad",
            foodDes: "A mix of fresh lettuce, cucumbers, tomatoes, and carrots with a light vinaigrette.",
        },
    ];

    return (
        <div
            className="flex flex-col items-center justify-center
            min-h-screen w-full h-full
            py-40"
        >
            <Title content="Recipes" />
            <div
                className="flex flex-wrap gap-20 justify-around
                w-full max-w-[1080px] 
                mt-10"
            >
                {fakedatafood.map((item, index) => (
                    <ItemCard
                        key={index}
                        recipeID={item.recipeID}
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
