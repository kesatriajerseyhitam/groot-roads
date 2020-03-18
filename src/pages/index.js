import React from "react"

import About from "../components/_home/about"
import Banner from '../components/banner'
import Layout from "../components/layout"
import Service from "../components/_home/service"
import SimpleHero from "../components/simple-hero"
import { Link } from "gatsby"

const Index = () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sir amet soncstur adi[icisini elit."
      >
        <Link
          className="btn-white"
          to="/tours"
        >
          Explore Tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Service />
  </Layout>
)

export default Index
