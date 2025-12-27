import { graphql, useStaticQuery } from "gatsby";
export default function useTripulacion() {
  const resultado = useStaticQuery(graphql`
  query MyQueryTripulacion {
    allStrapiTripulacion {
      nodes {
        tripulacion_seccion1
        tripulacion_seccion2
        tripulacion_seccion5
        tripulacion_seccion6
        tripulacion_seccion7
        tripulacion_seccion8
        tripulacion_seccion11
      }
    }
  }
  
  
  `);
  return resultado;
}