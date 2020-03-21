import React from 'react'

import Title from "../../title"
import styles from './styles.module.css'
import items from '../../../constants/services'

const {
  center,
  service,
  services,
} = styles;

const Service = () => {
  return (
    <section className={ services }>
      <Title title="our" subtitle="services" />

      <div className={ center }>
        {
          items.map((item, index) => {
            return (
              <article key={ index } className={ service }>
                <span>{ item.icon } </span>
                <h4>{ item.title }</h4>
                <p>{  item.text }</p>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Service
