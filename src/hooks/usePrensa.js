import { graphql, useStaticQuery } from "gatsby";
export default function useTripulacion() {
  const resultado = useStaticQuery(graphql`
  query MyQueryPrensa {
    allStrapiPrensa {
        nodes {
          link_banner_escritorio_prensa
          link_banner_movil
          blog_prensa
          id
        }
      }
    }
    
  
  `);
  return resultado;
}