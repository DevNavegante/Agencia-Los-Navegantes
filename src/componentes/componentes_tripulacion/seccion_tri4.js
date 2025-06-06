import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseTri from "../../hooks/useTripulacion";
import "../global-styles/layout";
function SeccionTri4() {
  const response = UseTri();
  const data = response.allStrapiTripulacion.nodes[0].tripulacion_seccion5[0];
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const imagen = data.imagen[0].url;


  return (
    <div  className="contenedor-body5">
      <Container>
        <Row >
          <Col
            style={{
              display:"flex",
              justifyContent:"center",
              alignItems: "center",
           
            }}
          >
            <div>
            <h4  id="parf1multi" style={{ fontSize:"60px", fontWeight:"700", lineHeight:"1,1em", color:"#280077" }}>{titulo}</h4>
            <h4  id="desc1multi" className="seccion5descripcion">{descripcion}</h4>
            <div id="imgDion" style={{ justifyContent:"center" }}>
            <img loading="lazy" className="lazyload img"
          style={{ width:"30%"}}
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/horizonte2_1_ffb777f840.png?v=1659803630"
              alt="Agencia Los Navegantes"
            ></img>
            </div>
            </div>
            
         
          </Col>
          <Col id="imgMulti"
         style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
    
          >
            <img className="lazyload img"
          style={{ width:"45%"}}
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/horizonte2_1_ffb777f840.png?v=1659803630"
              alt="Agencia Los Navegantes"
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SeccionTri4;
