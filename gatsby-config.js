module.exports = {
    siteMetadata: {
        title: "Agencia Los Navegantes | Agencia de Marketing y de Ecommerce",
        titleTemplate: "Agencia Los Navegantes | Agencia de Marketing y de Ecommerce",
        description: "Desde el 2014 impulsamos la venta online de cientos de empresas. ¿Quieres ser parte de uno de nuestros casos de éxito? ¡El momento es ahora! Contáctanos aquí.",
        author: "Sebastian Godoy",
        alt:"Agencia Los Navegantes | Agencia de Marketing y de Ecommerce",
        url: "https://www.agencialosnavegantes.cl",
        image: "https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655158048/Los_Navegantes_Imagenes_SEO_home_9e55aa951d.jpg"
    },
    
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sass`,
      '@vercel/gatsby-plugin-vercel-builder',  
      {
        resolve: "gatsby-plugin-vercel",
        options: {
          debug: false
        }
      },  
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          icon: 'src/images/logo.png',
        },
      },
      {
            resolve: `gatsby-source-strapi`,
            options: {
              apiURL: `https://agencia-buckup.herokuapp.com`,
              queryLimit: 1000, // Defaults to 100
              collectionTypes: [`post`,`instagram-contenidos`,`categoria`], 
              singleTypes: [`home`,`mkt`,`tripulacion`,`analitica`,`prensa`],
            },
          },
       
          {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
              id: "GTM-MGR9BD4",
              includeInDevelopment: false,
              defaultDataLayer: { platform: "gatsby" },
              enableWebVitalsTracking: true,
  
            },
          },
          {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                "UA-65758649-3", // Google Analytics / GA
              ],
  
              gtagConfig: {
                optimize_id: "OPT_CONTAINER_ID",
                anonymize_ip: true,
                cookie_expires: 0,
              },
   
              pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Defaults to https://www.googletagmanager.com
                origin: "YOUR_SELF_HOSTED_ORIGIN",
              },
            },
          },
          
    ]
}