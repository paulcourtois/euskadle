module.exports = {
  siteMetadata: {
    title: `Euskadle`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",'gatsby-plugin-react-helmet',{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Carter One`,
      ],
      display: 'swap'
    }
  }]
};