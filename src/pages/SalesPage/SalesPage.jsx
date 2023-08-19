import Section from 'components/Section/Section';
import { useCallback, useState } from 'react';
import Filter from 'components/Filter/Filter';
import { useGetAllProductsQuery } from 'redux/productsAPI';
import Title from 'components/Title/Title';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import ProductsList from 'components/ProductsList/ProductsList';

export default function SalesPage() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const [filteredProducts, setFilteredProducts] = useState();

  const setProductsFilteredHandler = useCallback(productsTofilter => {
    const productsWithSaleFiltered = productsTofilter.filter(
      el => el.discont_price
    );
    return setFilteredProducts(productsWithSaleFiltered);
  }, []);

  return (
    <Section>
      <Title title="Products with sale"></Title>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Filter
            products={data}
            setFilteredProducts={setProductsFilteredHandler}
            onlySale={true}
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
