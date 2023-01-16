import React from "react";
import Ingredient from "../../types/Ingredient";
import styles from "../../styles/Home.module.css";
import Effect from "../../types/Effect";
import Link from "next/link";
import EffectEntry from "./EffectEntry";
import IngredientHeader from "./IngredientHeader";

interface IngredientDisplayProps {
  ingredient: Ingredient | undefined;
}

const IngredientDisplay: React.FC<IngredientDisplayProps> = ({
  ingredient,
}) => {
  return (
    <div className={styles.card}>
      {ingredient ? (
        <>
          <IngredientHeader ingredient={ingredient} /> <br />
        </>
      ) : (
        <h1>+</h1>
      )}
      <>
        {ingredient?.effects.map((eff) => (
          <EffectEntry effect={eff} />
        ))}
      </>
    </div>
  );
};

export default IngredientDisplay;
