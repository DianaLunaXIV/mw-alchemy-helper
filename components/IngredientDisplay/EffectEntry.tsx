import React from "react";
import Effect from "../../types/Effect";

interface EffectEntryProps {
  effect: Effect;
}

const EffectEntry: React.FC<EffectEntryProps> = ({ effect }) => {
  return (
    <h2>
      <img src={effect?.imageURL} />{" "}
      <a target="_blank" href={effect?.effectURL}>
        {effect?.effectName}
      </a>
    </h2>
  );
};

export default EffectEntry;
