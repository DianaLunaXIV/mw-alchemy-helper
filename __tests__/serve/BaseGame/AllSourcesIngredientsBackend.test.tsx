import Ingredients from "../../../ingredients";
import type Ingredient from "../../../types/Ingredient";

describe("When ingredient selection includes all DLC", () => {
    
    let ingredients: Ingredient[] = Ingredients.assembleIngredientsPool(true, true, true);
    
    it("returns all ingredients", () => {
        let expectedLength: Number = Object.keys(Ingredients.morrowindIngredients).length + Object.keys(Ingredients.bloodmoonIngredients).length + Object.keys(Ingredients.tribunalIngredients).length
        expect(ingredients.length).toBe(expectedLength)
    })

    it("can retrieve an individual Bloodmoon ingredient", () => {
        let bearPelt: Ingredient | undefined = ingredients.find(ingredient => ingredient.name === "Bear Pelt")
        expect(bearPelt?.name).toBe("Bear Pelt")
    })

    it("can retrieve an individual Tribunal ingredient", () => {
        let timsaComeByFlowers: Ingredient | undefined = ingredients.find(ingredient => ingredient.name === "Timsa-Come-By flowers")
        expect(timsaComeByFlowers?.name).toBe("Timsa-Come-By flowers")
    })

    it("cannot retrieve a non-existant ingredient", () => {
        let spinach: Ingredient | undefined = ingredients.find(ingredient => ingredient.name === "Spinach")
        expect(spinach).toBeUndefined()
    })
})