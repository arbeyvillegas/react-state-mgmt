import React, { useReducer } from 'react';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import MainNavigation from './components/main-navigation/MainNavigation';
import './App.css';
import AppContext from './context/app-context';
import { shopReducer, initialState } from './store/reducers';

import * as actions from './store/actions';

import { getCartItemCount } from './store/selectors';

const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const renderProducts = () => {
    return <Products />;
  };

  const renderCart = () => {
    return <Cart />;
  };

  let component;
  if (state.activeOption === 'products') {
    component = renderProducts();
  } else {
    component = renderCart();
  }

  return (
    <AppContext.Provider value={
      {
        ...state,
        cartItemNumber: getCartItemCount(state),
        changeNavigationOption: option => dispatch(actions.changeNavigationOption(option)),
        addProductToCart: product => dispatch(actions.addProductToCart(product)),
        removeProductFromCart: productId => dispatch(actions.removeProductFromCart(productId)),
        addProduct: product => dispatch(actions.addProduct(product)),

      }
    }>
      <React.Fragment>
        <MainNavigation />
        <div className="content">{component}</div>
      </React.Fragment>
    </AppContext.Provider>
  );
}

export default App;