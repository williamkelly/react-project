import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    }
  }

  render () {
    return (
      <div className={Classes.ContactData}>
        <h4>Enter your Content Data</h4>
        <form>
          <input type="text" name="name" className={Classes.Input} placeholder="your name" />
          <input type="text" name="email" className={Classes.Input} placeholder="your email" />
          <input type="text" name="street" className={Classes.Input} placeholder="street" />
          <input type="text" name="postal" className={Classes.Input} placeholder="post code" />
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    );
  }
} 

export default ContactData;