import React, { useContext } from 'react';
import './MainNavigation.css';
import AppContext from '../../context/app-context';

const MainNavigation = () => {
  const { activeOption, cartItemNumber, changeNavigationOption } = useContext(AppContext);

  return (
    <div className="main-navigation">
      <nav>
        <ul>
          <li>
            <button
              onClick={changeNavigationOption.bind(null, 'products')}
              className={activeOption === 'products' ? 'selected' : null}
            >
              Products
          </button>
          </li>
          <li>
            <button
              onClick={changeNavigationOption.bind(null, 'cart')}
              className={activeOption === 'cart' ? 'selected' : null}
            >
              Cart ({cartItemNumber})
          </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MainNavigation;


