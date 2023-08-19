import React from 'react';
import Section from 'components/Section/Section';
// import css from './Catalog.module.css';
import CategoriesList from 'components/CategoriesList/CategoriesList';
import Title from 'components/Title/Title';

export default function Catalog() {
  return (
    <Section>
      <Title title="Categories"></Title>
      <CategoriesList></CategoriesList>
    </Section>
  );
}
