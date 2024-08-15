"use client";

import styles from "./page.module.css";
import Button from "./components/Button/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Button title="რეგისტრაცია"  />       
      </div>
    </main>
  );
}
