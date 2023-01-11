import React from "react";
import Ingredient from "../../types/Ingredient";

interface IngredientDisplayProps {
    ingredient: Ingredient | undefined;
}

const IngredientDisplay: React.FC<IngredientDisplayProps> = ({ingredient}) => {

    return <h1>{ingredient ? ingredient.name : "nothing"}</h1>

}

export default IngredientDisplay;

