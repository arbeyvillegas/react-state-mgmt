import React, { useContext } from 'react';
import './MainNavigation.css';
import AppContext from '../../context/app-context';

export const MainNavigation = () => {
  const context = useContext(AppContext);
  return (
    <div className="main-navigation">
      <nav>
        <ul>
          <li>
            <button onClick={context.changeNavigationOption.bind(null, 'products')} className={context.activeOption === 'products' ? 'selected' : null}>Products</button>
          </li>
          <li>
            <button onClick={context.changeNavigationOption.bind(null, 'cart')} className={context.activeOption === 'cart' ? 'selected' : null}>Cart ({context.cartItemNumber})</button>
          </li>
        </ul>
      </nav>
    </div>)
};
