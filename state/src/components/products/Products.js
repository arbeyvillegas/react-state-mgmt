import React, { Component } from 'react';
import { AddProduct } from './add-product/AddProduct';
import { ProductList } from './product-list/ProductList';

import './Products.css';

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      activeProductOption: 'product-list'
    }
  }

  changeActiveProductOption = (option) => {
    this.setState({ activeProductOption: option });
  }

  render() {
    const component = this.state.activeProductOption === 'product-list' ?
      <ProductList {...this.props} onNewProductClick={() => this.changeActiveProductOption('add-product')} /> :
      <AddProduct onCancel={() => this.changeActiveProductOption('product-list')} onSave={this.props.addProduct} />
    return (
      <React.Fragment>
        {component}
      </React.Fragment>
    );
  }
}
