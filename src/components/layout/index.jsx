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
  children: PropTypes.element.isRequired,
};

export default Layout;
