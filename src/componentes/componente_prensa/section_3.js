import React from "react";
import "../global-styles/layout";
import { Col, Row, Container } from "react-bootstrap";
import UsePrensa from "../../hooks/usePrensa";

const section3 = () => {
    const response = UsePrensa();
    const data = response.allStrapiPrensa.nodes[0];
  
    const Imagenfinal = data.link_banner_final_prensa;

  
   
    return (
      <div>
        <Container className="pc-for" style={{marginBottom:"30px", padding:"20px",display:"flex", background:"#0100ff", borderRadius:"5px"}}>
        <Col style={{display:"flex"}} sm={6}>
        <img className="imgsc3m" 
      loading="lazy"
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/LandingEcommerce_MockUp_1.png?v=1691088568"
      ></img>
        </Col>
        <Col style={{display:"grid", alignItems:"center",justifyContent:"center"}} sm={6}>
        <div>
        <h1 className="titulosc3M">¿Estás buscando aumentar tus ventas online?</h1>
        <a href="/marketing-digital" target="_blank" className="refcontact">Contáctanos</a></div>
        </Col>
        </Container>
        <Container className="movil-for" style={{padding:"30px", paddingBottom:"40px", background:"#0100ff", borderRadius:"5px"}}>
        <Col style={{display:"flex"}} >
        <img className="imgsc3m" 
      loading="lazy"
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/LandingEcommerce_MockUp_1.png?v=1691088568"
      ></img>
        </Col>
        <Col style={{display:"grid", alignItems:"center",justifyContent:"center"}} >
        <div style={{textAlign:"center"}}>
        <h1 className="titulosc3M">¿Estás buscando aumentar tus ventas online?</h1>
        <a href="/marketing-digital" target="_blank" className="refcontact">Contáctanos</a></div>
        </Col>
        </Container>

      </div>
    );
  };
  
  export default section3;