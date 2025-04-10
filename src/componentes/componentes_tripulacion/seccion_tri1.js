import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseTri from "../../hooks//useTripulacion";
import "../global-styles/layout";
import capitanNogift from "../../images/capitan-nogift.jpg"
import "../global-styles/estilo.scss"

function seccionTri1() {
  const response = UseTri();
  const data = response.allStrapiTripulacion.nodes[0].tripulacion_seccion1[0];
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const gift = data.gift_capitan[0].url;
  

  return (
 
    <div className="inicioo">
    <Container className="contenedor-body">
    <Row id="rowSc1">
        <Col className="padd-bann"  style={{ paddingTop: "100px", textAlign: "center" }}>
          <h1 style={{lineHeight:"1em", width:"85%"}} className="letrasBanner">{titulo}</h1>
          <h4 style={{width:"85%"}} className="descripcionBanner">{descripcion}</h4>
        </Col>
        <Col style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
          <img id="rowSc2" alt="aa" className="gift1 lazyload img" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/capitaopt_8197153ad8.gif?v=1659801983"></img>
          <img id="rowSc2" alt="aa" className="nogift1 lazyload img" src={capitanNogift}></img>
        </Col>
      </Row>
    </Container>
  </div>
   
  );
}

export default seccionTri1;
