import React from 'react';
import './Cart.css';

export const Cart = props => {
    return (
      <main className="cart">
        {props.cartItems.length <= 0 && <p>There are no items in the cart!</p>}
        <ul>
          {props.cartItems.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
              <div>
                <button
                  onClick={props.removeProductFromCart.bind(null,
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
