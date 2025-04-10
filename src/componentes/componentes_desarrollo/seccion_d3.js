import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../global-styles/estilo.scss"
import UseHome from "../../hooks/useHome";
import Slidermkt3 from "../componentes_home/sliderMkt5";


function Seccion_d3() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion3[0];
  const imagen_iconos = data.imagen_iconos;
 
  return (
    <div>

    <div className="cont-mov" style={{ fontFamily: "Brandon, Brandon", background: "#9F80F5", paddingTop:"40px", paddingBottom:"40px" }}>
      <Container>

      <Row>
      <Col md={1}></Col>
    <Col md={6} className="fortres" >

    <div className="forsolos">
    <h1 className="cont-par-cont" >Contáctanos hoy y en menos de 24 horas
hábiles responderemos a tu solicitud para 
<strong> agendar una llamada.</strong></h1>
        </div>
    </Col>



    <Col md={4} className="fonnam2" >
      
      <a
            className="cont-par-cont4"
              href="#contact-form66"
              style={{
     
                color: "#fffe00",
                
          
                textDecoration: "none",
              }}
            >
              COORDINAR UNA REUNION
            </a>
      
      
      
 
    </Col>
    <Col md={1}></Col>
  </Row>
 


         

      </Container>
    
    </div>

    <div className="pc-for cont-mov icond3" style={{ fontFamily: "Brandon, Brandon", background: "#FFFFF" }}>
      <Container>

  

  <Row>
    <Col  id="iconss-iconss"  style={{ display:"flex", justifyContent:"center" }}>
  <div className="w3-card-4" style={{textAlign:"left", display:"flex", alignItems:"center", justifyContent:"center", width:"370px"}}>
  <img
           alt="principalpruebas"
           width={70}
           height={70}
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591932/sector4_0dd6ad7573.jpg"
      ></img>

    <div style={{marginLeft:"10px"}} className="w3-container w3-center">
    <p className="primerParfd1">Plataforma</p>
      <p className="primerParfd2">Shopify o Woocommerce.

</p>
    </div>
  </div>

  <div className="w3-card-4" style={{textAlign:"left", display:"flex", alignItems:"center", justifyContent:"center", width:"370px"}}>
  <img
          alt="principalpruebas"
          width={70}
          height={70}
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591931/sector5_84eae01685.jpg"
      ></img>

    <div style={{marginLeft:"10px"}} className="w3-container w3-center">
    <p className="primerParfd1">Diseño</p>
      <p className="primerParfd2">Líneas gráficas y editorial UX/UI.</p>
    </div>
  </div>
  <div className="w3-card-4" style={{textAlign:"left", display:"flex", alignItems:"center",  justifyContent:"center", width:"370px"}}>
  <img
          alt="principalpruebas"
          width={70}
          height={70}

        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591958/sector6_f83b44b0f6.jpg"
      ></img>

    <div style={{marginLeft:"10px"}} class="w3-container w3-center">
    <p className="primerParfd1">Desarrollo</p>
      <p className="primerParfd2">Html, css, js, liquid, php.</p>
    </div>
  </div>    
    </Col>
  </Row>
  <Row style={{ marginTop:"20px" }} >
    <Col  id="iconss-iconss"  style={{ display:"flex", justifyContent:"center" }}>
  <div className="w3-card-4" style={{textAlign:"left", display:"flex", alignItems:"center", justifyContent:"center", width:"370px", paddingLeft:"18px"}}>
  <img
           alt="principalpruebas"
           width={70}
           height={70}
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591931/sector7_e628df7607.jpg"
      ></img>

    <div style={{marginLeft:"10px"}} className="w3-container w3-center">
    <p className="primerParfd1">Implementación</p>
      <p className="primerParfd2">Apps, Plugins y Analítica Web.

</p>
    </div>
  </div>

  <div className="w3-card-4" style={{textAlign:"left", display:"flex", alignItems:"center", justifyContent:"center", width:"370px"}}>
  <img
          alt="principalpruebas"
          width={70}
          height={70}
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591931/sector8_68b5b9b96a.jpg"
      ></img>

    <div style={{marginLeft:"10px"}} className="w3-container w3-center">
    <p className="primerParfd1">SEO</p>
      <p className="primerParfd2">Posicionamiento y Performance.</p>
    </div>
  </div>
  <div className="w3-card-4" style={{textAlign:"left", display:"flex", alignItems:"center", justifyContent:"center", width:"370px", paddingLeft:"44px"}}>
  <img
          alt="principalpruebas"
          width={70}
          height={70}

        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591931/sector9_a41e93439a.jpg"
      ></img>

    <div  style={{marginLeft:"10px"}} class="w3-container w3-center">
    <p className="primerParfd1">Analítica</p>
      <p className="primerParfd2">Píxeles, Scripts e Integraciones.</p>
    </div>
  </div>    
    </Col>
  </Row>


  <Row
          className="d3-client giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          
          <Col  sm={8} className="sec_d3">
          
          <h1 className="sec_d3-text">Clientes de nuestra agencia</h1>
          <Slidermkt3></Slidermkt3>

          </Col>
        </Row>
      </Container>
    </div>


    <div className="movil-for cont-mov5 icond3" style={{ background: "#FFFFF" }}>
      <Container>

  

  <Row>
    <Col className="cont-mov6"  >
  <div className="w3-card-4" style={{textAlign:"left", display:"flex", alignItems:"center", justifyContent:"start", paddingBottom:"10px"}}>
  <img
           alt="principalpruebas"
           width={70}
           height={70}
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591932/sector4_0dd6ad7573.jpg"
      ></img>

    <div style={{marginLeft:"10px"}} className="w3-container w3-center">
    <p className="primerParfd1">Plataforma</p>
      <p className="primerParfd2">Shopify o Woocommerce.

</p>
    </div>
  </div>

  <div className="w3-card-4" style={{textAlign:"left", display:"flex", alignItems:"center", justifyContent:"start", paddingBottom:"10px"}}>
  <img
          alt="principalpruebas"
          width={70}
          height={70}
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591931/sector5_84eae01685.jpg"
      ></img>

    <div style={{marginLeft:"10px"}} className="w3-container w3-center">
    <p className="primerParfd1">Diseño</p>
      <p className="primerParfd2">Líneas gráficas y editorial UX/UI.</p>
    </div>
  </div>
  <div className="w3-card-4" style={{textAlign:"left", display:"flex", alignItems:"center", justifyContent:"start", paddingBottom:"10px"}}>
  <img
          alt="principalpruebas"
          width={70}
          height={70}

        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591958/sector6_f83b44b0f6.jpg"
      ></img>

    <div style={{marginLeft:"10px"}} class="w3-container w3-center">
    <p className="primerParfd1">Desarrollo</p>
      <p className="primerParfd2">Html, css, js, liquid, php.</p>
    </div>
  </div>    
    </Col>
  </Row>
  <Row  >
    <Col className="cont-mov6" >
  <div className="w3-card-4" style={{textAlign:"left", display:"flex", alignItems:"center", justifyContent:"start", paddingBottom:"10px"}}>
  <img
           alt="principalpruebas"
           width={70}
           height={70}
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591931/sector7_e628df7607.jpg"
      ></img>

    <div style={{marginLeft:"10px"}} className="w3-container w3-center">
    <p className="primerParfd1">Implementación</p>
      <p className="primerParfd2">Apps, Plugins y Analítica Web.

</p>
    </div>
  </div>

  <div className="w3-card-4" style={{textAlign:"left", display:"flex", alignItems:"center", justifyContent:"start", paddingBottom:"10px"}}>
  <img
          alt="principalpruebas"
          width={70}
          height={70}
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591931/sector8_68b5b9b96a.jpg"
      ></img>

    <div style={{marginLeft:"10px"}} className="w3-container w3-center">
    <p className="primerParfd1">SEO</p>
      <p className="primerParfd2">Posicionamiento y Performance.</p>
    </div>
  </div>
  <div className="w3-card-4" style={{textAlign:"left", display:"flex", alignItems:"center", justifyContent:"start", paddingBottom:"10px"}}>
  <img
          alt="principalpruebas"
          width={70}
          height={70}

        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653591931/sector9_a41e93439a.jpg"
      ></img>

    <div  style={{marginLeft:"10px"}} class="w3-container w3-center">
    <p className="primerParfd1">Analítica</p>
      <p className="primerParfd2">Píxeles, Scripts e Integraciones.</p>
    </div>
  </div>    
    </Col>
  </Row>


  <Row
          className="d3-client giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          
          <Col  sm={8} className="sec_d3">
          
          <h1 className="sec_d3-text">Clientes de nuestra agencia</h1>
          <Slidermkt3></Slidermkt3>

          </Col>
        </Row>
      </Container>
    </div>

























    
    <div className="cont-mov" style={{ fontFamily: "Brandon, Brandon", background: "#9F80F5", paddingTop:"60px", paddingBottom:"60px" }}>

    <div style={{}} >
    <h3 className="titulo-next">BITACORA</h3>
    <h4 className="titulo-next3">Nuestra metodología cumple 5 etapas.</h4>
    </div>

      <Container>

      <Row className="pc-for" style={{marginTop:"20px"}} >
    <Col style={{display:"flex", alignItems:"center", justifyContent: "end"}}>
    <img
    
          alt="principalpruebas"
          width="75%"
      
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653946056/sector10_min_7b03890ab6.png"
      ></img>
    </Col>
    <Col style={{display:"flex", alignItems:"center"}}>
    <img
     
          alt="principalpruebas"
          width="45%"
     
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653946071/sssssf_9ed95d2086.jpg"
      ></img>
    </Col>
  </Row>

  <Row className="movil-for" >
    <Col >
    <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="100%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653946071/sssssf_9ed95d2086.jpg"
      ></img>
    <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="100%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653946056/sector10_min_7b03890ab6.png "
      ></img>

    </Col>

  </Row>
 


         

      </Container>
    
    </div>

    <Container  className="padd-garantia" >
        <Row
          className="giro justify-content-center"
          style={{ display:"flex", justifyContent: "center", alignItems: "center" }}
        >
          



          <Col  sm={6} md={5} className="paddfe uno order-xs-12 order-md-1">

          <h1 className="pp-far" >¿Cuál es nuestra Garantía?</h1>
          <p className="pp-far2">Diseñamos, desarrollamos e implementamos las mejores prácticas para ayudarte a vender más.</p>
          <p className="pp-far3">NUESTRA GARANTÍA ES DARTE SEGURIDAD MIENTRAS HACES CRECER TU NEGOCIO.</p>
          <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="90%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652979130/Landing_Ecommerce_MV_b75426856e.png"
      ></img>


          </Col>
          <Col style={{textAlign:"start", paddingLeft:"25px"}} sm={6} md={5} className="dos order-xs-1 order-md-2">
              
          <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="100%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653946887/jh2_min_baca46798b.jpg"
      ></img>


          </Col>
        
        </Row>


        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
      <Col  sm={6} md={5} style={{paddingTop:"20px"}} className="movil-for order-xs-1 order-md-1">

<h1 className="pp-far">¿Por qué trabajar
con Nosotros?</h1>
<p className="pp-far2">Nos enfocamos en ofrecer una atención de calidad y un servicio que cumpla tus expectativas.</p>
<p className="pp-far3">TRABAJAR CON NOSOTROS TE ABRIRÁ LA PUERTA A NUEVAS OPORTUNIDADES DE CRECIMIENTO</p>
<img
loading="lazy"
style={{paddingTop:"1%"}}
alt="principalpruebas"
width="90%"
key="id1"
className="lazyload img "
src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652979233/Landing_Ecommerce_VT_39bb86691a.png"
></img>


</Col>

<Col style={{textAlign:"end", paddingRight:"25px"}} sm={6} md={5} className=" order-xs-2 order-md-1">
              
          <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="70%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653946886/sector13_min_5c7bd8e8e9.jpg"
      ></img>


          </Col>



          <Col  sm={6} className="pc-for order-xs-1 order-md-2">

<h1 className="pp-far">¿Por qué trabajar
con Nosotros?</h1>
<p className="pp-far2">Nos enfocamos en ofrecer una atención de calidad y un servicio que cumpla tus expectativas.</p>
<p className="pp-far3">TRABAJAR CON NOSOTROS TE ABRIRÁ LA PUERTA A NUEVAS OPORTUNIDADES DE CRECIMIENTO</p>
<img
loading="lazy"
style={{paddingTop:"1%"}}
alt="principalpruebas"
width="90%"
key="id1"
className="lazyload img "
src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652979233/Landing_Ecommerce_VT_39bb86691a.png"
></img>


</Col>
          
        </Row>



      </Container>





    </div>
  );
}

export default Seccion_d3;
