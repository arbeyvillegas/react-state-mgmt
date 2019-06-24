import React from 'react';

export default React.createContext({
  products: [{ id: null, title: null, price: null }],
  cartItems: [],
  activeOption: null,
  cartItemNumber: 0,
  changeNavigationOption: option => {},
  addProductToCart: product => {},
  removeProductFromCart: productId => {},
  addProduct: product => {}
});
