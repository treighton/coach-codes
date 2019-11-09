import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="jumbo">
      <div className="container">
        <div className="row">
          <div className="col-qtr">
            <Image />
          </div>
          <div className="col">
            <h1>Hi there!</h1>
            <p>
              Hi! I'm Treighton Mauldin. I am a developer, teacher, writer, aspiring aspiring personal trainer, and amatuer photographer in Sacrmento, Ca.
            </p>
            <p>Let's digital!</p>
          </div>
        </div>
      </div>
      {/* <div className="container">
      <h2>Why am i here?</h2>
      <h3>
        <em>To help...</em>
      </h3>
      <p>
        One of the main reasons i am here is to help those seeking to change
        careers into web development, to help people in the development world
        get and stay helathy and fit, and to help people in the fitness industry
        learn more about how they can leverage technology to better reach and
        serve their clients.
      </p>
      <h3>
        <em>To Share...</em>
      </h3>
      <p>
        Toward the middle of the first year of my thirties I began to realize
        that my lifestyle was catching up with me. I was overweight, out of
        shape, stressed out, and depressed. I tried to escape all of those
        issues by drinking them away, which of course didnt work very well...and
        culminated in a wake up call in the form of an emergency room trip that
        i dont remember but have the scars and a crooked nose to never let me
        forget. After that night I completely refactored my life, and have since
        been on a constant journey of self imporvement, and I'd love to share
        what I have learned with you throught what I am calling the "State of
        the Tr8"
      </p>
      </div> */}
    </div>
  </Layout>
)

export default IndexPage
