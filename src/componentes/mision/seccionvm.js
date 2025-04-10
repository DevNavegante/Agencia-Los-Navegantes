import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseTri from "../../hooks/useTripulacion";
import "../global-styles/layout";
function mvmv() {
  const response = UseTri();
  const data = response.allStrapiTripulacion.nodes[0].tripulacion_seccion5[0];
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const imagen = data.imagen[0].url;


  return (
    <div   className="contenedor-body6">
     <Container>
        <Row className="row-tri4">
          <Col id="imgMulti"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
        
          >
            <img className="lazyload img"
                  style={{ width:"45%"}}
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/metodologia1_5cf814097c.png?v=1659803630"
              alt=""
            ></img>
          </Col>
          <Col
            style={{
              display:"flex",
          
              alignItems: "center",
           
            }}
          >
            <div>
            <h4 id="parf1multi" style={{ textAlign:"left", color:"#ff5983", fontSize:"60px", lineHeight:"1.1em", fontWeight:"700" }}>🌎 Visión</h4>
            <h4  id="desc1multi" style={{textAlign:"justify", color:"#ff5983", fontSize:"23px", fontWeight:"300" }}>Ser la empresa líder en servicios de publicidad digital con mejor rendimiento a nivel global ,impulsando la mejora constante de nuestros colaboradores en cada ámbito de desarrollo de nuestra compañía.</h4>
            <div id="imgDion" style={{ justifyContent:"center" }}>
            <img loading="lazy" className="lazyload img"
          style={{ width:"30%"}}
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/metodologia1_5cf814097c.png?v=1659803630"
              alt=""
            ></img>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default mvmv;
