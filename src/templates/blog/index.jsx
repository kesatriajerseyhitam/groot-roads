/* eslint-disable react/forbid-prop-types */
import React from 'react';

import { graphql } from 'gatsby';
import { documentToReactCpmpnents } from '@contentful/rich-text-react-renderer';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

import Layout from '../../components/layout';


export const getPost = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
      title
    }
  }
`;

const {
  blog,
  center,
  post,
} = styles;

const BlogTemplate = ({
  data: {
    post: {
      published,
      text: { json },
      title,
    },
  },
}) => {
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => (
        <img src={node.data.target.fields.file['en-US'].url} alt="post" />
      ),
      'embedded-entry-block': (node) => {
        const { title: anotherTitle, image, text } = node.data.target.fields;

        return (
          <div>
            <br />
            <br />
            <br />
            <h1>
              this is other post:
              { anotherTitle['en-US'] }
            </h1>
            <img src={image['en-US'].fields.file['en-US'].url} alt="other post" width="400" />
            { documentToReactCpmpnents(text['en-US'])}
            <br />
            <br />
            <br />
          </div>
        );
      },
    },
  };

  return (
    <Layout>
      <section className={blog}>
        <div className={center}>
          <h1>{title}</h1>
          <h4>
            published at:
            { published }
          </h4>
          <article className={post}>
            { documentToReactCpmpnents(json, options) }
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all post
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

BlogTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogTemplate;
