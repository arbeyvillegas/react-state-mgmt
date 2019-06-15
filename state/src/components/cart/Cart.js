import React, { Component } from 'react';
import './Cart.css';

export class Cart extends Component {
  render() {
    return (
      <main className="cart">
        {this.props.cartItems.length <= 0 && <p>There is no items in the cart!</p>}
        <ul>
          {this.props.cartItems.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
              <div>
                <button
                  onClick={this.props.removeProductFromCart.bind(null,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                  </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
