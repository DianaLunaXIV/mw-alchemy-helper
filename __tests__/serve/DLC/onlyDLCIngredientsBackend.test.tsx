import Ingredients from "../../../ingredients";
import type Ingredient from "../../../types/Ingredient";

describe("When only the DLCs are selected", () => {
  Ingredients.assembleIngredientsPool(false, true, true);

  it("cannot return base game ingredients", () => {
    let chokeweed: Ingredient | undefined = Ingredients.findByName("Chokeweed");
    expect(chokeweed).toBeUndefined();
  });
});
