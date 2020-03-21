import React from 'react'
import './styles.scss'

import Footer from '../footer'
import Navbar from '../navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
        { children }
      <Footer />
    </>
  )
}

export default Layout
