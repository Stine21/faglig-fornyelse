/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`
      }
    }
  ],
  siteMetadata: {
    title: 'Studio Ghibli',
    description: 'Studio Ghibli movie site',
    copyright: 'This website is copyright 2021 Ghibli'
  }
}
