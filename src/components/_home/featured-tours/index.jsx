import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styles from '../../../styles/item.module.css';
import Title from '../../title';
import Tour from '../../_tours/tour';

const { tours, center } = styles;
const getTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true }}) {
      edges {
        node {
          contentful_id
          country
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          name
          price
          slug
        }
      }
    }
  }
`;

const FeaturedTours = () => {
  const { featuredTours: { edges: featuredData } } = useStaticQuery(getTours);

  return (
    <section className={tours}>
      <Title title="featured" subtitle="tours" />
      <div className={center}>
        {
          featuredData.map(({ node }) => <Tour key={node.contentful_id} tour={node} />)
        }
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        All Tours
      </AniLink>
    </section>
  );
};

export default FeaturedTours;
