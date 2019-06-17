import React from 'react';
import './MainNavigation.css';

import { connect } from 'react-redux';
import { changeNavigationOption } from '../../store/actions';
import * as selectors from '../../store/selectors';

const MainNavigation = props => (
  <div className="main-navigation">
    <nav>
      <ul>
        <li>
          <button onClick={props.changeNavigationOption.bind(null, 'products')} className={props.activeOption === 'products' ? 'selected': null}>Products</button>
        </li>
        <li>
          <button onClick={props.changeNavigationOption.bind(null, 'cart')}  className={props.activeOption === 'cart' ? 'selected': null}>Cart ({props.cartItemNumber})</button>
        </li>
      </ul>
    </nav>
  </div>
);


const mapStateToProps = state => {
  return {
    activeOption: selectors.getActiveOption(state),
    cartItemNumber: selectors.getCartItemCount(state),
  }
};

const mapDispatchToProps = dispatch => {
  changeNavigationOption: option => dispatch(changeNavigationOption(option))
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNavigation);
