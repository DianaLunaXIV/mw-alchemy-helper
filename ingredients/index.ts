import morrowindIngredientsJson from "./morrowind-ingredients.json";
import tribunalIngredientsJson from "./tribunal-ingredients.json";
import bloodmoonIngredientsJson from "./bloodmoon-ingredients.json";
import Ingredient from "../types/Ingredient";

class Ingredients {
  readonly morrowindIngredients: Ingredient[];
  readonly tribunalIngredients: Ingredient[];
  readonly bloodmoonIngredients: Ingredient[];
  ingredientsBeingUsed: Ingredient[];

  constructor() {
    this.morrowindIngredients = morrowindIngredientsJson as Ingredient[];
    this.tribunalIngredients = tribunalIngredientsJson as Ingredient[];
    this.bloodmoonIngredients = bloodmoonIngredientsJson as Ingredient[];
    this.ingredientsBeingUsed = [] as Ingredient[];
  }

  findByName(ingredientName: string): Ingredient | undefined {
    return this.ingredientsBeingUsed.find(
      (ingredient) => ingredient.name === ingredientName
    );
  }

  assembleIngredientsPool(
    includesMorrowind: boolean,
    includesTribunal: boolean,
    includesBloodmoon: boolean
  ): Ingredient[] {
    let ingredientsToReturn: Ingredient[] = [];

    if (includesMorrowind) {
      for (let i = 0; i < Object.keys(this.morrowindIngredients).length; i++) {
        ingredientsToReturn.push(this.morrowindIngredients[i]);
      }
    }

    if (includesTribunal) {
      for (let i = 0; i < Object.keys(this.tribunalIngredients).length; i++) {
        ingredientsToReturn.push(this.tribunalIngredients[i]);
      }
    }

    if (includesBloodmoon) {
      for (let i = 0; i < Object.keys(this.bloodmoonIngredients).length; i++) {
        ingredientsToReturn.push(this.bloodmoonIngredients[i]);
      }
    }

    if (!includesBloodmoon && !includesTribunal && !includesMorrowind) {
      throw Error("Please make an ingredient source selection.");
    }

    this.ingredientsBeingUsed = ingredientsToReturn;
    return ingredientsToReturn;
  }
}

export default new Ingredients();
