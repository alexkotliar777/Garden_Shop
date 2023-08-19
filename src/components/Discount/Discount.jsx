import React from 'react';
import css from './Discount.module.css';
import gnome from '../../images/gnome.png';
import Section from 'components/Section/Section';
import DiscountForm from 'components/DiscountForm/DiscountForm';

export default function Discount() {
  return (
    <div className={css.block}>
      <Section>
        <div className={css.container}>
          <div className={css.imgBlock}>
            <h2 className={css.visuallyHidden}>Discount</h2>
            <img alt="gnome" src={gnome}></img>
          </div>
          <div className={css.offer}>
            <h3 className={css.title}>5% off</h3>
            <p className={css.description}>on the first order</p>
            <DiscountForm></DiscountForm>
          </div>
        </div>
      </Section>
    </div>
  );
}
