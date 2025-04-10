import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../global-styles/estilo.scss"
import UseMkt from "../../hooks/useMkt";
import Slidermkt from "../componentes_home/slidedrD4";
import Example1 from "../componentes_desarrollo/acordiond"


function Footerd6() {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion3[0];
  const imagen = data.imagen_iconos;
  const titulo = data.titulo;
 
  return (

    <Container className="footerdd" >
        <Row  className="pc-for"> 
        <Col className="alineadosg"> 
        
           <div className="fo-img2-fo" >
              <a href="/">
                <img
                loading="lazy"
                  width={165}
                  height={133}
                  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646659738/logoAzul_egggb8.webp"
                  class="fo-img-fo hoverLogo overlay"
                  alt=""
                ></img>
              </a>
            </div></Col>
            <Col className="alineadosg">
            <div>
            <a
      className="boton-mkt9"
        href="/"
        style={{

         
          
    
          textDecoration: "none",
        }}
      >
        IR A NUESTRO SITIO WEB OFICIAL
      </a>
      </div> 
            
            </Col>
            <Col className="alineadosg">
            <div style={{marginLeft:"-10px",marginTop:"20px"}} className="ssrrPc"> 
            
            <a href="https://www.facebook.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}   alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_8_1_wrgkza.webp" ></img></a>
            <a href="https://www.instagram.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" width={35} height={35} alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_5_1_byazco.webp" ></img></a>
            <a href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}  alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_7_1_s18050.webp" ></img></a>
 
             
             </div>
            <div style={{ marginTop: "15px", marginLeft: "12px"}} className="ssrrMovil">

            <a href="https://www.facebook.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}   alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_8_1_wrgkza.webp" ></img></a>
           <a href="https://www.instagram.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" width={35} height={35} alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_5_1_byazco.webp" ></img></a>
           <a href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}  alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_7_1_s18050.webp" ></img></a>

            

            </div>

            
            
              </Col>

        </Row>


        <Row className="movil-for">
        <Col > 
        
           <div style={{textAlign:"center"}} >
              <a href="/">
                <img
                loading="lazy"
                  width={165}
                  height={133}
                  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646659738/logoAzul_egggb8.webp"
                  class="fo-img-fo hoverLogo overlay"
                  alt=""
                ></img>
              </a>
            </div></Col>
            <Col style={{paddingTop:"40px", paddingBottom:"20px", textAlign:"center"}}>
            <div>
            <a
      className="boton-mkt9"
        href="/"
        style={{

         
          
    
          textDecoration: "none",
        }}
      >
        IR A NUESTRO SITIO WEB OFICIAL
      </a>
      </div> 
            
            </Col>
            <Col className="alineadosg">
            <div style={{marginLeft:"-10px",marginTop:"20px"}} className="ssrrPc"> 
            
            <a href="https://www.facebook.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}   alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_8_1_wrgkza.webp" ></img></a>
            <a href="https://www.instagram.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" width={35} height={35} alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_5_1_byazco.webp" ></img></a>
            <a href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}  alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_7_1_s18050.webp" ></img></a>
 
             
             </div>
            <div style={{ marginTop: "15px", marginLeft: "12px"}} className="ssrrMovil">

            <a href="https://www.facebook.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}   alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_8_1_wrgkza.webp" ></img></a>
           <a href="https://www.instagram.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" width={35} height={35} alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_5_1_byazco.webp" ></img></a>
           <a href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}  alt="" src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646661808/Recurso_7_1_s18050.webp" ></img></a>

            

            </div>

            
            
              </Col>

        </Row>


    </Container>


  );
}

export default Footerd6;
