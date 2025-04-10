import React from "react";
import "../global-styles/estilo.scss"
import { Container, Row, Col } from "react-bootstrap";
import UseMkt from "../../hooks/useMkt";
import 'font-awesome/css/font-awesome.min.css';
const seccionMkt2 = () => {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion2[0];
  const descripcion = data.descripcion;
  const descripcion2 = data.descripcion2;
  const imagen_iconos = data.imagen_iconos;
  const titulo = data.titulo;


  return (
    <div  className="cont-mov" style={{ backgroundColor: "white", paddingTop:"60px", paddingBottom:"60px" }}>
      <Container  >
        <Row
          className="giro justify-content-center "
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col style={{display:"flex", justifyContent:"end"}} md={6} sm={6} className="uno order-xs-12 order-md-1">
          <div className="fortwo"  >
          <h1 className="parru-mkt">¿TUS RESULTADOS NO SON LOS QUE ESPERAS?</h1>
          <h1 className="parru-mkt2">Nos especializamos por crear estrategias digitales de alto impacto en Facebook e Instagram Ads, Google Ads, eMail Marketing y SEO.</h1>
          <h1 className="parru-mkt3">Hemos administrado más de 10 millones de dolares en pauta publicitaria y hemos asesorado a +700 ecommerce en la implementacion de campañas de marketing digital con foco a performance.</h1>
          <h1 className="parru-mkt4">Actualmente formamos parte de Google Partners Premier y somos una de las empresas destacadas en su programa de aceleradoras de agencias en Latam.</h1>
          <a
              
              href="#contact-form-mkt"
              style={{
                
                color: "#250077",
                fontSize: "18px",
                fontWeight: "700",
                textDecoration: "none",
                textAlign: "left",
              }}
            >
              <p style={{marginRight:"20px"}} className="cnvMkt2" >
                Descubre mas aquí &gt;
              </p>
            
            
            </a>
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
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652970828/Landing_Ecommerce_Collage_2a27d8ba9d.png"
      ></img>


          </Col>
        </Row>
      </Container>

      

    </div>
  );
};

export default seccionMkt2;
