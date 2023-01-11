import Ingredients from "../../../ingredients";
import type Ingredient from "../../../types/Ingredient";

describe("When ingredient selection includes base game ingredients and Bloodmoon is also selected", () => {
    
    Ingredients.assembleIngredientsPool(true, false, true);
    
    it("returns base game and Bloodmoon ingredients", () => {
        let expectedLength: Number = Object.keys(Ingredients.morrowindIngredients).length + Object.keys(Ingredients.bloodmoonIngredients).length
        expect(Ingredients.ingredientsBeingUsed.length).toBe(expectedLength)
    })

    it("can retrieve an individual Bloodmoon ingredient", () => {
        let bearPelt: Ingredient | undefined = Ingredients.findByName("Bear Pelt")
        expect(bearPelt?.name).toBe("Bear Pelt")
    })

    it("cannot retrieve a Tribunal ingredient", () => {
        let timsaComeByFlowers: Ingredient | undefined = Ingredients.findByName("Timsa-Come-By flowers")
        expect(timsaComeByFlowers).toBeUndefined()
    })
})