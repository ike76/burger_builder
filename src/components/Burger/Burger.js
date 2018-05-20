import React from "react";
import Ingredient from "./Ingredient/Ingredient";

import classes from "./Burger.css";
const Burger = props => {
  let burgerStuff = Object.keys(props.ingredients)
    .map(ingKey =>
      [...Array(props.ingredients[ingKey])].map((_, i) => (
        <Ingredient key={ingKey + i} type={ingKey} />
      ))
    )
    .reduce((arr, el) => [...arr, ...el], []);
  if (burgerStuff.length === 0) {
    burgerStuff = <p>add stuff!</p>;
  }
  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {burgerStuff}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
