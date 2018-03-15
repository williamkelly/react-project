import React, { Component } from 'react';
import propTypes from 'prop-types';
import classes from './Burgeringredients.css';

class BurgerIngredients extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ('bread-bottom'): 
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seads1}></div>
                        <div className={classes.Seads2}></div>
                    </div>);
                break;
            case ('meat'): 
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'): 
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ('salad'): 
                ingredient = <div className={classes.Salad}></div>;
                break;
            case ('bacon'): 
                ingredient = <div className={classes.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }
    
        return ingredient;
    
    };
}

BurgerIngredients.propTypes = {
    type: propTypes.string.isRequired
}

export default BurgerIngredients;