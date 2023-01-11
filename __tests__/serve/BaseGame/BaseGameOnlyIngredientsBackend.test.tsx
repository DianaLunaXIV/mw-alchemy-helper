import Ingredients from "../../../ingredients";
import Effect from "../../../types/Effect";
import type Ingredient from "../../../types/Ingredient";

describe("When ingredient selection includes only base game ingredients", () => {
    let ingredients: Ingredient[] = Ingredients.assembleIngredientsPool(true, false, false);
    it("returns only the base game ingredients", () => {
        expect(ingredients.length).toBe(Object.keys(Ingredients.morrowindIngredients).length)
    })

    it("can retrieve an individual ingredient", () => {
        let hide: Ingredient | undefined = ingredients.find(ingredient => ingredient.name === "Alit Hide")
        expect(hide?.name).toBe("Alit Hide")
    })

    it("can access an individual ingredient's effects", () => {
        let netchLeather: Ingredient | undefined = ingredients.find(ingredient => ingredient.name === "Netch Leather")
        let netchLeatherEffects: Effect[] | undefined = netchLeather?.effects;
        expect(netchLeatherEffects).toBeDefined()
    })
})