import Head from "next/head";
import Image from "next/image";
import Ingredients from "../ingredients";
import IngredientDisplay from "../components/IngredientDisplay";
import styles from "../styles/Home.module.css";

export default function Home() {
  Ingredients.assembleIngredientsPool(true, true, true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Morrowind Alchemy Helper</title>
        <meta name="description" content="Morrowind Alchemy Helper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Morrowind Alchemy Helper</h1>

        <div className={styles.grid}>
          <IngredientDisplay ingredient={Ingredients.findByName("Chokeweed")} />
          <IngredientDisplay
            ingredient={Ingredients.findByName("Netch Leather")}
          />
          <IngredientDisplay ingredient={Ingredients.findByName("Bloat")} />
          <IngredientDisplay ingredient={undefined} />
        </div>
      </main>
    </div>
  );
}
