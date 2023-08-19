import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import Loader from 'components/Loader/Loader';
import ErrorViev from 'pages/ErrorVievPage/ErrorVievPage';
import ProductsList from 'components/ProductsList/ProductsList';
import { useGetAllProductsQuery } from 'redux/productsAPI';

export default function Offers() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <Section>
      <Title title="Sales"></Title>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductsList
          data={data.filter((el, ind) => el.discont_price).splice(0, 4)}
        />
      )}
      {error && <ErrorViev />}
    </Section>
  );
}
