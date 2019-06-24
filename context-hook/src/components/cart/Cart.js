import React, { useContext } from 'react';
import './Cart.css';
import AppContext from '../../context/app-context';

export const Cart = () => {
  const context = useContext(AppContext);
  return (
    <main className="cart">
      {context.cartItems.length <= 0 && <p>There are no items in the cart!</p>}
      <ul>
        {context.cartItems.map(cartItem => (
          <li key={cartItem.id}>
            <div>
              <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
            <div>
              <button
                onClick={context.removeProductFromCart.bind(null,
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
