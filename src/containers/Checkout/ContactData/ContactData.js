import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Deb Cupitt",
        address: {
          street: "1 Test St",
          postcode: "3184",
          state: "VIC"
        },
        email: "test@test.com"
      },
      deliveryMethod: "Fastest"
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
    console.log(this.state);
    console.log(this.props.ingredients);
    console.log(this.props.price);
  };

  render() {
    let form = (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={classes.Input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={classes.Input}
        />
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          className={classes.Input}
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          className={classes.Input}
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading === true) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
