/* eslint-disable react/forbid-prop-types */
import React from 'react';

import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';
import styles from '../../styles/blog.module.css';

import BlogCard from '../../components/_blog/blog-card';
import Layout from '../../components/layout';
import Title from '../../components/title';

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!){
    posts: allContentfulPost(
      limit: $limit,
      skip: $skip,
      sort: { fields: published, order: DESC }
    ){
      edges{
        node{
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          published(formatString: "MMMM Do, YYYY")
          slug
          title
        }
      }
    }
}`;

const {
  blog,
  center,
} = styles;

const BlogList = ({ data: { posts: { edges: data } } }) => (
  <section className={blog}>
    <Title title="latest" subtitle="posts" />
    <div className={center}>
      {
          data.map(({ node }) => (
            <BlogCard
              blog={node}
              key={node.id}
            />
          ))
        }
    </div>
  </section>
);

BlogList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogList;
