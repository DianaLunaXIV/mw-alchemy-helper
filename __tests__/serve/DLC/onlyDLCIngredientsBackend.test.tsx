import Ingredients from "../../../ingredients";
import type Ingredient from "../../../types/Ingredient";

describe("When only the DLCs are selected", () => {
    let ingredients: Ingredient[] = Ingredients.assembleIngredientsPool(false, true, true)
    
    it("cannot return base game ingredients", () => {
        let chokeweed: Ingredient | undefined = ingredients.find(ingredient => ingredient.name === "Chokeweed")
        expect(chokeweed).toBeUndefined()
    })
    
})