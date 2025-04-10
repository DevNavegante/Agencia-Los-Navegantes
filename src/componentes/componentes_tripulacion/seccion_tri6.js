import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseTri from "../../hooks/useTripulacion";
import "../global-styles/layout";
function SeccionTri6() {
  const response = UseTri();
  const data = response.allStrapiTripulacion.nodes[0].tripulacion_seccion7[0];
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const imagen = data.imagen[0].url;

  return (
    <div  className="contenedor-body7">
      <Container>
        <Row >
        <Col style={ { display:"flex", alignItems:"center" }} >
        <div>
            <h4 id="parf1multi"  style={{   textAlign:"left",  color: "#fff", fontSize:"60px", fontWeight:"700" }}>{titulo}</h4>
            <h4  id="desc1multi" style={{   textAlign:"justify",  color: "#fff", fontSize:"23px", fontWeight:"300" }}>{descripcion}</h4>
            <div id="imgDion" style={{ justifyContent:"center" }}>
            <img loading="lazy"  className="lazyload img"
          style={{ width:"30%"}}
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/tripulacion1_8c6e2130ea.png?v=1659803630"
              alt=""
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
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/tripulacion1_8c6e2130ea.png?v=1659803630"
              alt=""
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SeccionTri6;
