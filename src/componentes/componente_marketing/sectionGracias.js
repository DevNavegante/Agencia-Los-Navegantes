import React from "react";
import gaviota from "../../images/gaviota-sinf.png"
import "../global-styles/estilo.scss"
import { Container, Row, Col } from "react-bootstrap";
function SectionBanner() {
  return (
    <div className="inicioo">
    <Container className="contenedor-body">
    <Row id="rowSc1">
        <Col className="padd-bann"  style={{ paddingTop: "100px", textAlign: "center" }}>
          <h1 style={{lineHeight:"1em", width:"85%"}} className="letrasBanner">Gracias por Escribirnos</h1>
          <h4 style={{width:"85%"}} className="descripcionBanner">Uno de nuestros Tripulantes te contactará prontamente para saber más sobre tu proyecto...</h4>
        </Col>
        <Col style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
          <img loading="lazy" id="rowSc2" alt="aa" className="gift1 lazyload img" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/gaviotaopt_tf9fm3.gif?v=1658864523"></img>
          <img loading="lazy" id="rowSc2" alt="aa" className="nogift1 lazyload img" src={gaviota}></img>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default SectionBanner;