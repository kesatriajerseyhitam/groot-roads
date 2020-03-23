import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

import Footer from '../footer';
import Navbar from '../navbar';

const Layout = ({ children }) => (
  <div className="main">
    <Navbar />
    { children }
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
