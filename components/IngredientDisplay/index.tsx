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
          <button onClick={() => setIsOpen(true)}>Search...</button>
          <IngredientHeader ingredient={selectedIngredient} /> <br />
          {isOpen && (
            <SearchModal 
              setIsOpen={setIsOpen}
              onIngredientFound={(ingredient) => {
                setSelectedIngredient(ingredient);
                setIsOpen(false);
              }}
            />
          )}
        </>
      ) : (
        <>
          <button onClick={() => setIsOpen(true)}>Search...</button>
          <h1>+</h1>
          {isOpen && (
            <SearchModal 
              setIsOpen={setIsOpen}
              onIngredientFound={(ingredient) => {
                setSelectedIngredient(ingredient);
                setIsOpen(false);
              }}
            />
          )}
        </>
      )}
      <>
        {selectedIngredient?.effects.map((eff) => (
          <EffectEntry effect={eff} key={eff.effectName} />
        ))}
      </>
    </div>
  );
};

export default IngredientDisplay;
