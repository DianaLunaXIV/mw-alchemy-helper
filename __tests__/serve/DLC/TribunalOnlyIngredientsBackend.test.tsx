import Ingredients from "../../../ingredients"
import Ingredient from "../../../types/Ingredient"

describe("When ingredient selection includes only Tribunal ingredients", () => {
    let ingredients: Ingredient[] = Ingredients.assembleIngredientsPool(false, true, false)

    it("cannot return base game ingredients", () => {
        let chokeweed: Ingredient | undefined = ingredients.find(ingredient => ingredient.name === "Chokeweed")
        expect(chokeweed).toBeUndefined()
    })

    it("cannot retrieve Bloodmoon ingredients", () => {
        let bearPelt: Ingredient | undefined = ingredients.find(ingredient => ingredient.name === "Bear Pelt")
        expect(bearPelt).toBeUndefined()
    })

})