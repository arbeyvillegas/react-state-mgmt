import React, { useContext } from 'react';
import './Cart.css';
import AppContext from '../../context/app-context';

const Cart = () => {
  const {cart, removeProductFromCart} = useContext(AppContext);
  return (
    <main className="cart">
      {cart.length <= 0 && <p>There are no items in the cart!</p>}
      <ul>
        {cart.map(cartItem => (
          <li key={cartItem.id}>
            <div>
              <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
            <div>
              <button
                onClick={removeProductFromCart.bind(null, cartItem.id)}
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


export default Cart;