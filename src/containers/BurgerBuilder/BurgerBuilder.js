import React, { Component, Fragment, createContext } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const BurgerContext = createContext();
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    prices: {
      salad: 0.3,
      bacon: 0.7,
      cheese: 0.4,
      meat: 1.2
    },
    purchasable: false,
    showCheckoutModal: false
  };
  changeQuantHandler = (type, num) => {
    console.log("change quant handler called", type, num);
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newIngredients[type] + num;
    if (newIngredients[type] >= 0) {
      this.setState({ ingredients: newIngredients }, this.updatePurchasable);
    }
  };
  checkoutHandler = () => {
    this.setState({ showCheckoutModal: true });
  };
  checkoutHider = () => {
    this.setState({ showCheckoutModal: false });
  };
  checkoutContinue = () => {
    alert("you continue! :)");
  };
  updatePurchasable = () => {
    let sum = Object.values(this.state.ingredients).reduce(
      (sum, ea) => sum + ea,
      0
    );
    console.log("sum", sum);
    this.setState({ purchasable: sum > 0 });
  };
  render() {
    const getTotalPrice = () => {
      const { ingredients, prices } = this.state;
      return Object.keys(ingredients)
        .reduce(
          (total, ingredient) =>
            total + ingredients[ingredient] * prices[ingredient],
          0
        )
        .toFixed(2);
    };

    return (
      <Fragment>
        <Modal show={this.state.showCheckoutModal} click={this.checkoutHider}>
          <OrderSummary
            ingredients={this.state.ingredients}
            prices={this.state.prices}
            totalPrice={getTotalPrice()}
            checkoutHider={this.checkoutHider}
            checkoutContinue={this.checkoutContinue}
          />
        </Modal>
        <BurgerContext.Provider
          value={{
            changeQuantHandler: this.changeQuantHandler,
            ingredients: this.state.ingredients,
            prices: this.state.prices
          }}
        >
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            totalPrice={getTotalPrice()}
            purchasable={this.state.purchasable}
            checkoutHandler={this.checkoutHandler}
          />
        </BurgerContext.Provider>
      </Fragment>
    );
  }
}

export { BurgerContext };
export default BurgerBuilder;
