import React from 'react';
import { IoMdClose } from 'react-icons/io';
import css from './CartItem.module.css';
import {
  addProductToCart,
  countTotalPrice,
  countTotalQuantity,
  decreaseProduct,
  deleteProduct,
} from 'redux/cartSlice';
import { useDispatch } from 'react-redux';

export default function CartItem({
  title,
  image,
  price,
  discont_price,
  quantity,
  id,
}) {
  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    dispatch(decreaseProduct({ id }));
    dispatch(countTotalPrice());
    dispatch(countTotalQuantity());
  };

  const increaseQuantity = () => {
    dispatch(addProductToCart({ id }));
    dispatch(countTotalPrice());
    dispatch(countTotalQuantity());
  };
  const deleteProducts = () => {
    console.log('done');
    dispatch(deleteProduct({ id }));
    dispatch(countTotalPrice());
    dispatch(countTotalQuantity());
  };

  return (
    <li className={css.item}>
      <img
        className={css.img}
        alt={title}
        src={`https://gardenshopbackend.onrender.com${image}`}
      ></img>
      <div className={css.infoBox}>
        <div className={css.info}>
          <p className={css.title}>{title}</p>
          <div className={css.buttons}>
            <button className={css.btn} onClick={() => decreaseQuantity()}>
              -
            </button>
            <p className={css.quantity}>{quantity}</p>
            <button className={css.btn} onClick={() => increaseQuantity()}>
              +
            </button>
          </div>
        </div>
        <div className={css.priceBlock}>
          {discont_price ? (
            <>
              <p className={css.price}>
                {discont_price}
                <span className={css.currencyDiscont}>$</span>
              </p>
              <p className={css.discont}>{price}$</p>
            </>
          ) : (
            <p className={css.price}>
              {price}
              <span className={css.currency}>$</span>
            </p>
          )}
        </div>
      </div>
      <button onClick={() => deleteProducts()} className={css.btnDelete}>
        <IoMdClose className={css.close}></IoMdClose>
      </button>
    </li>
  );
}
