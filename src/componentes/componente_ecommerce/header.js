import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "../global-styles/estilo.scss"
import { Nav, Container, Row, Col } from "react-bootstrap";



const imagen = {
  width: "70%",
};






function Header(props) {


  const [header, setHeader] = useState("header");

  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);







  return (
    <header className={header}>

        <Container  className="contenedor-body2">
          <Row  className="row-motin row align-items-center">
            <Col  sm={8} xs={8}>
              <Nav
              
              fixed="top" 
                className="navbar navbar-expand-lg navbar-light"
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              >
                <Nav.Item className=" navbar navbar-light">
                  <Link to="https://www.agencialosnavegantes.cl/" className=" navbar-brand">
                  
                    <div class="hoverLogo overlay">
                    <img loading="lazy" 
                 
                      src={"https://cdn.shopify.com/s/files/1/0654/9366/3973/files/seo_image_xhzur3.webp?v=1658864579"}
                      className="movil-image image img-fluid"
                      alt="primcipal top"
                    ></img>
                    </div>
                 
                  </Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={4} xs={4}>
   
             
            </Col>
          </Row>
        </Container>
        </header>
  )
}



export default Header

