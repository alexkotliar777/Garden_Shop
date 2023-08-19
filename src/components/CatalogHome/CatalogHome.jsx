import React from 'react';
import css from './CatalogHome.module.css';
import Section from 'components/Section/Section';
import { NavLink } from 'react-router-dom';
import CalalogListHome from 'components/CalalogListHome/CalalogListHome';

export default function CatalogHome() {
  return (
    <div>
      <Section>
        <div className={css.titleBlock}>
          <h2 className={css.title}>Catalog</h2>
          <NavLink to="/category" className={css.link}>
            All categories
          </NavLink>
        </div>
        <CalalogListHome />
      </Section>
    </div>
  );
}
