import css from './SingleItemPage.module.css';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import { useParams } from 'react-router-dom';
import { useGetProductItemQuery } from 'redux/productsAPI';
import { useDispatch } from 'react-redux';
import { addToCartHandler } from 'utils/addToCartHandler';
import React, { useRef } from 'react';


export default function SingleItemPage() {

  const { id } = useParams();

  const { data, error, isLoading } = useGetProductItemQuery(id);

  const dates = data && data[0];

  const dispatch = useDispatch();

  const ref = useRef(null);
  setTimeout(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, 0);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={css.container}>
            <div ref={ref} className={css.title}>{dates.title}</div>
            <div className={css.block}>
              <div className={css.imgBlock}>
                <img
                  className={css.img}
                  alt={dates.title}
                  src={`https://gardenshopbackend.onrender.com${dates.image}`}
                ></img>
              </div>
              <div className={css.descriptionBox}>
                <div className={css.priceBlock}>
                  {dates.discont_price !== null ? (
                    <>
                      <div className={css.price}>
                        {dates.discont_price &&
                          Math.round(
                            (dates.price / dates.discont_price - 1) * 100
                          )}
                        <span className={css.currency}>$</span>
                      </div>
                      <div className={css.oldPrice}>{dates.price}$</div>
                      <div className={css.discount}>
                        {dates.discont_price &&
                          Math.round(
                            (dates.price / dates.discont_price - 1) * 100
                          )}
                        %
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={css.price}>{dates.price}$</div>
                    </>
                  )}
                </div>
                <button
                  className={css.button}
                  onClick={event => addToCartHandler(event, dates, dispatch)}
                >
                  To cart
                </button>
                <div className={css.descriptionBlock}>
                  <p className={css.descriptionTitle}>Description</p>
                  <p>{dates.description}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {error && <ErrorViev />}
    </>
  );
}
