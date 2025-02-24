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
