import React, { Component } from 'react';
import './Products.css';

export default class ProductsPage extends Component {
  render() {
    return (
      <main className="products">
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
