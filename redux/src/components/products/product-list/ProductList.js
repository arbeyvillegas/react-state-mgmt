import React from 'react';
import './ProductList.css';

const ProductList = props => {
  return (
    <main className="product-list">
      <button onClick={props.onNewProductClick}>+ Product</button>
      <ul>
        {props.products.map(product => (
          <li key={product.id}>
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button
                onClick={props.addProductToCart.bind(null, product)}
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

export default ProductList;