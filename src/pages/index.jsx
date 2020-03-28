/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';

import About from '../components/_home/about';
import Banner from '../components/banner';
import FeaturedTours from '../components/_home/featured-tours';
import Layout from '../components/layout';
import Service from '../components/_home/service';
import SEO from '../components/seo';
import StyledHero from '../components/styled-hero';

export const query = graphql`
  query {
    defaultBcg: file(relativePath:{eq: "defaultBcg.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Index = ({ data }) => (
  <Layout>
    <SEO title="Home"/>
    <StyledHero
      home="true"
      img={data.defaultBcg.childImageSharp.fluid}
    >
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sir amet soncstur adi[icisini elit."
      >
        <AniLink
          className="btn-white"
          fade
          to="/tours"
        >
          Explore Tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Service />
    <FeaturedTours />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;
