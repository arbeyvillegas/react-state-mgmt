export const getProducts = state => {
    return state.products;
};

export const getCartItems = state => {
    return state.cart;
};

export const getCartItemCount = state => {
    return state.cart.reduce((count, curItem) => {
        return count + curItem.quantity;
      }, 0);
};

export const getActiveOption = state => {
    return state.activeOption;
};