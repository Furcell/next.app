"use client";

import styles from "./page.module.css";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import TextInput from "./components/TextInput/TextInput";
import CheckBox from "./components/CheckBox/CheckBox";
import Todo from "./components/Todo/Todo";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(localStorage.getItem("sort") || "asc");
  const [limit, setLimit] = useState(sessionStorage.getItem("limit") || 20);

  const getProducts = () => {
    axios
      .get(`https://fakestoreapi.com/products?sort=${sort}&limit=${limit}`)
      .then((result) => {
        setProducts(result.data);
      })
      .catch(() => {});
  };
  
  useEffect(getProducts,[sort,limit])
  
  const onSortChange = ( (e:any)=>{
    setSort(e.target.value)
    localStorage.setItem("sort",e.target.value);
  })

  const onLimitChange = ((e:any)=>{
    setLimit(e.target.value)
    sessionStorage.setItem("limit",e.target.value);
  })

  const userLoggedIn = 0;
  return (
    <main className={styles.main}>
      <div className={styles.center}>

        
        <select value={sort} onChange={onSortChange}>
          <option >asc</option>
          <option >desc</option>
        </select>
        <input type="number" value={limit} onChange={onLimitChange}/>
        <ul>
          {
            products.map((product:any) => 
        
              <li ><img src={product.image}/>{product.title}</li>
            )
          }
        </ul>

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
