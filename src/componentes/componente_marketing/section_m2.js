import React from "react";
import "../global-styles/estilo.scss"
import { Container, Row, Col } from "react-bootstrap";


const seccionMkt2 = () => {



  return (
    <div  className="cont-mov" style={{ backgroundColor: "white", paddingTop:"60px", paddingBottom:"60px" }}>
      <Container  >
        <Row><h1  className="ffoury par-banner-black3">Deja de perder dinero en anuncios que no generan clientes.</h1></Row>
        <Row
          className="giro justify-content-center "
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col style={{display:"flex", justifyContent:"end"}} md={6} sm={6} className="uno order-xs-12 order-md-1">
          <div className="fortwo"  >
          
          <h1 className="parru-mkt2">La mayoría de las agencias siguen obsesionadas con métricas vanidosas, pero nosotros creamos <strong>sistemas de adquisición de clientes</strong> que trabajan <strong>24/7</strong> para generar ventas reales y predecibles.</h1>
          <h1 className="parru-mkt3">Por eso, estamos en el <strong>top 3% de agencias más destacadas de Latinoamérica</strong> y hemos sido reconocidos como <strong>Google Partner Premier</strong> en múltiples ocasiones.</h1>
          
          <h1 className="parru-mkt5">¿Por qué elegirnos?</h1>
          <ul className="parru-mkt3">
            <li>✅Clientes en automático, sin esfuerzo manual.</li>
            <li>✅IA aplicada al marketing para diferenciar y posicionar tu marca.</li>
            <li>✅Máximo retorno por cada dólar invertido con estrategias diseñadas para conversión, no sólo tráfico.</li>
          </ul>

          <h1 className="parru-mkt5">Resultados que lo demuestran:</h1>
          <ul className="parru-mkt3">
            <li>✅ +800 empresas han escalado sus ventas con nosotros.</li>
            <li>✅ +30 millones de dólares administrados en publicidad digital.</li>
            <li>✅ +30 especialistas certificados optimizando cada campaña.</li>
          </ul>
          <h1 className="parru-mkt5">Deja de contratar más personal o delegar tus ventas en inexpertos.</h1>
          <h1 className="parru-mkt3">Las empresas que no logran convertir sus clics en clientes <strong>siempre terminan trabajando con nosotros</strong>, porque sabemos cómo transformar cada anuncio en una inversión rentable.</h1>
 
          <br></br>
        
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
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/agencias2.webp?v=1742586331"
      ></img>


          </Col>
        </Row>
        <Row className="fannyfou2" style={{justifyContent:"center"}}>  <a
            id="btndescubri"
              href="#contact-form-saber"
             className=" btn-dscaqfan"
            >
            ¿Quieres dejar de perder dinero y empezar a vender más?<br></br>
            Conversa con nosotros, da clic aquí ↓
            </a></Row>
      </Container>

      

    </div>
  );
};

export default seccionMkt2;
