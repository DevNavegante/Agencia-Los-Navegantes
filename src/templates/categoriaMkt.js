import React from "react";
import { graphql } from "gatsby";

import BlogLayout from "../BlogLayout";
import bannerBitacora from "../images/bitacora.jpg"
import "../componentes/global-styles/estilo.scss"

import Header from "../componentes/header";
import PostList from "../PostList/PostList";

import PaginationMkt from "../Pagination/PaginationcMkt";


export default function categoriaMkt(props) {
  const { data, pageContext } = props;
  const post = data.allStrapiPost.nodes;
  const colorFondo = "#031fff";
  const variabless = "marketing";


  return (
    <React.Fragment>
      <div
        className="image"
        style={{
          
          backgroundColor:"rgba(255,255,255,0.5)",

        
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage:`url(${bannerBitacora})`,
          transition: "background 0.3s  borderRadius 0.3s",
          height: "450px",
          width: "100%",
        }}
      >
        <div className="row"
         
        >
          <div className="opacitBanner" >
          <h1 className="titulo-post3">Marketing</h1> 
          <h3 className="subtituloBitacora" style={{ textAlign:"center", color: "#fff", fontSize: "22px",fontWeight:"300"}}>Entérate sobre las Noticias y Tips de esta categoría</h3>
          </div>
        </div>
        </div>
      <Header colorFondo={colorFondo} />
      <div>
        <BlogLayout>

        <PostList posts={post} />
      <PaginationMkt posta={variabless}  pageContext={pageContext} />
        </BlogLayout>
      </div>
    </React.Fragment>
  );
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!)   {
    allStrapiPost( 
      skip: $skip
      limit: $limit
      filter: {categorias: {elemMatch: {nombre: {eq: "marketing"}}}}
   
      sort: { fields: id_post, order: ASC }
    ) {
      nodes {
        categorias {
          nombre
        }
        id
        Categoria
        id_post
        titulo_post
        url
        linkminiatura
        contenido_1
        seo_title
        seo_descripcion
        miniatura {
          url
        }
        image_banner {
          url
        }
      }
    }
  }
`;
