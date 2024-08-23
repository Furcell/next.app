"use client";

import styles from "./page.module.css";

// Components
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import TextInput from "./components/TextInput/TextInput";
import CheckBox from "./components/CheckBox/CheckBox";
import Todo from "./components/Todo/Todo";
import Products from "./components/Products/Products";
import Filter from "./components/Filters/Filter";
import NotFound from "./not-found";
import { AwaitedReactNode} from "react";


const newPromise = new Promise<AwaitedReactNode>((res,rej)=>{
  setTimeout(() => {
    res("Yay!")
  }, 3000);
})

export default function Home() {

  const promise = newPromise;

  // const userLoggedIn = 0;

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <NotFound/>
        {promise}
        <Filter />
        <Products />

        {/* <Todo />
        <Counter />
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
