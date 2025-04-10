import React from "react";

import '../global-styles/estilo.scss'
import { Col, Row, Container } from "react-bootstrap";
import sirenanogift from "../../images/sirena-sinf.png"
import UseHome from "../../hooks/useHome";
const sectionSumate = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion10[0];
  return (
    <div className="cont-mov"  style={{ backgroundColor: "#290877", padding: "40px 0" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col className="sirena-gift order-md-2"  sm={7}>
          <img loading="lazy"
              className=" img img-fluid"
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_VMEMOE_045b3ff68d.png?v=1659803740"
              alt=""
            ></img>
          
          </Col>
          <Col sm={5} className="order-md-1">
            <h1  id="tituloSumateMov"
            className="tituloSobrer"
              style={{
                fontWeight:"700",
                color: "#ff5983",
                fontSize: "60px",
                lineHeight: "1em",
              }}
            >
              {data.titulo}
            </h1>
       
            <h2

              className="subtituloSobrer"
              style={{
                fontWeight:"700",
                color: "#fffe00",
                fontSize: "41px",
                lineHeight: "1em",
              }}
            >
              {data.titulo2}
            </h2>
        
            <p id="dscSumate" style={{ fontSize:"20px",  color: "#fff",textAlign:"justify" }}>{data.descripcion}</p>
            <div className="hoverclas2">
            <a
              className="texto-link"
              href="/contacto"
              
            >
              Comunicate con nosotros	&gt;
             
            </a>
            </div>
            <div className="siren-drp">
            <img loading="lazy"
              className=" img-fluid"
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_VMEMOE_ea00baa374.png?v=1659800523"
              alt=""
            ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionSumate;
