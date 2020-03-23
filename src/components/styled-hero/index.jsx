/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';

import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledHero = ({
  children,
  className,
  home,
  img,
}) => (
  <BackgroundImage
    className={className}
    fluid={img}
    home={home}
  >
    { children }
  </BackgroundImage>
);

StyledHero.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  home: PropTypes.string,
  img: PropTypes.object.isRequired,
};

export default styled(StyledHero)`
  align-items: center;
  background: ${(props) => (props.home ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))' : 'none')};
  background-position: center;
  background-size: cover;
  display: flex;
  min-height: ${(props) => (props.home ? 'calc(100vh - 62px)' : '50vh')};
  justify-content: center;
  opacity: 1 !important;
`;
