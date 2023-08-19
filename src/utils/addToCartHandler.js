import Notiflix from 'notiflix';

import {
    addProductToCart,
    countTotalPrice,
    countTotalQuantity,
} from '../redux/cartSlice';

export const addToCartHandler = (event, el, dispatch) => {
    event.preventDefault();
    dispatch(addProductToCart(el));
    dispatch(countTotalPrice());
    dispatch(countTotalQuantity());
    Notiflix.Notify.success(`Product, ${el.title}, added to cart!`);
};