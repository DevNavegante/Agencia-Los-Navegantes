import React from "react";
import "../global-styles/estilo.scss"
import { Container, Row, Col } from "react-bootstrap";
import UseMkt from "../../hooks/useMkt";
import 'font-awesome/css/font-awesome.min.css';
const Secciond2 = () => {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion2[0];
  const descripcion = data.descripcion;
  const descripcion2 = data.descripcion2;
  const imagen_iconos = data.imagen_iconos;
  const titulo = data.titulo;


  return (
    <div  className="cont-mov" style={{ backgroundColor: "white", paddingBottom:"60px" }}>
      <Container  >
        <Row
          className="giro justify-content-center "
          style={{ justifyContent: "center", alignItems: "center" }}
        >
     
          <Col style={{display:"flex", justifyContent:"end"}} md={5} sm={6} className="uno order-xs-12 order-md-1">
          <div className="fortwo"  >
          <h1 className="parru-mkt">El Desarrollo o el Re-Diseño de tu
eCommerce déjalo en manos de
verdaderos especialistas.</h1>
          <h1 className="parru-mkt2">Durante más de 6 años hemos apoyado a cientos de clientes a maximizar sus resultados en internet a través de Tiendas Online que les han ayudado a posicionarse en internet y aumentar sus ventas en el canal online.</h1>
          <h1 className="parru-mkt3">Contamos con un equipo de más 20 especialistas para diseñar/desarrollar tu eCommerce e integrarlo con las mejores plataformas de logística, analítica y performance.</h1>
          <img

          alt="principalpruebas"
          width="45%"
   
  
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591255/shop1_c8b1c5e24c.jpg"
      ></img>
            <img

alt="principalpruebas"
width="35%"
style={{marginTop:"24px"}}

src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591255/shop2_52256a7862.jpg"
></img>




            </div  >

          </Col>
          <Col  sm={6} md={5} className="center-cols dos order-xs-1 order-md-2">
              
          <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="90%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591152/nueva_faccf55424.png"
      ></img>


          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>

      

      

    </div>
  );
};

export default Secciond2;
