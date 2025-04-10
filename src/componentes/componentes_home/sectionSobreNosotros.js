import React from "react";
import "../global-styles/estilo.scss"
import { Link } from "gatsby";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
function sectionSobreNosotros() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion9[0];
  console.log(data)
  return (
    <div className="cont-mov" style={{ padding:"40px", background: "#FA5883"}}>
      <Container >
        <Row className="rowNoso" >
          <Col className="sc-refresh" sm={6}>
            <h1 className="tituloSobrer" style={{ lineHeight:"1em", color: "#fff", fontSize: "60px", fontWeight:"700" }}>{data.titulo}</h1>
            <h2 className="subtituloSobrer" style={{ color: "#fffe00", fontSize: "45px",fontWeight:"700" }}>
              {data.titulo2}
            </h2>
            <p className="parrafos-movil"
              style={{lineHeight:"1em", fontSize: "20px", textAlign: "justify", color: "#fff" }}
            >
              {data.descripcion1}
            </p>
            <p className="parrafos-movil"
              style={{lineHeight:"1em", fontSize: "20px", textAlign: "justify", color: "#fff" }}
            >
              {data.descripcion2}
            </p>
            <p className="parrafos-movil"
              style={{lineHeight:"1em", fontSize: "20px", textAlign: "justify", color: "#fff" }}
            >
              {data.descripcion3}
            </p>
            <div style={{ marginTop:"30px" }} className="f-ls hoverclas2" >
              
            <a
            
            href="https://marketing.agencialosnavegantes.cl/"
            className="texto-link100"
          >
Conoce la Tripulación &gt;</a>
            </div>
          </Col>
          <Col style={{display:"flex", alignItems:"center", justifyContent:"center"}} sm={6} >
            <div className="sobre-noso" >
            <img loading="lazy"  src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/collage_2_0e3fa372-0aba-48ee-9ed1-6d842ae3e530.png?v=1734528759" width={589} height={331} className="sobre-img lazyload img img-fluid" alt=""></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default sectionSobreNosotros;
