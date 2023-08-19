import React from 'react';
import css from './CartDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useAddOrderMutation } from 'redux/productsAPI';
import { useForm } from 'react-hook-form';
import Notiflix from 'notiflix';
import { deleteProducts } from 'redux/cartSlice';

export default function CartDetails() {
  const totalPrice = useSelector(state => state.allReducer.cart.totalPrice);
  const totalOrder = useSelector(state => state.allReducer.cart);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [addOrder, { isError, isSuccess }] = useAddOrderMutation();
  const dispatch = useDispatch();

  const onSubmit = data => {
    addOrder({ ...data, ...totalOrder }) && dispatch(deleteProducts());
    if (isSuccess) {
      reset(
        {
          phone: '',
        },
        {
          keepErrors: true,
          keepDirty: true,
        }
      );
      Notiflix.Notify.success('Thank you for your order!');
    }
    if (isError) {
      Notiflix.Notify.info('Something is going wromg. Please try again.');
    }
  };
  return (
    <div className={css.container}>
      <h3 className={css.title}>Order details</h3>
      <div className={css.total}>
        <p className={css.totalTitle}>Total</p>
        <p className={css.totalPrice}>
          {totalPrice}
          <span className={css.totalCurrency}>$</span>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <input
          className={css.input}
          {...register('phone', {
            required: true,
            pattern: {
              value: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/,
              message: 'Invalid phone number',
            },
          })}
          placeholder="Phone number"
        />
        {errors.phone && <span className={css.alarm}>Enter your number</span>}

        <input type="submit" value="Order" className={css.btn} />
      </form>
    </div>
  );
}
