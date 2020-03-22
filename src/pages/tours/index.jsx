/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import StyledHero from '../../components/styled-hero';

export const query = graphql`
  query {
    connectBcg: file(relativePath:{eq: "connectBcg.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Tours = ({ data }) => (
  <Layout>
    <StyledHero
      img={data.connectBcg.childImageSharp.fluid}
    />
  </Layout>
);

Tours.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Tours;
