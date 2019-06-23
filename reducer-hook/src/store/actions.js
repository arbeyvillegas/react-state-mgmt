import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  ADD_PRODUCT,
  CHANGE_NAVIGATION_OPTION
} from './actionTypes';

export const addProductToCart = product => {
  return {
    type: ADD_PRODUCT_TO_CART,
    product
  };
};

export const removeProductFromCart = productId => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    productId
  };
};

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    product
  };
};

export const changeNavigationOption = option => {
  return {
    type: CHANGE_NAVIGATION_OPTION,
    option
  };
};
