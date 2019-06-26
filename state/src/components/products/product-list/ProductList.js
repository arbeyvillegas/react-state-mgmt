import React, { Component } from 'react';
import './ProductList.css';

export class ProductList extends Component {
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
                  onClick={() => this.props.addProductToCart(product)}
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
