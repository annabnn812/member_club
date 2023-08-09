'use client'
import InstructionsComponent from "@/components/instructionsComponent";
import styles from "../styles/Home.module.css"
import "../styles/globals.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <InstructionsComponent></InstructionsComponent>
    </main>
  );
}
