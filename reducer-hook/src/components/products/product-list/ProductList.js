import React, { Component } from 'react';
import './ProductList.css';

import { connect } from 'react-redux';
import { addProductToCart } from '../../../store/actions';
import * as selectors from '../../../store/selectors';

class ProductList extends Component {
  render() {
    return (
      <main className="product-list">
        <button onClick={this.props.onNewProductClick}>+ Product</button>
        <ul>
          {this.props.products.map(product => (
            <li key={product.id}>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  onClick={this.props.addProductToCart.bind(null, product)}
                >
                  Add to Cart
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
    products: selectors.getProducts(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: product => dispatch(addProductToCart(product))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);

