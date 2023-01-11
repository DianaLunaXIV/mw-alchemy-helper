import Effect from "./Effect";

type Ingredient = {
    name: string;
    id: string;
    image: string;
    url: string;
    description: string;
    value: string;
    weight: string;
    harvestProbability: string;
    effects: Effect[];
}

export default Ingredient;