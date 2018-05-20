import React from "react";
import classes from "./BuildControl.css";
import { BurgerContext } from "../../../../containers/BurgerBuilder/BurgerBuilder";
const BuildControl = props => {
  const money = input => `$${input.toFixed(2)}`;
  const thisIngredientQuantity = value => value.ingredients[props.type];
  const thisIngredientCost = value =>
    money(value.ingredients[props.type] * value.prices[props.type]);
  return (
    <BurgerContext>
      {value => (
        <div className={classes.BuildControl}>
          <div className={classes.Label}>
            {props.label}: {thisIngredientQuantity(value)} | ({thisIngredientCost(
              value
            )})
          </div>
          <button
            onClick={() => value.changeQuantHandler(props.type, -1)}
            className={classes.Less}
            disabled={value.ingredients[props.type] <= 0}
          >
            LESS
          </button>
          <button
            onClick={() => value.changeQuantHandler(props.type, +1)}
            className={classes.More}
          >
            MORE
          </button>
        </div>
      )}
    </BurgerContext>
  );
};

export default BuildControl;
