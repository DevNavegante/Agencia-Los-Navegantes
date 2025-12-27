import React from "react";
import { graphql } from "gatsby";
import "../componentes/global-styles/estilo.scss"
import BlogLayout from "../BlogLayout";
import PostList from "../PostList/PostList";
import Pagination from "../Pagination";
import Header from "../componentes/header"
import Seo from "../componentes/seo"
import bannerBitacora from "../images/3.png"

import imageBlog from "../images/seo-image.png"
import SectionInstagram from "../componentes/SectionInstagram"
import Footer from "../componentes/footer"

const blog = (props) => {
  const { data, pageContext } = props;
  const posts = data.allStrapiPost.nodes;
  const colorFondo = "#031fff";
  //const colorFondo = "#031fff";
 

  return (
    <React.Fragment>
      <div>
      <Seo 
      title="Blog Agencia Los Navegantes"
      description="Ecommerce, Marketing, Analitica, aumentar ventas online"
      image={imageBlog}
     >
       </Seo>
      <div
        className="image image-bl-post"
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
        <div className="row rowraw"
         
        >
          <div className="opacitBanner" >
          <h1 className="titulo-post3">La Bitácora</h1> 
          <h3 className="subtituloBitacora" style={{ textAlign:"center", color: "#fff", fontSize: "22px",fontWeight:"300"}}>Nuestro Blog de Contenidos Digitales para que siempre estes al día con nuestras Noticias</h3>
          </div>
        </div>
      </div>
      <Header colorFondo={colorFondo} />
      </div>
    <BlogLayout>
    
      <PostList posts={posts} />
      <Pagination  pageContext={pageContext} />
      
    </BlogLayout>
    <SectionInstagram id="blogspotblog"></SectionInstagram>
        <Footer></Footer>
    
    </React.Fragment>
    
  );
};

export default blog;
export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allStrapiPost(
      skip: $skip
      limit: $limit
      sort: { fields: id_post, order: ASC }
    ) {
      nodes {
        id
       
        id_post
        titulo_post
        url
        contenido_1
        seo_title
        seo_descripcion
        linkbanner
        linkminiatura
        miniatura {
          url
        }
        image_banner {
          url
        }
      }
    }
     site {
    siteMetadata {
      title
      description
      author
    }
  }
}           
`;
