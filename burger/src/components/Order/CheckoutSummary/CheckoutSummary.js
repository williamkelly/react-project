import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import Classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className={Classes.CheckoutSummary}>
        <h1>we hate your burger!</h1>
        <div style={{width: '100%', margin: 'auto'}}></div>
        <Burger ingredients={props.ingredients} />
        <Button 
          btnType="Danger"
          clicked
        >Cancel</Button>
        <Button 
          btnType="Success"
          clicked
        >Continue</Button>
    </div>
  )
}

export default checkoutSummary;