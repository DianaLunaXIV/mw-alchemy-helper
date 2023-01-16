import React from "react";
import Ingredient from "../../types/Ingredient";
import styles from "../../styles/Home.module.css";
import Effect from "../../types/Effect";
import Link from "next/link";
import EffectEntry from "./EffectEntry";

interface IngredientDisplayProps {
  ingredient: Ingredient | undefined;
}

const IngredientDisplay: React.FC<IngredientDisplayProps> = ({
  ingredient,
}) => {
  return (
    <div className={styles.card}>
      <h1>
        {ingredient ? (
          <a href={ingredient.url}>{ingredient.name}</a>
        ) : (
          "nothing"
        )}
      </h1>
      {ingredient ? <br /> : null}
      <>
        {ingredient?.effects.map((eff) => (
          <EffectEntry effect={eff} />
        ))}
      </>
    </div>
  );
};

export default IngredientDisplay;
