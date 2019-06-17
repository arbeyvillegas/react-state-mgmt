import React, { Component } from 'react';
import { Products, Cart, MainNavigation } from './components';
import './App.css';

import { connect } from 'react-redux';
import * as selectors from './store/selectors';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderCartPage = this.renderCart.bind(this);
    this.renderProductsPage = this.renderProducts.bind(this);
  }  

  renderProducts() {
    return <Products/>;
  }

  renderCart() {
    return <Cart />;
  }

  render() {
    let component;
    if (this.props.activeOption === 'products') {
      component = this.renderProducts();
    } else {
      component = this.renderCart();
    }

    return (
      <React.Fragment>
        <MainNavigation />
        <div className="content">
          {component}
        </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
    activeOption: selectors.getActiveOption(state)
  }
};

export default connect(
  mapStateToProps
)(App);
