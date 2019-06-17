import React, { Component } from 'react';
import './ProductList.css';
import AppContext from '../../../context/app-context';

export class ProductList extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <main className="product-list">
            <button onClick={this.props.onNewProductClick}>+ Product</button>
            <ul>
              {context.products.map(product => (
                <li key={product.id}>
                  <div>
                    <strong>{product.title}</strong> - ${product.price}
                  </div>
                  <div>
                    <button
                      onClick={context.addProductToCart.bind(null, product)}
                    >
                      Add to Cart
                  </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        )
        }
      </AppContext.Consumer>
    );
  }
}
