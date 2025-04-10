import React from "react";
import { graphql } from "gatsby";
import BlogLayout from "../BlogLayout";
import Pagination from "../Pagination";
import Header from "../componentes/header";
import { map } from "lodash";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "gatsby";
import Card from "react-bootstrap/Card";
import bannerBitacora from "../images/bitacora.jpg"
import "../componentes/global-styles/estilo.scss"

export default function categoriaDesarrollo(props) {
  const { data, pageContext } = props;
  const post = data.allStrapiPost.nodes;
  const colorFondo = "#031fff";

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
          <h1 className="titulo-post3">Desarrollo Web</h1> 
          <h3 className="subtituloBitacora" style={{ textAlign:"center", color: "#fff", fontSize: "22px",fontWeight:"300"}}>Entérate sobre las Noticias y Tips de esta categoría</h3>
          </div>
        </div>
        </div>
      <Header colorFondo={colorFondo} />
      <div>
        <BlogLayout>

        

          <Container className="contenedor-disposicion" fluid>
            {map(post, (post) => (
              <Row>
                <Link to={`/${post.url}`}>
                  <Col sm={2}></Col>
                  <Col className="contenedor-disposicion__item" sm={8}>
                    <Card id="carta">
                      <Card.Img variant="top" src={post.linkminiatura} />
                      <Card.Body>
                        <Card.Title className="titulo-post">
                          {post.titulo_post}
                        </Card.Title>
                        <Card.Text className="texto-descripcion">
                          {post.seo_descripcion}
                        </Card.Text>
                        <Card.Link className="color-enlace" >
                          Leer más
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Link>
              </Row>
            ))}
          </Container>

          <Pagination pageContext={pageContext} />
        </BlogLayout>
      </div>
    </React.Fragment>
  );
}

export const query = graphql`
  query  {
    allStrapiPost
      (filter: {categorias: {elemMatch: {nombre: {eq: "desarrollo"}}}}
      sort: { fields: id_post, order: ASC }
    ) {
      nodes {
        categorias {
          nombre
        }
        id
        linkminiatura
        id_post
        titulo_post
        url
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
