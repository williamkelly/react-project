import React, { Component } from 'react';

import Aux from '../../hoc/Aux2/Aux2';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinners from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
} 

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false,
  }

    updatepurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCounded = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCounded;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatepurchaseState(updateIngredients);
    }
   
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {

            return;
        }
        const updateCounded = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCounded;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatepurchaseState(updateIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
      this.setState({loading: true});
      const order = {
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        customer: {
          name: 'billy killy',
          address: {
            street: '123 fake street',
            zip: '00555',
            country: 'UK',
          },
          email: 'test@test.com',
        },
        deliveryMethod: 'pick up',
      }
      axios.post('/orders.json', order)
        .then(response => {
          this.setState({loading: false, purchasing: false});
          console.log(response)
        })
        .catch(error => {
          this.setState({loading: false, purchasing: false});
          console.log(error)
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = <OrderSummary 
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler} />;
        if (this.state.loading) {
          orderSummary = <Spinners />;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                  {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);