import React from 'react';

export default React.createContext({
    products: [
      { id: 1, title: 'Gaming Mouse', price: 29.99 },
      { id: 2, title: 'Harry Potter 3', price: 9.99 },
      { id: 3, title: 'Used plastic bottle', price: 0.99 },
      { id: 4, title: 'Half-dried plant', price: 2.99 }
    ],
    cartItems: [],
    activeOption: 'products',
    cartItemNumber: 0,
    addProductToCart: product => {},
    removeProductFromCart: productId => {},
    addProduct: product => {},
    changeNavigationOption: option => {}
  });