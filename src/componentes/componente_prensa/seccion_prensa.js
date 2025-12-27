import React from "react";
import "../global-styles/layout";
import { Col, Row, Container } from "react-bootstrap";
import UsePrensa from "../../hooks/usePrensa";

const sectionPrensa = () => {
    const response = UsePrensa();
    const data = response.allStrapiPrensa.nodes[0];
  
    const ImagenBanner = data.link_banner_escritorio_prensa;
    const ImagenMovil = data.link_banner_movil;
    const Bannerescritorio = { 
      backgroundImage: `url(${ ImagenBanner })` 
    }
    const Bannerescritorio2 = { 
      backgroundImage: `url(${ ImagenMovil })` 
    }
  
   
    return (
      <div>
        <div className="sct3prensa pc-for" style={Bannerescritorio} >
        <Container style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          
            <Col>
              <img className="imgprss" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/texto_b592b5fc-8c09-48bb-9667-2a5a1af1322d.png?v=1691097798"></img>
            </Col>
            <Col>
            <img  className="imgprss" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/periodico.png?v=1691097798"></img>
            </Col>
         
        </Container>



        </div>
        <div className="movil-for sct5prensa" style={Bannerescritorio2}> 
        <Container >
          
          <Col style={{textAlign:"center"}}>
            <div style={{marginTop:"30px"}}><h1 className="tituloprensBanner">PRESAN Y<br></br> ENTREVISTAS </h1>
            <p className="subtitulobanners">Conoce más sobre nuestro trabajo a través de artículos de prensa</p></div>
          </Col>
          <Col style={{textAlign:"center", marginTop:"20px"}}>
          <img className="imgprss" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/periodico_movil.png?v=1691097798"></img>
          </Col>
       
      </Container>

          
        </div>

      </div>
    );
  };
  
  export default sectionPrensa;