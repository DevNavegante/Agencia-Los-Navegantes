/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react"
 import favicon from "../images/logo.png";
 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 import imageDeafault from "../images/agencia-seo.jpg"
 function Seo({ description, lang, meta, title, image, alt }) {
   const { site } = useStaticQuery(
     graphql`
     query {
      site {
          siteMetadata {
              title
              description
              author
              url
              image
              alt
          }
      }
  }
     `
   )
 
   const metaDescription = description || site.siteMetadata.description;
   const defaultTitle = site.siteMetadata.titleTemplate;
   const descrpp = description;
   const superTitle = title;
   const imageal = image;
   return (


    
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={superTitle}
       titleTemplate={defaultTitle}

       meta={[
        {
          name: `title`,
          content: superTitle,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: site.siteMetadata.image,
        },
        {
          name: `image:alt`,
          content: site.siteMetadata.alt,

         },
             {
           property: `og:title`,
           content: superTitle  || site.siteMetadata.titleTemplate,
         },
         {
           property: `og:description`,
           content: site.siteMetadata.description,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
            property: `og:image`,
            content: site.siteMetadata.image,
          },
          {
            property: `og:alt`,
            content: site.siteMetadata.alt,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:title`,
            content: superTitle,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          }
         
       ].concat(meta)}
     />
   )
 }
 
 Seo.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 }
 
 Seo.propTypes = {
   description: PropTypes.string,
   image: PropTypes.string.isRequired,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
   
 }
 
 export default Seo
 