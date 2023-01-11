import Ingredients from "../../../ingredients";
import Ingredient from "../../../types/Ingredient";

describe("When ingredient selection includes only Tribunal ingredients", () => {
  Ingredients.assembleIngredientsPool(false, true, false);

  it("cannot return base game ingredients", () => {
    let chokeweed: Ingredient | undefined = Ingredients.findByName("Chokeweed");
    expect(chokeweed).toBeUndefined();
  });

  it("cannot retrieve Bloodmoon ingredients", () => {
    let bearPelt: Ingredient | undefined = Ingredients.findByName("Bear Pelt");
    expect(bearPelt).toBeUndefined();
  });
});
