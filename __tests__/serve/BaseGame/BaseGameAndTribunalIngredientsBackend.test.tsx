import Ingredients from "../../../ingredients";
import Ingredient from "../../../types/Ingredient";

describe("When ingredient selection includes base game ingredients and Tribunal is also selected", () => {
    Ingredients.assembleIngredientsPool(true, true, false);
    
    it("returns base game and Tribunal ingredients", () => {
        let expectedLength = Object.keys(Ingredients.morrowindIngredients).length + Object.keys(Ingredients.tribunalIngredients).length
        expect(Ingredients.ingredientsBeingUsed.length).toBe(expectedLength)
    })
    
    it("can retrieve an individual Tribunal ingredient", () => {
        let timsaComeByFlowers: Ingredient | undefined = Ingredients.findByName("Timsa-Come-By flowers")
        expect(timsaComeByFlowers?.name).toBe("Timsa-Come-By flowers")
    })

    it("cannot retrieve a Bloodmoon ingredient", () => {
        let bearPelt: Ingredient | undefined = Ingredients.findByName("Bear Pelt")
        expect(bearPelt).toBeUndefined()
    })


})

