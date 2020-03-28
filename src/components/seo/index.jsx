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
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default SEO;
