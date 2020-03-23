import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import TourList from '../tour-list';

const getTours = graphql`
  query {
    tours: allContentfulTour {
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

const Tours = () => {
  const { tours: { edges } } = useStaticQuery(getTours);

  return (
    <TourList
      edges={edges}
    />
  );
};

export default Tours;
