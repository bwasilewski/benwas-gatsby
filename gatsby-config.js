module.exports = {
  siteMetadata: {
    title: `Ben Wasilewski`,
    subtitle: `Fullstack Web Developer`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Ben Wasilewski`,
    email: 'benwasilewski@gmail.com',
    projects: [
      {
        title: 'SpotMyPhotos',
        description: 'Lorem ipsum dolor sit amet.',
        timeline: {
          begin: 'February 2018',
          end: 'Present'
        },
        tags: ['React', 'Redux', 'Electron']
      }, {
        title: 'Kuei Luck',
        description: 'Lorem ipsum dolor sit amet.',
        timeline: {
          begin: 'July 2018',
          end: 'March 2019'
        },
        tags: ['WordPress', 'WPEngine']
      }, {
        title: 'TFW Surveying & Mapping, Inc.',
        description: 'Lorem ipsum dolor sit amet.',
        timeline: {
          begin: '2012',
          end: 'Present'
        },
        tags: []
      }
    ],
    social_media: [
      {
        title: 'GitHub',
        url: 'https://github.com/bwasilewski',
        icon: 'github-alt'
      },
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/benwasilewski/',
        icon: 'linkedin'
      },
      {
        title: 'Twitter',
        url: 'http://www.twitter.com/ben___was/',
        icon: 'twitter-square'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
