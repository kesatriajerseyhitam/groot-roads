import React from 'react';

import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

const getMetaData = graphql`
  site {
    siteMetaData {
      siteTitle: title,
      siteDescription: description
      author
      siteUrl
      image
      twitterUsername
    }
  }
`;

const SEO = ({ title, description }) => {
  // const { data } = [];

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SEO;
