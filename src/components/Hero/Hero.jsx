import React from 'react';
import css from './Hero.module.css';
import Section from 'components/Section/Section';
import img from '../../images/hero1.png';
import { NavLink } from 'react-router-dom';

export default function Hero() {
  return (
    <div className={css.hero}>
      <Section>
        <div className={css.backgroundImage}>
          <h1 className={css.visuallyHidden}>
            We are offering the best green products
          </h1>
          <div className={css.descriptionContainer}>
            <h2 className={css.title}>Sale</h2>
            <p className={css.description}>New season</p>
            <NavLink to="/sales" className={css.link}>
              Sale
            </NavLink>
          </div>
          <img src={img} alt="tree" className={css.img}></img>
        </div>
      </Section>
    </div>
  );
}
