/* eslint-disable react/require-default-props */
import React from 'react';

import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

const getMetaData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title,
        siteDescription: description
        author
        siteUrl
        image
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const {
    site: {
      siteMetadata: {
        author,
        image,
        siteDesc,
        siteTitle,
        siteUrl,
        twitterUsername,
      },
    },
  } = useStaticQuery(getMetaData);

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={`${title} | ${siteTitle}`}
    >
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default SEO;
