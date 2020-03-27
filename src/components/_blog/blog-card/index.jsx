/* eslint-disable react/forbid-prop-types */
import React from 'react';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const {
  blog: blogStyle,
  date,
  footer,
  img,
  imgContainer,
  link,
} = styles;

const BlogCard = ({
  blog: {
    image,
    slug,
    title,
    published,
  },
}) => (
  <article className={blogStyle}>
    <div className={imgContainer}>
      <Image fluid={image.fluid} className={img} alt="single post" />
      <AniLink fade className={link} to={`blog/${slug}`}>
        read more
      </AniLink>
      <h6 className={date}>
        { published }
      </h6>
    </div>
    <div className={footer}>
      <h4>{ title }</h4>
    </div>
  </article>
);

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  published: PropTypes.any.isRequired,
};

export default BlogCard;
