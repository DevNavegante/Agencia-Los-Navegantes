import React from "react";
import sirenanogift from "../../images/sirena-sinf.png"
import "../../componentes/global-styles/layout"
import {  Container, Row, Col } from "react-bootstrap";

import UseHome from "../../hooks/useHome";
function SectionRedesSociales() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion10[0];
  
    const iconos = {
    fontSize:"45px",
    color:"#fffe00",
    }
  return (
    <div style={{ background: "#290877" }}>
      <Container
        className="contenedor-body"
        style={{
          padding: "40px 0px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row
          className="sirena-pc justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col sm={6} style={{ color: "#fff" }}>
            <img loading="lazy"
              className=" img img-fluid"
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_VMEMOE_045b3ff68d.png?v=1659803740"
              alt=""
            ></img>
          </Col>
          <Col sm={6}>
            <h1 className="invt-sirena" style={{lineHeight:"53px", fontSize: "60px",color:"#fff" ,textAlign: "center"}}>
              Tambien te invitamos a seguirnos en nuestras redes sociales.
            </h1>
            <Row style={{ textAlign:"center", justifyContent:"center", marginTop:"20px" }} >
            <div style={{marginTop:"8px"}} > 
            
            <a href="https://www.facebook.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={45} width={45}   alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/fbamarilo_zyq2hy.webp?v=1659804240" ></img></a>
            <a href="https://www.instagram.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" width={45} height={45} alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/insamarelo_rcex92.webp?v=1659804240" ></img></a>
            <a href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={45} width={45}  alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/inamarelo_iclvep.webp?v=1659804240" ></img></a>
 
             
             </div>
            </Row>
          </Col>
        </Row>
        <Row
          className="sirena-movil justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
               <Col sm={6}>
            <h1 className="invt-sirena" style={{  color:"#fff"}}>
              Tambien te invitamos a seguirnos en nuestras redes sociales.
            </h1>
            <Row style={{ textAlign:"center" }} >
            <div style={{marginTop:"8px"}} > 
            
            <a href="https://www.facebook.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={45} width={45}   alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/fbamarilo_zyq2hy.webp?v=1659804240" ></img></a>
            <a href="https://www.instagram.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" width={45} height={45} alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/insamarelo_rcex92.webp?v=1659804240" ></img></a>
            <a href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={45} width={45}  alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/inamarelo_iclvep.webp?v=1659804240" ></img></a>
 
             
             
             </div>
           </Row>
          </Col>
          <Col  sm={6} style={{paddingTop:"20px", marginBottom:"20px", display:"flex", justifyContent:"center", color: "#fff" }}>
            <img loading="lazy"
              className="lazyload img img-fluid"
              src={sirenanogift}
              alt=""
            ></img>

          </Col>
     
        </Row>
        
      </Container>
    </div>
  );
}

export default SectionRedesSociales;
