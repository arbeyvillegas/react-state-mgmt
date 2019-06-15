import React from 'react';
import './MainNavigation.css';

const mainNavigation = props => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <button onClick={props.changeNavigationOption.bind(null, 'products')}>Products</button>
        </li>
        <li>
          <button onClick={props.changeNavigationOption.bind(null, 'cart')}>Cart ({props.cartItemNumber})</button>
        </li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;
