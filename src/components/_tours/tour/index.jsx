/* eslint-disable react/forbid-prop-types */
import React from 'react';

import AniLink from 'gatsby-plugin-transition-link';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

import { FaMap } from 'react-icons/fa';
import styles from './styles.module.css';

const {
  country,
  details,
  footer,
  icon,
  img,
  imgContainer,
  info,
  link,
  tour,
} = styles;

const Tour = ({
  tour: {
    country: countryName,
    days,
    images,
    name,
    price,
    slug,
  },
}) => {
  const mainImage = images[0].fluid;

  return (
    <article className={tour}>
      <div className={imgContainer}>
        <Image fluid={mainImage} className={img} alt="Single Tour" />
        <AniLink fade className={link} to={`/tours/${slug}`}>
          detail
        </AniLink>
      </div>

      <div className={footer}>
        <h3>{ name }</h3>
        <div className={info}>
          <h4 className={country}>
            <FaMap className={icon} />
            {countryName}
          </h4>
          <div className={details}>
            <h6>
              {days}
              {' '}
              days
            </h6>
            <h6>
              from $
              {price}
            </h6>
          </div>
        </div>
      </div>
    </article>
  );
};

Tour.propTypes = {
  tour: PropTypes.object.isRequired,
};

export default Tour;
