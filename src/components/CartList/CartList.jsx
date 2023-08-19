import React from 'react';
import css from './CartList.module.css';
import CartItem from 'components/CartItem/CartItem';
import { useSelector } from 'react-redux';

export default function CartList() {
  const cartValue = useSelector(state => state.allReducer.cart.products);
  console.log(cartValue);
  return (
    <ul className={css.list}>
      {cartValue.map(el => (
        <CartItem key={el.id} {...el} />
      ))}
    </ul>
  );
}
