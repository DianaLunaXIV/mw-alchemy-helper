import React from "react";
import Ingredient from "../../types/Ingredient";

interface IngredientHeaderProps {
  ingredient: Ingredient;
}

const IngredientHeader: React.FC<IngredientHeaderProps> = ({ ingredient }) => {
  return (
    <div>
      <img src={ingredient.image} />
      <h1>
        <a href={ingredient.url}>{ingredient.name}</a>
      </h1>
    </div>
  );
};

export default IngredientHeader;
