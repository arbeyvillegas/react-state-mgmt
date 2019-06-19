import React, { Component } from 'react';
import './Cart.css';

import { connect } from 'react-redux';
import { removeProductFromCart } from '../../store/actions';
import * as selectors from '../../store/selectors';

class Cart extends Component {
  render() {
    return (
      <main className="cart">
        {this.props.cartItems.length <= 0 && <p>There are no items in the cart!</p>}
        <ul>
          {this.props.cartItems.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
              <div>
                <button
                  onClick={this.props.removeProductFromCart.bind(null,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                  </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}


const mapStateToProps = state => {
  return {
    cartItems: selectors.getCartItems(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    removeProductFromCart: productId => dispatch(removeProductFromCart(productId))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);