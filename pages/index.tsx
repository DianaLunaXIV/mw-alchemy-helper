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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
