/* eslint-disable react/forbid-prop-types */
import React from 'react';

import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import BlogList from '../../components/_blog/blog-list';
import Layout from '../../components/layout';
import StyledHero from '../../components/styled-hero';
import Title from '../../components/title';

export const query = graphql`
  query {
    blogBcg: file(relativePath:{eq: "blogBcg.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Blog = ({ data }) => (
  <Layout>
    <StyledHero
      img={data.blogBcg.childImageSharp.fluid}
    />
    <Title title="our" subtitle="blogs" />
    <BlogList />
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Blog;
