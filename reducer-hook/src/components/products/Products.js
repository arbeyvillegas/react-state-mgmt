import React, { useState, useContext } from 'react';
import AddProduct  from './add-product/AddProduct';
import ProductList from './product-list/ProductList';

import './Products.css';

import AppContext from '../../context/app-context';

const Products = () => {
  const [activeProductOption, setActiveProductOption] = useState('product-list');
  const { products, addProductToCart, addProduct } = useContext(AppContext);

  const changeActiveProductOption = (option) => {
    setActiveProductOption(option);
  };

  const component = activeProductOption === 'product-list' ?
    <ProductList
      onNewProductClick={changeActiveProductOption.bind(null, 'add-product')}
      products={products}
      addProductToCart={addProductToCart} /> :
    <AddProduct
      onCancel={changeActiveProductOption.bind(null, 'product-list')}
      onSave={addProduct} />
  return (
    <React.Fragment>
      {component}
    </React.Fragment>
  );
}

export default Products;