import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";
const ingredients = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Total Price: <strong>{`$${props.totalPrice}`}</strong>
      </p>
      {ingredients.map(ingred => (
        <BuildControl {...ingred} key={ingred.type} />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.checkoutHandler}
      >
        Order Now
      </button>
    </div>
  );
};

export default BuildControls;
