import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, ADD_PRODUCT, CHANGE_NAVIGATION_OPTION } from "./actionTypes";

export const addProductToCart = product => {
    return dispatch => {
        dispatch(
            {
                type: ADD_PRODUCT_TO_CART,
                payload: product
            }
        );
    };
};

export const removeProductFromCart = productId => {
    return dispatch => {
        dispatch(
            {
                type: REMOVE_PRODUCT_FROM_CART,
                payload: productId
            }
        );
    };
};

export const addProduct = product => {
    return dispatch => {
        dispatch({
            type: ADD_PRODUCT,
            payload: product
        });
    };
};

export const changeNavigationOption = option => {
    return dispatch => {
        dispatch({
            type: CHANGE_NAVIGATION_OPTION,
            payload: option
        });
    };
};