import Ingredients from "../../../ingredients";
import type Ingredient from "../../../types/Ingredient";


describe("When ingredient selection includes only Bloodmoon ingredients", () => {
    Ingredients.assembleIngredientsPool(false, false, true)

    it("cannot return base game ingredients", () => {
        let chokeweed: Ingredient | undefined = Ingredients.findByName("Chokeweed")
        expect(chokeweed).toBeUndefined()
    })

    it("cannot retrieve Tribunal ingredients", () => {
        let timsaComeByFlowers: Ingredient | undefined = Ingredients.findByName("Timsa-Come-By flowers")
        expect(timsaComeByFlowers).toBeUndefined()
    })

})