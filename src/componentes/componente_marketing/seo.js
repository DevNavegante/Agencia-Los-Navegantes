import React from "react"

 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"

 function Seo({ description, lang, meta, title, image, alt }) {
   const { site } = useStaticQuery(
     graphql`
     query {
        site {
            siteMetadata {
                title
                description
                author
                image
                alt
            }
        }
    }
     `
   )
 
   const metaDescription = description;
   const defaultTitle = site.siteMetadata.titleTemplate;
   const superTitle = title;
   
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
          content: site.siteMetadata.description,
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
           content: site.siteMetadata.title,
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
           name: `twitter:creator`,
           content: site.siteMetadata?.author || ``,
         },
         {
           name: `twitter:title`,
           content: superTitle,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
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
 