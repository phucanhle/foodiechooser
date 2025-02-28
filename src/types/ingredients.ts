// src/types/ingredient.ts
export interface NutritionFacts {
    calories: number;
    protein: string;
    fat: string;
    carbohydrates: string;
    vitamins: string[];
    minerals: string[];
}

export interface Ingredient {
    imageSrc: string;
    imageDes: string;
    ingredientName: string;
    ingredientDes: string;
    nutritionFacts: NutritionFacts;
    group: string;
}


export interface FoodItem {
    id: number;
    ingredient_name: string;
    ingredient_des: string;
    image_src?: string;
    image_des?: string;
    nutrition_facts?: {
        calories: number;
        protein: number;
        fat: number;
        carbohydrates: number;
    }[];
    food_groups?: { name: string };
    food_minerals?: { minerals: { name: string } }[];
    food_vitamins?: { vitamins: { name: string } }[];
};

export interface Recipe {
    id: string;
    image_src: string;
    image_des: string;
    food_name: string;
    food_des: string;
};