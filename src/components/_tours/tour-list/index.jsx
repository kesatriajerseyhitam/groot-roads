/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/item.module.css';
import Title from '../../title';
import Tour from '../tour/index';

const { tours: tourStyle, center } = styles;

const TourList = ({ edges }) => {
  // const [tours, setTours] = useState([]);
  const [sortedTours, setSortedTours] = useState([]);

  useEffect(() => {
    // setTours(edges);
    setSortedTours(edges);
  }, []);

  return (
    <section className={tourStyle}>
      <Title title="our" subtitle="tours" />
      <div className={center}>
        {
          sortedTours.map(({ node }) => <Tour key={node.contentful_id} tour={node} />)
        }
      </div>
    </section>
  );
};

TourList.propTypes = {
  edges: PropTypes.array,
};

export default TourList;
