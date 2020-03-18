import React from "react"

import Banner from '../components/banner'
import Layout from "../components/layout"
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
  </Layout>
)

export default Index
