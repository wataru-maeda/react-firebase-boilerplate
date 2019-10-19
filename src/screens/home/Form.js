import React, { Component } from 'react'
import {
  injectStripe,
  // CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  IbanElement,
  PaymentRequestButtonElement,
  IdealBankElement,
} from 'react-stripe-elements'

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  }
}

class Form extends Component {
  onSubmit = async () => {
    const { stripe } = this.props
    const { source } = await stripe.createSource({
      type: 'card',
      owner: {
        name: 'Jenny Rosen',
        address: {
          line1: 'Nollendorfstraße 27',
          city: 'Berlin',
          postal_code: '10777',
          country: 'DE',
        },
        email: 'jenny.rosen@example.com',
      },
    })
    console.log('[##] source', source)
  }

  render() {
    return (
      <div style={styles.root}>
        {/* <CardElement style={{ base: { fontSize: '18px' } }} hidePostalCode /> */}
        <CardNumberElement />
        <CardExpiryElement />
        <CardCVCElement />
        <br />
        <button className="btn btn-primary" onClick={this.onSubmit}>
          Submit
        </button>
      </div>
    )
  }
}

export default injectStripe(Form)