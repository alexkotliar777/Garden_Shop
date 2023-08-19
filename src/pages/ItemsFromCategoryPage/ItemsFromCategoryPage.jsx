import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import Filter from 'components/Filter/Filter';
import ProductsList from 'components/ProductsList/ProductsList';
import Title from 'components/Title/Title';
import { useParams } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { useGetCategoryItemQuery } from 'redux/productsAPI';

export default function ItemsFromCategory() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetCategoryItemQuery(id);
  const [filteredProducts, setFilteredProducts] = useState();

  const setProductsFilteredHandler = useCallback(
    productsTofilter => setFilteredProducts(productsTofilter),
    []
  );

  return (
    <Section>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Title title={data.category.title}></Title>
          <Filter
            products={data.data}
            setFilteredProducts={setProductsFilteredHandler}
          ></Filter>
          {filteredProducts ? (
            <ProductsList data={filteredProducts} />
          ) : (
            <Loader></Loader>
          )}
        </>
      )}
      {error && <ErrorViev />}
    </Section>
  );
}
