import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = ({ location }) => {
  return (
    <Layout>
      <SEO
        pagetitle="ページが見つかりません"
        pagepath={location.pathname}
      />
      <h1 style={{ padding: "20vh 0", textAlign: "center" }}>
        お探しのページが見つかりませんでした
      </h1>
    </Layout>
  )
}

export default NotFoundPage
