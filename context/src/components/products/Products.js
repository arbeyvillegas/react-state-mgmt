import React, { Component } from 'react';
import { AddProduct } from './add-product/AddProduct';
import { ProductList } from './product-list/ProductList';

import './Products.css';
import AppContext from '../../context/app-context';

export class Products extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      activeProductOption: 'product-list'
    }
  }

  changeActiveProductOption(option) {
    this.setState({ activeProductOption: option });
  }

  render() {
    const component = this.state.activeProductOption === 'product-list' ?
      <ProductList {...this.props} onNewProductClick={() => this.changeActiveProductOption('add-product')} /> :
      <AddProduct onCancel={() => this.changeActiveProductOption('product-list')} onSave={this.context.addProduct}/>
    return (
      <React.Fragment>
        {component}
      </React.Fragment>
    );
  }
}
