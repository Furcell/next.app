"use client";

import styles from "./page.module.css";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import TextInput from "./components/TextInput/TextInput";
import CheckBox from "./components/CheckBox/CheckBox";
import Todo from "./components/Todo/Todo";



export default function Home() {
  const userLoggedIn = 0;
  return (
    <main className={styles.main}>
      <div className={styles.center}>

        <Todo/>
        {/* <Counter />
        <TextInput />
        <CheckBox />
        {!!userLoggedIn ? (
          <Button title="გამოსვლა" />
        ) : (
          <Button title="რეგისტრაცია" />
        )} */}
      </div>
    </main>
  );
}
