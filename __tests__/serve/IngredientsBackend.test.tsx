import Ingredients from "../../ingredients";



describe("When ingredient selection includes base game ingredients", () => {
    test("and no other selections, it returns only the base game ingredients", () => {
        let ingredients = Ingredients.assembleIngredientsPool(true, false, false);
        expect(ingredients.length).toBe(Object.keys(Ingredients.morrowindIngredients).length)
    })

    test("and Tribunal is also selected, it returns base game and Tribunal ingredients", () => {
        let ingredients = Ingredients.assembleIngredientsPool(true, true, false);
        let expectedLength = Object.keys(Ingredients.morrowindIngredients).length + Object.keys(Ingredients.tribunalIngredients).length
        expect(ingredients.length).toBe(expectedLength)
    })

    test("and Bloodmoon is also selected, it returns base game and Bloodmoon ingredients", () => {
        let ingredients = Ingredients.assembleIngredientsPool(true, false, true);
        let expectedLength = Object.keys(Ingredients.morrowindIngredients).length + Object.keys(Ingredients.bloodmoonIngredients).length
        expect(ingredients.length).toBe(expectedLength)
    })

    test("and all DLC is also selected, it returns base game and all DLC ingredients", () => {
        let ingredients = Ingredients.assembleIngredientsPool(true, true, true);
        let expectedLength = Object.keys(Ingredients.morrowindIngredients).length + Object.keys(Ingredients.bloodmoonIngredients).length + Object.keys(Ingredients.tribunalIngredients).length
        expect(ingredients.length).toBe(expectedLength)
    })

})


