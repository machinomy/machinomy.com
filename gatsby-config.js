module.exports = {
  siteMetadata: {
    title: 'Machinomy – micropayments on Ethereum',
    links: {
      twitter: 'https://twitter.com/machinomy',
      gitter: 'https://gitter.im/machinomy/machinomy',
      github: 'https://github.com/machinomy/machinomy',
      medium: 'https://medium.com/machinomy'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
  ]
}
