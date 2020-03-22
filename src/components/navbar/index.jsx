import React, { useState } from 'react';

import { FaAlignRight } from 'react-icons/fa';
import AniLink from 'gatsby-plugin-transition-link/AniLink';


import links from '../../constants/links';
import socials from '../../constants/social-icons';
import styles from './styles.module.css';
import logo from '../../images/logo.svg';

const Navbar = () => {
  const [navToogled, setNavToogled] = useState(false);

  const {
    logoBtn,
    logoIcon,
    navCenter,
    navHeader,
    navLinks,
    navSocialLinks,
    navbar,
    showNav,
  } = styles;

  const toogleNav = () => setNavToogled((toogle) => !toogle);

  return (
    <nav className={navbar}>
      <div className={navCenter}>
        <div className={navHeader}>
          <img src={logo} alt="Longroads logo" />
          <button
            className={logoBtn}
            onClick={() => toogleNav()}
            type="button"
          >
            <FaAlignRight className={logoIcon} />
          </button>
        </div>
        <ul className={navToogled ? `${navLinks}${showNav}` : `${navLinks}`}>
          {
            links.map((item, index) => (
              <li key={index}>
                <AniLink
                  fade
                  to={item.path}
                >
                  {item.text}
                </AniLink>
              </li>
            ))
          }
        </ul>
        <div className={navSocialLinks}>
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
      </div>
    </nav>
  );
};

export default Navbar;
