import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import Map from './Map/Map';

export const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Section>
          <Contacts></Contacts>
        </Section>
        <Map></Map>
      </footer>
    </>
  );
};
