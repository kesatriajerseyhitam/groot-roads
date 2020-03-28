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
  active,
  blog,
  center,
  link,
  links,
} = styles;

const BlogList = ({
  data: {
    posts: {
      edges: data,
    },
  },
  pageContext: {
    currentPage,
    numPages,
  },
}) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const previousPage = currentPage - 1 === 1 ? 'blogs/' : `blogs/${currentPage + 1}`;
  const nextPage = `blogs/${currentPage - 1}`;

  return (
    <Layout>
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
      <section className={links}>
        {
          !isFirst && <AniLink className={link} fade to={previousPage}>Prev</AniLink>
        }
        {
          Array.from({ length: numPages }, (_, i) => (
            <AniLink
              className={i + 1 === currentPage ? `${link} ${active}` : `${link}`}
              fade
              key={i}
              to={i === 0 ? '/blogs' : `/blogs/${i + 1}`}
            >
              { i + 1 }
            </AniLink>
          ))
        }
        {
          !isLast && <AniLink className={link} fade to={nextPage}>Next</AniLink>
        }
      </section>
    </Layout>
  );
};

BlogList.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default BlogList;
