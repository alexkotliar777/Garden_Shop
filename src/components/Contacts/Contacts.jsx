import React from 'react';
import css from './Contacts.module.css';
import { PiInstagramLogoThin } from 'react-icons/pi';
import { PiWhatsappLogoThin } from 'react-icons/pi';
import Title from 'components/Title/Title';

export default function Contacts() {
  return (
    <div className={css.contactsBlock}>
      <h2 className={css.visuallyHidden}>Contacts and address</h2>
      <div className={css.contacts}>
        <Title title="Contact"></Title>
        <address className={css.phone}>
          <a href="tel:+499999999999">+49 999 999 99 99</a>
        </address>
        <ul className={css.contactList}>
          <li className={css.contactItem}>
            <a href="https://www.instagram.com/">
              <PiInstagramLogoThin className={css.contactLogo} />
            </a>
          </li>
          <li className={css.contactItem}>
            <a href="https://www.whatsapp.com/">
              <PiWhatsappLogoThin className={css.contactLogo} />
            </a>
          </li>
        </ul>
      </div>
      <div className={css.address}>
        <Title title="Address"></Title>
        <address className={css.adressDescription}>
          Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
        </address>
        <p>Working Hours:</p>
        <p className={css.hours}>24 hours a day</p>
      </div>
    </div>
  );
}
