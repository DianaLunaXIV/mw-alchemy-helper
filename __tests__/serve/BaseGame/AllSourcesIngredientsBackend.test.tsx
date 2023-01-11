import Ingredients from "../../../ingredients";
import type Ingredient from "../../../types/Ingredient";

describe("When ingredient selection includes all DLC", () => {
    
    Ingredients.assembleIngredientsPool(true, true, true);
    
    it("returns all ingredients", () => {
        let expectedLength: Number = Object.keys(Ingredients.morrowindIngredients).length + Object.keys(Ingredients.bloodmoonIngredients).length + Object.keys(Ingredients.tribunalIngredients).length
        expect(Ingredients.ingredientsBeingUsed.length).toBe(expectedLength)
    })

    it("can retrieve an individual Bloodmoon ingredient", () => {
        let bearPelt: Ingredient | undefined = Ingredients.findByName("Bear Pelt")
        expect(bearPelt?.name).toBe("Bear Pelt")
    })

    it("can retrieve an individual Tribunal ingredient", () => {
        let timsaComeByFlowers: Ingredient | undefined = Ingredients.findByName("Timsa-Come-By flowers")
        expect(timsaComeByFlowers?.name).toBe("Timsa-Come-By flowers")
    })

    it("cannot retrieve a non-existant ingredient", () => {
        let spinach: Ingredient | undefined = Ingredients.findByName("Spinach")
        expect(spinach).toBeUndefined()
    })
})