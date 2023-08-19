import React from 'react';
import Section from 'components/Section/Section';
import css from './CartPage.module.css';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import CartDetails from 'components/CartDetails/CartDetails';
import CartList from 'components/CartList/CartList';
import { useSelector } from 'react-redux';
import cart from '../../images/shopping-cart.png';

export default function Cart() {
  const cartValue = useSelector(state => state.allReducer.cart.products);
  return (
    <Section>
      <div className={css.block}>
        <h2 className={css.title}>Shopping cart</h2>
        <NavLink to="/products" className={css.link}>
          Back to the store
          <IoIosArrowForward className={css.arrow}></IoIosArrowForward>
        </NavLink>

        {cartValue.length > 0 ? (
          <div className={css.container}>
            <CartList></CartList>
            <CartDetails></CartDetails>
          </div>
        ) : (
          <div className={css.emptyContainer}>
            <h2>Your shopping cart is empty</h2>
            <img src={cart} alt="shopping cart" className={css.cartImage}></img>
          </div>
        )}
      </div>
    </Section>
  );
}
