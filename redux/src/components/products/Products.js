import React, { Component } from 'react';
import { AddProduct } from './add-product/AddProduct';
import ProductList from './product-list/ProductList';

import './Products.css';

import { connect } from 'react-redux';
import { addProduct, addProductToCart } from '../../store/actions';
import * as selectors from '../../store/selectors';

class Products extends Component {
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
      <ProductList
        products={this.props.products} 
        addProductToCart={this.props.addProductToCart} 
        onNewProductClick={this.changeActiveProductOption.bind(this, 'add-product')} /> :
      <AddProduct 
        onCancel={this.changeActiveProductOption.bind(this, 'product-list')} 
        onSave={this.props.addProduct}/>
    return (
      <React.Fragment>
        {component}
      </React.Fragment>
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
    addProductToCart: product => dispatch(addProductToCart(product)),
    addProduct: product => dispatch(addProduct(product))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
