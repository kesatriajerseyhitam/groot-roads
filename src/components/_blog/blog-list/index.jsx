import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './styles.module.css';
import BlogCard from '../blog-card/index';
import Title from '../../title';

const getPost = graphql`
  query {
    posts: allContentfulPost(sort: {fields: createdAt, order: DESC}){
      edges{
        node{
          createdAt(formatString:"LLLL")
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          published(formatString:"MMMM Do, YYYY")
          slug
          title
        }
      }
    }
  }
`;

const {
  blog,
  center,
} = styles;

const BlogList = () => {
  const { posts: { edges: data } } = useStaticQuery(getPost);

  return (
    <section className={blog}>
      <Title
        title="our"
        subtitle="blogs"
      />
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
};

export default BlogList;
