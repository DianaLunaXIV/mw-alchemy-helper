import * as morrowindIngredientsJson from "./morrowind-ingredients.json";
import * as tribunalIngredientsJson from "./tribunal-ingredients.json";
import * as bloodmoonIngredientsJson from "./bloodmoon-ingredients.json";
import ingredient from "../types/Ingredient";
import Ingredient from "../types/Ingredient";

class Ingredients {
    readonly morrowindIngredients: Array<Object>;
    readonly tribunalIngredients: Array<Object>;
    readonly bloodmoonIngredients: Array<Object>;

    constructor() {
        this.morrowindIngredients = morrowindIngredientsJson;
        this.tribunalIngredients = tribunalIngredientsJson;
        this.bloodmoonIngredients = bloodmoonIngredientsJson;
    }


    //pass comma separated values here to make pool selections
    assembleIngredientsPool(includesMorrowind: boolean, includesTribunal: boolean, includesBloodmoon: boolean): Array<Object> {
        let ingredientsToReturn: Array<Object> = [];
        
        if (includesMorrowind) {
           for (let i = 0; i < Object.keys(this.morrowindIngredients).length; i++) {
               ingredientsToReturn.push(this.morrowindIngredients[i])
           }
        }

        if (includesTribunal) {
            for (let i = 0; i < Object.keys(this.tribunalIngredients).length; i++) {
                ingredientsToReturn.push(this.tribunalIngredients[i])
            }
        }

        if (includesBloodmoon) {
            for (let i = 0; i < Object.keys(this.bloodmoonIngredients).length; i++) {
                ingredientsToReturn.push(this.bloodmoonIngredients[i])
            }
        }

        if (!includesBloodmoon && !includesTribunal && !includesMorrowind) {
            throw Error("Please make an ingredient source selection.");
        }


        return ingredientsToReturn;

    }

    
}

export default new Ingredients();
