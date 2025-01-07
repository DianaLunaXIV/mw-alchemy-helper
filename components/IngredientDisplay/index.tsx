import React, { useState } from "react";
import Ingredient from "../../types/Ingredient";
import styles from "../../styles/Home.module.css";
import Effect from "../../types/Effect";
import Link from "next/link";
import EffectEntry from "./EffectEntry";
import IngredientHeader from "./IngredientHeader";
import SearchModal from "./SearchModal";

interface IngredientDisplayProps {
  ingredient: Ingredient | undefined;
}

const IngredientDisplay: React.FC<IngredientDisplayProps> = ({
  ingredient,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(ingredient);

  return (
    <div className={styles.card} key={ingredient?.id}>
      {selectedIngredient ? (
        <>
          <IngredientHeader ingredient={selectedIngredient} />
        </>
      ) : (
        <>
          <h1>+</h1>
        </>
      )}
      <>
        {selectedIngredient?.effects.map((eff) => (
          <EffectEntry effect={eff} key={eff.effectName} />
        ))}
      </>
      <button onClick={() => setIsOpen(true)}>Search</button>
      {isOpen && (
            <SearchModal 
              setIsOpen={setIsOpen}
              onIngredientFound={(ingredient) => {
                setSelectedIngredient(ingredient);
                setIsOpen(false);
              }}
            />
      )}
    </div>
  );
};

export default IngredientDisplay;
