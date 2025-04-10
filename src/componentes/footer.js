import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

import "../componentes/global-styles/estilo.scss"
const footer = () => {

  const linea = {
    marginTop: "-3px",
    backgroundColor: "#0100fe",
    height: "2px",
    width: "75%",
  };
  const texto = {
    lineHeight: "1em",
    fontSize: "22px",
    color: "#212529",
    fontWeight: "300",
  };
  const estiloImagen = {
    width: "60%",
  };

  const iconos = {
    fontSize: "28px",
    color: "#3b39ff"

  }


  return (
    <div className="footer-padding">
      <hr style={{ backgroundColor: "#f1ecec", }}></hr>
      <Container className="contenedor-footer">
        <Row style={{ paddingLeft: "100px", paddingRight: "100px", paddingBottom: "30px" }} className="footer-row justify-content-center mt-3" >
          <Col className="text-center">
            <div className="fo-img2-fo" >
              <a href="/">
                <img
                loading="lazy"
                  width={165}
                  height={133}
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logoAzul_egggb8_eaec075e-a44b-4059-88dc-cb125ba1d005.webp?v=1659801340"
                  class="fo-img-fo hoverLogo overlay"
                  alt=""
                ></img>
              </a>
            </div>
            <div style={{marginLeft:"-10px",marginTop:"20px"}} className="ssrrPc"> 
            
           <a href="https://www.facebook.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}   alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Recurso_8_1_wrgkza_55d16aa4-04ac-4967-ab5a-3791f4c2bf11.webp?v=1659801371" ></img></a>
           <a href="https://www.instagram.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" width={35} height={35} alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Recurso_5_1_byazco_1d42f125-9c95-4a94-8b80-3e727a898563.webp?v=1659801368" ></img></a>
           <a href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}  alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Recurso_7_1_s18050_8e7ebf42-0f29-4fc6-b52f-af7db0c8b19c.webp?v=1659801368" ></img></a>

            
            </div>
            <div style={{ marginTop: "15px", marginLeft: "12px"}} className="ssrrMovil">

            <a href="https://www.facebook.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}   alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Recurso_8_1_wrgkza_55d16aa4-04ac-4967-ab5a-3791f4c2bf11.webp?v=1659801371" ></img></a>
           <a href="https://www.instagram.com/agencialosnavegantes/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" width={35} height={35} alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Recurso_5_1_byazco_1d42f125-9c95-4a94-8b80-3e727a898563.webp?v=1659801368" ></img></a>
           <a href="https://www.linkedin.com/company/agencia-los-navegantes/mycompany/"><img className="hoverclas2" style={{marginLeft:"5px", marginRigth:"5px"}} loading="lazy" height={35} width={35}  alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Recurso_7_1_s18050_8e7ebf42-0f29-4fc6-b52f-af7db0c8b19c.webp?v=1659801368" ></img></a>

            

            </div>
           
            
           
           
          </Col>
          <Col sm={3}>
            <h2 className="menu-tit" style={texto}>Menú</h2>

            <hr className="lineal" style={linea}></hr>
            <ul>
              <li>
                <Link className="navbar-brand" to="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/tripulacion">
                  Tripulación
                </Link>
              </li>
              <li>
                <a
                  className="navbar-brand"
                  href="https://ecommerce.agencialosnavegantes.cl/"
                >
                  Desarrollo Ecommerce
                </a>
              </li>
              <li>
                <Link className="navbar-brand" to="https://marketing.agencialosnavegantes.cl">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/contacto">
                  Analítica y Performance
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/blog/page">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/contacto">
                  Contacto
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/mision">
                  Misión y Visión
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="https://www.webpay.cl/company/25489">
                  PAGO ONLINE
                </Link>
              </li>
            </ul>
          </Col>
          <Col style={{ display: "grid" }} sm={3}>
            <h2 style={texto}>Pertenecemos a</h2>
            <hr className="lineal" style={linea}></hr>
     
            <img className="img-footer-w"
              width={150}
              height={150}
              loading="lazy"
              src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/PremierPartner_2025.png?v=1742588845"
              alt=""
            ></img>
            <img style={{paddingTop:"8px", paddingBottom:"15px"}} className="img-footer-w"
              loading="lazy"
              width="60%"

              src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Landing_Agencia_LogosPartners-78.png?v=1660769910"
              alt=""
            ></img>
            <img className="img-footer-w"
               width={140}
               height={60}
              
              loading="lazy"
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Mesa-de-trabajo3_7_qlq6xb.webp?v=1659801650"
              alt=""
            ></img>
            <img className="img-footer-w"
              width={146}
              height={73}
              loading="lazy"
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo_klaviyo_master_2_85cfaef4ab.webp?v=1659801650"
              alt=""
            ></img>
            <img style={{paddingBottom:"20px"}} className="img-footer-w"
               width="60%"
              loading="lazy"
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/LandingEcommerce_logoPartner_-45.png?v=1660746182"
              alt=""
            ></img>
            <img className="img-footer-w"
               width="60%"
              loading="lazy"
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/LandingEcommerce_logoPartner_-46.png?v=1660746182"
              alt=""
            ></img>
          </Col>
          <Col sm={3}>
            <h2 style={texto}>Nuestros Proyectos</h2>

            <hr className="lineal" style={linea}></hr>
            <ul>
            <li>
                <a
                  className="navbar-brand"
                  href="https://www.academiametrics.com/"
                >
                  Academia Metrics
                </a>
              </li>
              <li>
                <a
                  className="navbar-brand"
                  href="https://open.spotify.com/show/3UpMgCSvyBvTQOwVTTyIXN?si=oaFU0mSuQ_yiD2Q7CzPqOQ"
                >
                  Uno Entre mil
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default footer;
