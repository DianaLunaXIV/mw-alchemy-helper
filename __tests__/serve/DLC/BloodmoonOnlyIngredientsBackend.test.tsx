import Ingredients from "../../../ingredients";
import type Ingredient from "../../../types/Ingredient";


describe("When ingredient selection includes only Bloodmoon ingredients", () => {
    let ingredients: Ingredient[] = Ingredients.assembleIngredientsPool(false, false, true)

    it("cannot return base game ingredients", () => {
        let chokeweed: Ingredient | undefined = ingredients.find(ingredient => ingredient.name === "Chokeweed")
        expect(chokeweed).toBeUndefined()
    })

    it("cannot retrieve Tribunal ingredients", () => {
        let timsaComeByFlowers: Ingredient | undefined = ingredients.find(ingredient => ingredient.name === "Timsa-Come-By flowers")
        expect(timsaComeByFlowers).toBeUndefined()
    })

})