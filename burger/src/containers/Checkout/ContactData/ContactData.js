import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
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
        this.setState({loading: false});
        this.props.history.push('/');
        // console.log(response)
      })
      .catch(error => {
        this.setState({loading: false});
        // console.log(error)
      });
  }

  render () {
    let form = (
      <form>
        <Input inputtype="input" type="text" name="name" placeholder="your name" />
        <Input inputtype="input" type="text" name="email" placeholder="your email" />
        <Input inputtype="input" type="text" name="street" placeholder="street" />
        <Input inputtype="input" type="text" name="postal" placeholder="post code" />
        <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={Classes.ContactData}>
        <h4>Enter your Content Data</h4>
        {form}
      </div>
    );
  }
} 

export default ContactData;