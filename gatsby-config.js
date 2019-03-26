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
        tags: ['React', 'Redux', 'WebPack', 'Electron'],
        screen: 'spotmyphotos-logo-dark.png',
        logo: 'spotmyphotos-logo-dark.png'
      },
      {
        title: 'Kuei Luck',
        description: 'Lorem ipsum dolor sit amet.',
        timeline: {
          begin: 'July 2018',
          end: 'March 2019'
        },
        tags: ['WordPress', 'Gulp', 'Vagrant', 'WPEngine'],
        screen: 'spotmyphotos-logo-dark.png',
        logo: 'kuei_luck.svg'
      },
      {
        title: 'Techgami',
        description: 'Lorem ipsum dolor sit amet.',
        timeline: {
          begin: 'August 2018',
          end: 'September 2018'
        },
        tags: ['WordPress', 'Gulp', 'Docker'],
        screen: 'spotmyphotos-logo-dark.png',
        logo: 'techgami.svg'
      },
      {
        title: 'Arcserve',
        description: 'Lorem ipsum dolor sit amet.',
        timeline: {
          begin: 'August 2018',
          end: 'September 2018'
        },
        tags: ['WordPress', 'Gulp', 'Vagrant', 'WPML'],
        screen: 'spotmyphotos-logo-dark.png',
        logo: 'Arcserve_logo_black.png'
      },
      {
        title: 'City Eye Center',
        description: 'Lorem ipsum dolor sit amet.',
        timeline: {
          begin: 'July 2018',
          end: 'August 2018'
        },
        tags: ['Gulp', 'Static Website'],
        screen: 'spotmyphotos-logo-dark.png',
        logo: 'city_eye_center.png'
      },
      {
        title: 'Grow Media',
        description: 'Lorem ipsum dolor sit amet.',
        timeline: {
          begin: 'July 2018',
          end: 'Present'
        },
        tags: ['WordPress', 'Gulp', 'Vagrant'],
        screen: 'spotmyphotos-logo-dark.png',
        logo: 'grow-media-logo.png'
      },
      {
        title: 'Bonita Beach Condo Rental',
        description: 'Lorem ipsum dolor sit amet.',
        timeline: {
          begin: 'March 2016',
          end: 'Present'
        },
        tags: ['Gulp', 'Static Site'],
        screen: 'spotmyphotos-logo-dark.png',
        logo: null
      },
      {
        title: 'Apervita',
        description: 'Lorem ipsum dolor sit amet.',
        timeline: {
          begin: 'July 2014',
          end: 'July 2018'
        },
        tags: ['Backbone', 'Django'],
        screen: 'spotmyphotos-logo-dark.png',
        logo: 'apervitalogo_2c_blue_217x60.png'
      },
      {
        title: 'Katherine Walker',
        description: 'Lorem ipsum dolor sit amet.',
        timeline: {
          begin: 'May 2013',
          end: 'Present'
        },
        tags: ['Grunt', 'WordPress'],
        screen: 'spotmyphotos-logo-dark.png',
        logo: null
      },
      {
        title: 'TFW Surveying & Mapping, Inc.',
        description: 'Lorem ipsum dolor sit amet.',
        timeline: {
          begin: '2012',
          end: 'Present'
        },
        tags: ['Gulp', 'Static Website'],
        screen: 'spotmyphotos-logo-dark.png',
        logo: 'tfw.png'
      }
    ],
    social_media: [
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/benwasilewski/',
        icon: 'linkedin'
      },
      {
        title: 'GitHub',
        url: 'https://github.com/bwasilewski',
        icon: 'github-alt'
      },
      {
        title: 'Twitter',
        url: 'http://www.twitter.com/ben___was/',
        icon: 'twitter-square'
      }
    ],
    testimonials: [
      {
        quote: '...[Ben] is a creative problem-solver and effective communicator...',
        customer: 'Erik Vorhes, VSA Partners'
      },
      // {
      //   quote: 'Ben is the kind of contractor I love to hire.',
      //   customer: 'Mattie Langenberg, VSA Partners'
      // }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        icon: `src/images/misc/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/misc/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/src/images/logos/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `screens`,
        path: `${__dirname}/src/images/screens/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
