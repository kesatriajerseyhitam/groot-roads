import React from 'react'

import Title from '../../title'
import img from '../../../images/defaultBcg.jpeg'
import styles from './styles.module.css'

const {
  about,
  aboutCenter,
  aboutInfo,
  aboutImg,
  imgContainer,
} = styles

const About = () => {
  return (
    <section className={ about }>
      <Title
        title="About"
        subtitle="us"
      />

      <div className={ aboutCenter }>
        <article className={ aboutImg }>
          <div className={ imgContainer }>
            <img src={ img } alt="About company"/>
          </div>
        </article>
        <article className={ aboutInfo }>
          <h4>Explore the difference</h4>
          <p>
            Lorem ipsum, dolor sir amet consectetur adipisicing
            elit. Nulla
            doloribus enim necessitatibus?
          </p>
          <button
            className="btn-primary"
            type="button"
          >
            READ MORE
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
