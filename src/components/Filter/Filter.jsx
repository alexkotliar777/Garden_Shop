import React, { useEffect } from 'react';
import css from './Filter.module.css';
import {
  selectToPrice,
  selectFromPrice,
  selectDiscountedOnly,
  selectSorting,
} from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter({
  products,
  setFilteredProducts,
  onlySale = false,
}) {
  const dispatch = useDispatch();
  const toPrice = useSelector(state => state.allReducer.filter.toPrice);
  const fromPrice = useSelector(state => state.allReducer.filter.fromPrice);
  const discountedOnly = useSelector(
    state => state.allReducer.filter.setDiscountedOnly
  );
  const sortingValue = useSelector(
    state => state.allReducer.filter.sortingValue
  );

  useEffect(() => {
    const filteredProducts = products.filter(el => {
      const actualPrice = el.discont_price || el.price;
      return (
        (!fromPrice || actualPrice > Number(fromPrice)) &&
        (!toPrice || actualPrice < Number(toPrice)) &&
        (!discountedOnly || el.discont_price)
      );
    });
    const sortedProducts = filteredProducts.sort((a, b) => {
      const actualPriceA = a.discont_price || a.price;
      const actualPriceB = b.discont_price || b.price;
      if (sortingValue === 'asc') {
        return actualPriceA - actualPriceB;
      } else if (sortingValue === 'des') {
        return actualPriceB - actualPriceA;
      } else {
        return 0;
      }
    });
    setFilteredProducts(sortedProducts);
  }, [
    discountedOnly,
    fromPrice,
    sortingValue,
    toPrice,
    products,
    setFilteredProducts,
  ]);

  return (
    <div className={css.containerMain}>
      <div>
        <label className={css.lable}>Price</label>
        <input
          className={css.inputFrom}
          type="number"
          value={fromPrice}
          placeholder="from"
          min="0"
          onChange={ev => dispatch(selectFromPrice(ev.target.value))}
        ></input>
        <input
          className={css.inputTo}
          type="number"
          value={toPrice}
          placeholder="to"
          min="1"
          onChange={ev => dispatch(selectToPrice(ev.target.value))}
        ></input>
      </div>
      {!onlySale && (
        <div className={css.container}>
          <label className={css.lableCheckbox} htmlFor="checkbox">
            Discounted items
          </label>
          <input
            className={css.customCheckbox}
            type="checkbox"
            name="checkbox"
            value={discountedOnly}
            onChange={ev => dispatch(selectDiscountedOnly(ev.target.checked))}
          ></input>
          <span className={css.checkmark}></span>
        </div>
      )}
      <div>
        <label className={css.lable}>Sorted</label>
        <select
          className={css.select}
          value={sortingValue}
          onChange={ev => dispatch(selectSorting(ev.target.value))}
        >
          <option className={css.option}>by default</option>
          <option className={css.option} value="asc">
            ascending
          </option>
          <option className={css.option} value="des">
            descending
          </option>
        </select>
      </div>
    </div>
  );
}
