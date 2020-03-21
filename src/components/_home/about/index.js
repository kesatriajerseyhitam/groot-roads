import React from 'react'

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'

import Title from '../../title'
import styles from './styles.module.css'

const {
  about,
  aboutCenter,
  aboutInfo,
  aboutImg,
  imgContainer,
} = styles

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath:{eq: "defaultBcg.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage);

  return (
    <section className={ about }>
      <Title
        title="About"
        subtitle="us"
      />

      <div className={ aboutCenter }>
        <article className={ aboutImg }>
          <div className={ imgContainer }>
            <Img fluid={ aboutImage.childImageSharp.fluid } alt="Awesome Landscape"/>
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
