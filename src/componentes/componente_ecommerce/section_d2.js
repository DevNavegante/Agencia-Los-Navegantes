import React from "react";
import "../global-styles/estilo.scss"
import { Container, Row, Col } from "react-bootstrap";
const Secciond2 = () => {



  return (
    <div  className="cont-mov" style={{ backgroundColor: "white", paddingBottom:"60px" }}>
      <Container  >
        <Row
          className="giro justify-content-center "
          style={{ justifyContent: "center", alignItems: "center" }}
        >
     
          <Col style={{display:"flex", justifyContent:"end"}} md={6} sm={6} className="uno order-xs-12 order-md-1">
          <div className="fortwo"  >
          <h1 className="parru-mkt">El Desarrollo o el Re-Diseño de tu
eCommerce déjalo en manos de
verdaderos especialistas.</h1>
          <h1 className="parru-mkt2">Durante más de 8 años hemos apoyado a cientos de clientes a maximizar sus resultados en internet a través de Tiendas Online que les han ayudado a posicionarse en internet y aumentar sus ventas en el canal online.</h1>
          <h1 className="parru-mkt3">Contamos con un equipo de más +40 especialistas para diseñar/desarrollar tu eCommerce e integrarlo con las mejores plataformas de logística, analítica y performance.</h1>
          <img

          alt="principalpruebas"
          width="45%"
   
  
        src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/shop1_c8b1c5e24c.jpg?v=1658860368"
      ></img>
            <img

alt="principalpruebas"
width="35%"
style={{marginTop:"24px"}}

src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/shop2_52256a7862.jpg?v=1658860368"
></img>




            </div  >

          </Col>
          <Col  sm={6} md={6} className="center-cols dos order-xs-1 order-md-2">
              
          <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="90%"
        key="id1"
        className="lazyload img "
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/collage_2_0e3fa372-0aba-48ee-9ed1-6d842ae3e530.png?v=1734528759"
      ></img>


          </Col>
   
        </Row>
      </Container>

      

      

    </div>
  );
};

export default Secciond2;
