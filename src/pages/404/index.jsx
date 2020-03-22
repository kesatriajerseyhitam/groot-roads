import React from 'react';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Banner from '../../components/banner';
import Layout from '../../components/layout';
import styles from './styles.module.css';

const { error } = styles;

const NotFoundPage = () => (
  <Layout>
    <header className={error}>
      <Banner
        title="Oops it's a dead end"
      >
        <AniLink fade to="/" className="btn-white">
          Back to Homepage
        </AniLink>
      </Banner>
    </header>
  </Layout>
);

export default NotFoundPage;
