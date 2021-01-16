import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const DisclaimerPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Disclaimer — {site.siteMetadata.title}</title>
        <meta name="description" content={"Disclaimer page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -disclaimer">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/Disclaimer/better-call-saul.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Disclaimer</h1>
          <p>Points of views are my own &rarr;</p>
        </div>
        <div>
            <p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at jconan@outlook.fr.</p>
            <p>All the information on this website - https://jconan.netlify.app - is published in good faith and for general information purpose only.</p>
            <p>DevBlog does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (DevBlog), is strictly at your own risk.</p>
            <p>DevBlog will not be liable for any losses and/or damages in connection with the use of our website.</p>
            <p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>
            <p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.</p>
            <p>Consent</p>
            <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
            <p>Update</p>
            <p>Should we update, amend or make any changes to this document, those changes will be prominently posted on <a href="https://github.com/julien-conan/devblog">Github</a>.</p>
        </div>
      </div>
    </Layout>
  )
}
export default DisclaimerPage
export const pageQuery = graphql`
  query DisclaimerPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`