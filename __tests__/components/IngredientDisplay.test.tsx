import React from "react";
import { render, screen } from "@testing-library/react";
import Ingredients from "../../ingredients";
import IngredientDisplay from "../../components/IngredientDisplay";

describe("IngredientDisplay", () => {
  Ingredients.assembleIngredientsPool(true, true, true);
  it("should render Chokeweed's name and its 4 effects", () => {
    render(
      <IngredientDisplay ingredient={Ingredients.findByName("Chokeweed")} />
    );

    expect(screen.getByText("Chokeweed")).toBeDefined();
    expect(screen.getByText("Drain Luck")).toBeDefined();
    expect(screen.getByText("Restore Fatigue")).toBeDefined();
    expect(screen.getByText("Cure Common Disease")).toBeDefined();
    expect(screen.getByText("Drain Willpower")).toBeDefined();
  });

  it("should render Racer Plumes' name and its 2 effects", () => {
    render(
      <IngredientDisplay ingredient={Ingredients.findByName("Racer Plumes")} />
    );

    expect(screen.getByText("Racer Plumes")).toBeDefined();
    expect(screen.getByText("Drain Willpower")).toBeDefined();
    expect(screen.getByText("Levitate")).toBeDefined();
  });
});
