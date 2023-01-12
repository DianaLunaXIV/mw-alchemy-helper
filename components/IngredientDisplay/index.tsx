import React from "react";
import Ingredient from "../../types/Ingredient";
import Effect from "../../types/Effect"

interface IngredientDisplayProps {
  ingredient: Ingredient | undefined;
}

const IngredientDisplay: React.FC<IngredientDisplayProps> = ({
  ingredient,
}) => {
  return (
      <>
        <h1>{ingredient ? ingredient.name : "nothing"}</h1>
        <>
            {ingredient?.effects.map(eff => <h2>{eff?.effectName}</h2>)}
        </>

      </>
  );
};

export default IngredientDisplay;
