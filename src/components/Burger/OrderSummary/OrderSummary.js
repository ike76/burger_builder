import React, { Fragment } from "react";
import classes from "./OrderSummary.css";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingredient => (
    <li className={classes.Ingredients} key={ingredient}>
      <span style={{ textTransform: "capitalize", fontWeight: "bold" }}>
        {ingredient}:
      </span>{" "}
      <div>{props.ingredients[ingredient]}</div>
      <div>
        ${`${(props.ingredients[ingredient] * props.prices[ingredient]).toFixed(
          2
        )}`}
      </div>
    </li>
  ));
  return (
    <Fragment>
      <h1>Your Order:</h1>
      <ul>
        {ingredientSummary}
        <li className={classes.Ingredients}>
          <strong>TOTAL:</strong>
          <div />
          <h3>${props.totalPrice}</h3>
        </li>
      </ul>

      <p>Continue to Checkout?</p>
      <Button btnType="Success" clicked={props.checkoutContinue}>
        YES CONTINUE!
      </Button>
      <Button btnType="Danger" clicked={props.checkoutHider}>
        no, cancel :(
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
