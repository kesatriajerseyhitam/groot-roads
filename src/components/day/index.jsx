import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import styles from './styles.module.css';

const {
  btn,
  day: dayStyle,
} = styles;

const Day = ({ day, info }) => {
  const [toogled, setToogled] = useState(false);
  const toogleInfo = () => {
    setToogled((value) => !value);
  };


  return (
    <article className={dayStyle}>
      <h4>
        { day }
        <button
          className={btn}
          onClick={() => toogleInfo()}
        >
          <FaAngleDown />
        </button>
      </h4>
      { toogled && <p>{ info }</p> }
    </article>
  );
};

export default Day;
