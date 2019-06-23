import React, { useReducer } from 'react';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import MainNavigation from './components/main-navigation/MainNavigation';
import './App.css';
import AppContext from './context/app-context';
import {shopReducer, initialState} from './store/reducers';

import * as actions from './store/actions';

import * as selectors from './store/selectors';

const App = props => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const renderProducts = () => {
    return <Products />;
  };

  const renderCart = () => {
    return <Cart />;
  };

  let component;
  if (props.activeOption === 'products') {
    component = renderProducts();
  } else {
    component = renderCart();
  }

  return (
    <AppContext.Provider value={
      {state, 
        carItemNumber: selectors.getCartItemCount(state),
        changeNavigationOption: option => dispatch(actions.changeNavigationOption(option))
      }
    }>
      <React.Fragment>
        <MainNavigation />
        <div className="content">{component}</div>
      </React.Fragment>
    </AppContext.Provider>
  );
};

const mapStateToProps = state => {
  return {
    activeOption: selectors.getActiveOption(state)
  };
};

export default connect(mapStateToProps)(App);
