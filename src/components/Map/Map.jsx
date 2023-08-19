import React from 'react';
import css from './Map.module.css';

export default function Map() {
  return (
    <div className={css.map}>
      <iframe
        className={css.map}
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.70603725774!2d13.259928681446572!3d52.506938616346226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851def3c2d14b%3A0x780e68d5b02f8afc!2sBerliner%20Dom!5e0!3m2!1sde!2sde!4v1692080357935!5m2!1sde!2sde"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
