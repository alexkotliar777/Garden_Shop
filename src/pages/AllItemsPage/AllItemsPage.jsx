import Section from 'components/Section/Section';
import ProductsList from 'components/ProductsList/ProductsList';
import Filter from 'components/Filter/Filter';
import Title from 'components/Title/Title';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import { useCallback, useState } from 'react';
import { useGetAllProductsQuery } from 'redux/productsAPI';

export default function AllItemsPage() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const [filteredProducts, setFilteredProducts] = useState();

  const setProductsFilteredHandler = useCallback(
    productsTofilter => setFilteredProducts(productsTofilter),
    []
  );

  return (
    <Section>
      <Title title="All products"></Title>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Filter
            products={data}
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
