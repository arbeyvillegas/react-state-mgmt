import React, { Component } from 'react';
import { Products, Cart, MainNavigation } from './components';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.addProductToCart = this.addProductToCart.bind(this);
    this.removeProductFromCart = this.removeProductFromCart.bind(this);
    this.cartItemCount = this.cartItemCount.bind(this);
    this.renderCartPage = this.renderCart.bind(this);
    this.renderProductsPage = this.renderProducts.bind(this);
    this.changeNavigationOption = this.changeNavigationOption.bind(this);
  }

  getInitialState() {
    return {
      products: [
        { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
        { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
        { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
        { id: 'p4', title: 'Half-dried plant', price: 2.99 }
      ],
      cart: [],
      activeOption: 'products'
    };
  }

  addProductToCart(product) {
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    this.setState({ cart: updatedCart });
  }

  removeProductFromCart(productId) {
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }

    this.setState({ cart: updatedCart });
  }

  cartItemCount() {
    return this.state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0);
  }

  changeNavigationOption(option) {
    this.setState({ activeOption: option });
  }

  renderProducts() {
    return <Products products={this.state.products} addProductToCart={this.addProductToCart} />;
  }

  renderCart() {
    return <Cart cartItems={this.state.cart} removeProductFromCart={this.removeProductFromCart} />;
  }

  render() {
    let component;
    if (this.state.activeOption === 'products') {
      component = this.renderProducts();
    } else {
      component = this.renderCart();
    }

    return (
      <React.Fragment>
        <MainNavigation cartItemNumber={this.cartItemCount()} activeOption={this.state.activeOption} changeNavigationOption={this.changeNavigationOption} />
        <div className="content">
          {component}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
