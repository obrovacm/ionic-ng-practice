import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Schnitzel",
      imageUrl:
        "https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg",
      ingredients: ["French Fries", "Pork Meat", "Salad"],
    },
    {
      id: "r2",
      title: "Sarma",
      imageUrl:
        "https://coolinarika.azureedge.net/images/_variations/9/c/9c924e010ccaed50415e25c96877bb39_view_l.jpg?v=0",
      ingredients: ["Cabache", "Pork Meat", "Rice"],
    },
    {
      id: "r3",
      title: "Olivier Salad (Руска салата)",
      imageUrl:
        "https://tropic.ba/wp-content/uploads/2016/08/02-ruska-salata-1024x680.jpg",
      ingredients: [
        "Mayonnaise",
        "Pickle",
        "Peas",
        "Carrot",
        "Potato",
        "Cooked Meat",
        "Parsely",
      ],
    },
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: string) {
    return { ...this.recipes.find((recipe) => recipe.id === id) };
  }

  deleteRecipe(id: string) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
  }
}
