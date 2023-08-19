import css from './ProductsList.module.css';
import ProductItem from 'components/ProductItem/ProductItem';
import { NavLink } from 'react-router-dom';
import { addToCartHandler } from 'utils/addToCartHandler';
import { useDispatch } from 'react-redux';

export default function ProductsList({ data }) {
  const dispatch = useDispatch();

  return (
    <ul className={css.container}>
      {data.map(el => (
        <NavLink to={`/products/${el.id}`} key={el.id}>
          <ProductItem
            {...el}
            addtoCartHandler={event => addToCartHandler(event, el, dispatch)}
          />
        </NavLink>
      ))}
    </ul>
  );
}
