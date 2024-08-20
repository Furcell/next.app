"use client";

import styles from "./page.module.css";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";

export default function Home() {
  const userLoggedIn = 0;
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Counter/>
        {!!userLoggedIn ? (
          <Button  title="გამოსვლა" />
        ) : (
          <Button title="რეგისტრაცია" />
        )}
      </div>
    </main>
  );
}
