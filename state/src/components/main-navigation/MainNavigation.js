import React from 'react';
import './MainNavigation.css';

export const MainNavigation = props => (
  <div className="main-navigation">
    <nav>
      <ul>
        <li>
          <button onClick={() => props.changeNavigationOption('products')} className={props.activeOption === 'products' ? 'selected': null}>Products</button>
        </li>
        <li>
          <button onClick={() => props.changeNavigationOption('cart')}  className={props.activeOption === 'cart' ? 'selected': null}>Cart ({props.cartItemNumber})</button>
        </li>
      </ul>
    </nav>
  </div>
);
