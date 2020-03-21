import React from 'react';

import { Link } from 'gatsby';
import links from '../../constants/links';
import socials from '../../constants/social-icons';
import styles from './styles.module.css';

const Footer = () => {
  const {
    copyright,
    footer,
    icons,
  } = styles;

  return (
    <footer className={footer}>
      <div className={styles.links}>
        {
          links.map((item, index) => <Link key={index} to={item.path}>{item.text}</Link>)
        }
      </div>
      <div className={icons}>
        {
          socials.map((item, index) => (
            <a
              href={item.url}
              key={index}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.icon}
            </a>
          ))
        }
      </div>
      <div className={copyright}>
        copyright &copy; longroads travel company
        {' '}
        {
          new Date().getFullYear()
        }
        {' '}
        All right reversed
      </div>
    </footer>
  );
};

export default Footer;
