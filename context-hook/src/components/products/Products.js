import React, { useState, useContext } from 'react';
import { AddProduct } from './add-product/AddProduct';
import { ProductList } from './product-list/ProductList';

import './Products.css';
import AppContext from '../../context/app-context';

export const Products = props => {
  const [activeProductOption, setActiveProductOption] = useState(
    'product-list'
  );
  const context = useContext(AppContext);

  const component =
    activeProductOption === 'product-list' ? (
      <ProductList
        {...props}
        onNewProductClick={() => setActiveProductOption('add-product')}
      />
    ) : (
      <AddProduct
        onCancel={() => setActiveProductOption('product-list')}
        onSave={context.addProduct}
      />
    );
  return <React.Fragment>{component}</React.Fragment>;
};
