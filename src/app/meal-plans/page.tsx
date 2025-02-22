import MealPlanCard from "@/components/PlansCard";
import Tittle from "@/components/Title";

export default function MealPlan() {
    const mealPlans = [
        {
            name: "Healthy Diet",
            image: "https://cleverads.vn/blog/wp-content/uploads/2023/10/thi-truong-healthy-food-1.jpg",
            duration: "7 Days",
            calories: "1200-1500",
            meals: ["Oatmeal Breakfast", "Grilled Chicken Salad", "Smoothie Bowl"],
            price: "$49.99",
        },
        {
            name: "Keto Plan",
            image: "https://www.godigit.com/content/dam/godigit/directportal/en/breakfast-ideas.jpg",
            duration: "14 Days",
            calories: "1400-1600",
            meals: ["Avocado Omelet", "Salmon with Asparagus", "Cheese & Nuts"],
            price: "$89.99",
        },
        {
            name: "Vegan Delight",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUvTP_CeTC8jrubE2WB9Y9zAeuatVNX-NLg&s",
            duration: "30 Days",
            calories: "1300-1500",
            meals: ["Tofu Stir-fry", "Quinoa Salad", "Vegan Protein Shake"],
            price: "$129.99",
        },
    ];
    return (
        <div className="w-full max-w-[1080px] min-h-screen py-32">
            <Tittle content="Meal Plan" />

            <div className="flex flex-wrap justify-around gap-4 mt-10">
                {mealPlans.map((plan, index) => (
                    <MealPlanCard key={index} {...plan} />
                ))}
            </div>
        </div>
    );
}
