import React, { useContext } from 'react';
import './ProductList.css';
import AppContext from '../../../context/app-context';

export const ProductList = props => {
  const context = useContext(AppContext);
  return (
    <main className="product-list">
      <button onClick={props.onNewProductClick}>+ Product</button>
      <ul>
        {context.products.map(product => (
          <li key={product.id}>
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button onClick={context.addProductToCart.bind(null, product)}>
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
