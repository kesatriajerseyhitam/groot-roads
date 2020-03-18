import React from 'react'

import styles from './styles.module.css'

const {
  banner
} = styles

const Banner = ({ title, info, children }) => {
  return (
    <div className={banner}>
      <h1> { title } </h1>
      <p> { info } </p>
      { children }
    </div>
  )
}

export default Banner
