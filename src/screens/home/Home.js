import React, { Component } from 'react'
import { Elements } from 'react-stripe-elements'
import Form from './Form'
import './Home.css'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 50,
  },
}

export default class App extends Component {
  render() {
    return (
      <div style={styles.root}>
        <h1>Stripe Integration Test</h1>
        <br />
        <Elements>
          <Form />
        </Elements>
      </div>
    );
  }
}
