import React, { Component } from 'react';
import { AddProduct } from './add-product/AddProduct';
import ProductList from './product-list/ProductList';

import './Products.css';

import { connect } from 'react-redux';
import { addProduct } from '../../store/actions';

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
      <ProductList {...this.props} onNewProductClick={this.changeActiveProductOption.bind(this, 'add-product')} /> :
      <AddProduct onCancel={this.changeActiveProductOption.bind(this, 'product-list')} onSave={this.props.addProduct}/>
    return (
      <React.Fragment>
        {component}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProduct(product))
  }
};

export default connect(
  null,
  mapDispatchToProps
)(Products);
