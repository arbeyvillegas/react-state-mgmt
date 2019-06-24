import React, { Component } from 'react';
import { Products } from './components/products/Products';
import { Cart } from './components/cart/Cart';
import { MainNavigation } from './components/main-navigation/MainNavigation';
import './App.css';
import AppContext from './context/app-context';

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
    this.addProduct = this.addProduct.bind(this);
  }

  getInitialState() {
    return {
      products: [
        { id: 1, title: 'Gaming Mouse', price: 29.99 },
        { id: 2, title: 'Harry Potter 3', price: 9.99 },
        { id: 3, title: 'Used plastic bottle', price: 0.99 },
        { id: 4, title: 'Half-dried plant', price: 2.99 }
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

  addProduct(product) {
    const updatedProducts = [...this.state.products];
    updatedProducts.push({ ...product, id: this.nextProductId() });
    this.setState({ products: updatedProducts });
  }

  nextProductId() {
    const ids = this.state.products.map(product => product.id);
    const maxId = Math.max(...ids);
    return (maxId + 1);
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
    return <Products/>;
  }

  renderCart() {
    return <Cart/>;
  }

  render() {
    let component;
    if (this.state.activeOption === 'products') {
      component = this.renderProducts();
    } else {
      component = this.renderCart();
    }

    return (
      <AppContext.Provider
        value={{
          products: this.state.products,
          cartItems: this.state.cart,
          activeOption: this.state.activeOption,
          cartItemNumber: this.cartItemCount(),
          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart,
          addProduct: this.addProduct,
          changeNavigationOption: this.changeNavigationOption
        }}>
        <React.Fragment>
          <MainNavigation />
          <div className="content">
            {component}
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

export default App;
