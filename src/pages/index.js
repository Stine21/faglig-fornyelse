import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
    <section className={styles.header}>
      
      <div>
        <h2>Studio Ghibli</h2>
        <h3>Movies & People</h3>
        <p>A little site about Studio Ghibli movies and characters</p>
        <Link className={styles.btn} to="/people">People</Link>
        <Link className={styles.btn} to="/movies">Movies</Link>
      </div>
      <img src="/logo.png" alt="Studio Ghibli logo" style={{maxWidth: '100%'}} />
      <p>{ title } - { description }</p>
    </section>
    </Layout>
  )
}
export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
      description
      title
    }
  }
}
`