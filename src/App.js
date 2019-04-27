import React, { Component } from 'react';
import { Container, Form, Col, Button, Card, CardColumns } from 'react-bootstrap';

import SubTotal from './components/Subtotal/Subtotal';
import DeliveryCharges from './components/DeliveryCharges/DeliveryCharges';
import Taxes from './components/Taxes/Taxes';
import Total from './components/Total/Total';

import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCodeDiscount from './components/PromoCodeDiscount/PromoCodeDiscount';

import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total : 50,
      deliveryCharges : 5,
      taxes : 0,
      finalTotal : 0,
      disablePromoButton : false
    };
  }

  componentDidMount = () => {
    this.setState({
      taxes : (this.state.total) * 0.0875
    },
    function() { 
      this.setState({
        finalTotal : this.state.total + this.state.deliveryCharges + this.state.taxes
      });
    }
    )
  }

  giveDiscountHandler = () => {
    if(this.props.promoCode === 'DISCOUNT'){ 
      this.setState({
        finalTotal : (this.state.total + this.state.deliveryCharges + this.state.taxes) * 0.9
      },
      function() {
        this.setState({
          disablePromoButton: true
        });
      }
      )
    }
  }

  render() {
    return (

      <div className="container">
        <div className="user-details">
        <Form>
          <h2>Recepient Details</h2>
          <br/>
          <Form.Row>
              <Form.Group as={Col} controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="John Doe" />
              </Form.Group>

              <Form.Group as={Col} controlId="formContactNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="123456789" />
              </Form.Group>

              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="abc@example.com" />
              </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
        </Form>
        </div>
        

        <div className = "purchase-card">
          <SubTotal price = {this.state.total.toFixed(2)} />
          <DeliveryCharges price = {this.state.deliveryCharges.toFixed(2)} />
          <Taxes taxes = {this.state.taxes.toFixed(2)} />

          <hr />

          <Total price = {this.state.finalTotal.toFixed(2)}/>
          <ItemDetails price = {this.state.total.toFixed(2)}/>

          <hr />

          <PromoCodeDiscount 
            giveDiscount = {() => this.giveDiscountHandler()}
            isDisabled = {this.state.disablePromoButton}
          />
        </div>

        <div className="credit-card-details">
        <Form>
          <h2>Credit Card Details</h2>
          <br/>
          <Form.Group controlId="formCardName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="John Doe" />
          </Form.Group>
          <Form.Group controlId="formCardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="number" placeholder="1234123412341234" />
          </Form.Group>
          <Form.Row>
              <Form.Group as={Col} controlId="formCardExpiry">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control type="number" placeholder="11/1111" />
              </Form.Group>

              <Form.Group as={Col} controlId="formCVV">
                <Form.Label>CVV</Form.Label>
                <Form.Control type="number" placeholder="1111" />
              </Form.Group>
          </Form.Row>
          <Button className="formCardButton">
            Make Payment
          </Button>
        </Form>
        </div>

      </div>
      
    );
  }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {handleChange})(App);