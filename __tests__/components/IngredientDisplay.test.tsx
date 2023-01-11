import React from "react";
import { render, screen } from "@testing-library/react";
import Ingredients from "../../ingredients";
import IngredientDisplay from "../../components/IngredientDisplay";

describe("IngredientDisplay", () => {
  let ingredients = Ingredients.assembleIngredientsPool(true, true, true);
  it("should render the name of the ingredient", () => {
    render(
      <IngredientDisplay
        ingredient={ingredients.find(
          (ingredient) => ingredient.name === "Chokeweed"
        )}
      />
    );

    expect(screen.getByText("Chokeweed")).toBeDefined();
  });
});
