import React from "react";
import "../global-styles/estilo.scss"
import { Container, Row, Col } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
import Slideranalitica from "../componentes_home/sliderAnalitica";



const sectionAnaliticaPerformance = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion4[0];
  const descripcion = data.descripcion;
  const descripcion2 = data.descripcion2;
  const titulo = data.titulo;
  const imaganes_iconos = data.imagen_iconos;

  return (
    <div style={{padding:"40px"}} className="contenedor-bodyM dvvndvb" >
      <Container >
        <Row >
          <Col className="sct-analitics2 order-md-2" sm={6}>
            <div >
            <h2 className="titulos-movill"
              style={{
                width: "70%",
                lineHeight: "1em",
                fontWeight: "700",
                color: "#280077",
                fontSize: "45px"
              }}
            >
              {titulo}
            </h2>
            <p
            className="parrafos-movil"
              style={{
                color: "#54595f",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion}
            </p>
            <p
            className="parrafos-movil"
              style={{
                marginTop:"30px",
                color: "#54595f",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion2}
            </p>
            <div className="agency hoverclas2">
            <a
              className="texto-link98 estiloLink "
              href="https://marketing.agencialosnavegantes.cl/"
              
            >
              Descubre más aquí &gt;
             
            </a>
            </div>

            </div>
          </Col>
          <Col  sm={6} className="ddasg order-xs-12 order-md-1">
            <Row >
            <Slideranalitica></Slideranalitica>
            </Row>
          </Col>
        </Row>


        <Row>
  
  <Col  className="order-xs-12 order-md-2">
    <Row style={{display:"none"}} >
      {imaganes_iconos.map((item, i) => (
        <Col xs={4} md={2} sm={12} key={i} className="fotos-analitics" >
          <img
          loading="lazy"
          alt=""
            key={i}
            className="lazyload img img-fluid"
            src={item.url}    
          ></img>

          
        </Col>
      ))}
    </Row>
    <Row >
    
        <Col xs={4} md={2} sm={12}  className="fotos-analitics" >
          <img
          loading="lazy"
          alt=""
            className="lazyload img img-fluid"
            src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/93b11afe71076413663d603aa5b55926.png?v=1659793988"  
          ></img>
        </Col>
        <Col xs={4} md={2} sm={12}  className="fotos-analitics" >
          <img
          loading="lazy"
          alt=""
            className="lazyload img img-fluid"
            src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_Analitica_34_cf37b2ecf0.png?v=1659793988"  
          ></img>
        </Col>
        <Col xs={4} md={2} sm={12}  className="fotos-analitics" >
          <img
          loading="lazy"
          alt=""
            className="lazyload img img-fluid"
            src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_Analitica_35_7d647e927a.png?v=1659793988"  
          ></img>
        </Col>
        <Col xs={4} md={2} sm={12}  className="fotos-analitics" >
          <img
          loading="lazy"
          alt=""
            className="lazyload img img-fluid"
            src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_Analitica_36_8fbf6e9ad7.png?v=1659793988"  
          ></img>
        </Col>
        <Col xs={4} md={2} sm={12}  className="fotos-analitics" >
          <img
          loading="lazy"
          alt=""
            className="lazyload img img-fluid"
            src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_Analitica_37_6426b01986.png?v=1659793988"  
          ></img>
        </Col>
        <Col xs={4} md={2} sm={12}  className="fotos-analitics" >
          <img
          loading="lazy"
          alt=""
            className="lazyload img img-fluid"
            src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_Analitica_38_5bce99e3ca.png?v=1659793988"  
          ></img>
        </Col>
  
    </Row>
  </Col>
</Row>

      </Container>
    </div>
  );
};

export default sectionAnaliticaPerformance;
