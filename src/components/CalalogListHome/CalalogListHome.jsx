import React from 'react';
import css from './CalalogListHome.module.css';

import { useGetAllCategoriesQuery } from 'redux/productsAPI';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import CategoriesItem from 'components/CategoriesItem/CategoriesItem';

export default function CalalogListHome() {
  const { data = [], error, isLoading } = useGetAllCategoriesQuery();

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorViev />}
      {
        <ul className={css.container}>
          {data.map(
            (el, ind) => ind < 4 && <CategoriesItem key={el.id} {...el} />
          )}
        </ul>
      }
    </>
  );
}
