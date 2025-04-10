import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import UseAnalitica from "../../hooks/useAnalitica";

function sectionAnalitica3() {
  const response = UseAnalitica();
  const data = response.allStrapiAnalitica.nodes[0].analitica_seccion3[0];
  const imagen = data.imagenes_iconos;
  const titulo = data.titulo;


  return (
    <div  className="divsect2" style={{ fontFamily: "Brandon, Brandon", background: "#0100ff", paddingTop:"40px", paddingBottom:"40px" }}>
      <Container
        style={{
          padding: "40px 0px",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="sctanalitics4 contenedor-body"
      >
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col style={{ textAlign: "center" }}>
            <h1 id="an3"
              style={{
                textAlign: "left",
                width: "300px",
                color: "#fffe00",
                lineHeight: "1.1em",
                fontWeight: "700",
                fontSize: "60px",
              }}
            >
              {titulo}
            </h1>
          </Col>

          <Col sm={6} className="order-xs-12 order-md-1">
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
              {imagen.map((item, i) => (
                <Col xs={6} md={6} sm={6} key={i}>
                  <img loading="lazy"
                  alt=""
                    key={i}
                    className="lazyload img img-fluid"
                    src={item.url}
                    width={300}
                  ></img>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default sectionAnalitica3;
