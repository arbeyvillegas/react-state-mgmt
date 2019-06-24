import React, { Component } from 'react';
import './Cart.css';
import AppContext from '../../context/app-context';

export class Cart extends Component {
  static contextType = AppContext;
  render() {
    return (
      <main className="cart">
        {this.context.cartItems.length <= 0 && <p>There are no items in the cart!</p>}
        <ul>
          {this.context.cartItems.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
              <div>
                <button
                  onClick={this.context.removeProductFromCart.bind(null,
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
