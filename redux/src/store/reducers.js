import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, ADD_PRODUCT, CHANGE_NAVIGATION_OPTION } from "./actionTypes";

const initialState = {
    products: [
        { id: 1, title: 'Gaming Mouse', price: 29.99 },
        { id: 2, title: 'Harry Potter 3', price: 9.99 },
        { id: 3, title: 'Used plastic bottle', price: 0.99 },
        { id: 4, title: 'Half-dried plant', price: 2.99 }
    ],
    cart: [],
    activeOption: 'products'
};

const shopReducer = (state = initialState, action) => {
    let updatedCart;
    let updatedItemIndex;
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.product.id
            );

            if (updatedItemIndex < 0) {
                updatedCart.push({ ...action.product, quantity: 1 });
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };
                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }
            return {...state, cart: updatedCart};
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.productId
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
            return {...state, cart: updatedCart};
        case ADD_PRODUCT:
            const updatedProducts = [...state.products];
            const newProductId = nextProductId(state);
            const newProduct = { ...action.product, id: newProductId };
            updatedProducts.push(newProduct);
            return {...state, products: updatedProducts};
        case CHANGE_NAVIGATION_OPTION:
            return { ...state, activeOption: action.option };
        default:
            return state;
    }
}

const nextProductId = state => {
    const ids = state.products.map(product => product.id);
    const maxId = Math.max(...ids);
    return (maxId + 1);
}

export default shopReducer;