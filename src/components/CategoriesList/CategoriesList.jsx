import React from 'react';
import css from './CategoriesList.module.css';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import Loader from 'components/Loader/Loader';
import { useGetAllCategoriesQuery } from 'redux/productsAPI';
import CategoriesItem from 'components/CategoriesItem/CategoriesItem';

export default function CategoriesList() {
  const { data, error, isLoading } = useGetAllCategoriesQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.container}>
          {data.map(el => (
            <CategoriesItem key={el.id} {...el} />
          ))}
        </ul>
      )}
      {error && <ErrorViev />}
    </>
  );
}
