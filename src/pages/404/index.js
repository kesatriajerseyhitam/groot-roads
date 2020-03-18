import React from "react"

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import styles from './styles.module.css'

import { Link } from "gatsby"

const { error } = styles;

const NotFoundPage = () => (
  <Layout>
    <header className={error}>
      <Banner
        title="Oops it's a dead end"
      >
        <Link to="/" className="btn-white">
          Back to Homepage
        </Link>
      </Banner>
    </header>
  </Layout>
)

export default NotFoundPage
