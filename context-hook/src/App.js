import React, { useState } from 'react';
import { Products, Cart, MainNavigation } from './components';
import './App.css';
import appContext from './context/app-context';

const App = () => {
  const [state, setState] = useState(
    {
      products: [
        { id: 1, title: 'Gaming Mouse', price: 29.99 },
        { id: 2, title: 'Harry Potter 3', price: 9.99 },
        { id: 3, title: 'Used plastic bottle', price: 0.99 },
        { id: 4, title: 'Half-dried plant', price: 2.99 }
      ],
      cart: [],
      activeOption: 'products'
    }
  );

  const updateState = (newState) => {
    setState({...state, ...newState});
  }

  const addProductToCart = product => {
    const updatedCart = [...state.cart];
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
    updateState({ cart: updatedCart });
  };

  const removeProductFromCart = productId => {
    const updatedCart = [...state.cart];
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

    updateState({ cart: updatedCart });
  };

  const addProduct = product => {
    const updatedProducts = [...state.products];
    updatedProducts.push({ ...product, id: nextProductId() });
    updateState({ products: updatedProducts });
  };

  const nextProductId = () => {
    const ids = state.products.map(product => product.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  };

  const cartItemCount = () => {
    return state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0);
  };

  const changeNavigationOption = option => {
    updateState({ activeOption: option });
  };

  const renderProducts = () => {
    return <Products />;
  };

  const renderCart = () => {
    return <Cart />;
  };

  let component;
  if (state.activeOption === 'products') {
    component = renderProducts();
  } else {
    component = renderCart();
  }

  return (
    <appContext.Provider
      value={{
        products: state.products,
        cartItems: state.cart,
        activeOption: state.activeOption,
        cartItemNumber: cartItemCount(),
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        addProduct: addProduct,
        changeNavigationOption: changeNavigationOption
      }}
    >
      <React.Fragment>
        <MainNavigation />
        <div className="content">{component}</div>
      </React.Fragment>
    </appContext.Provider>
  );
};

export default App;
