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
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            const updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload.id
            );

            if (updatedItemIndex < 0) {
                updatedCart.push({ ...action.payload, quantity: 1 });
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };
                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }
            return updatedCart;
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            const updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload.productId
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
            return updatedCart;
        case ADD_PRODUCT:
            const updatedProducts = [...state.products];
            return updatedProducts.push({ ...action.payload, id: nextProductId(state) });
        case CHANGE_NAVIGATION_OPTION:
            return { ...state, activeOption: action.payload };
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