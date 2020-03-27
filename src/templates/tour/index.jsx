/* eslint-disable react/forbid-prop-types */
import React from 'react';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';
import { graphql } from 'gatsby';
import styles from './styles.module.css';

import Day from '../../components/day';
import Layout from '../../components/layout';
import StyledHero from '../../components/styled-hero';

export const getTour = graphql`
  query($slug: String!){
    tour: contentfulTour(slug: { eq: $slug }) {
      country
      days
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      journey {
        day
        info
      }
      name
      price
      start(formatString: "dddd MMMM Do, YYYY")
    }
  }
`;

const {
  center,
  desc,
  icon,
  info,
  image: imageStyle,
  images: imagesStyle,
  journey: journeyStyle,
  template,
} = styles;

const TourTemplate = ({
  data: {
    tour: {
      country,
      days,
      description: { description },
      images,
      journey,
      name,
      price,
      start,
    },
  },
}) => {
  const [mainImage, ...tourImages] = images;

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={template}>
        <div className={center}>
          <div className={imagesStyle}>
            {
              tourImages.map((item, index) => (
                <Img
                  alt="single tour"
                  className={imageStyle}
                  fluid={item.fluid}
                  key={index}
                />
              ))
            }
          </div>
          <h2>{ name }</h2>
          <div className={info}>
            <p>
              <FaMoneyBillWave className={icon} />
              starting from $
              {price}
            </p>
            <p>
              <FaMap className={icon} />
              {country}
            </p>
          </div>
          <h4>
            starts on:
            {start}
          </h4>
          <h4>
            duration:
            {days}
            {' '}
            days
          </h4>
          <p className={desc}>
            { description }
          </p>
          <h2>Daily Schedule</h2>
          <div className={journeyStyle}>
            {
              journey.map((item, index) => (
                <Day
                  key={index}
                  day={item.day}
                  info={item.info}
                />
              ))
            }
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

TourTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TourTemplate;
