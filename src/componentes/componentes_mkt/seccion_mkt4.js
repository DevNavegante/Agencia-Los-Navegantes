import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../global-styles/estilo.scss"
import UseMkt from "../../hooks/useMkt";
import Slidermkt from "../componentes_home/slidertMkt4";
import Slidermkt2 from "../componentes_home/slidermkt2";

function seccion_mkt4() {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion3[0];
  const imagen = data.imagen_iconos;
  const titulo = data.titulo;
 
  return (
    <div  >
        
        <div style={{background:"#E1E2E4"}} className="paddfe" >

        <h1 className="primerParf">INCREMENTEMOS EL FLUJO DE CLIENTES <br /> Y FACTURACIÓN DE TU NEGOCIO</h1>



        <Container className="contain-mkt4"  >
        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col style={{ display:"flex", justifyContent:"center" }}  sm={6} className="uno order-xs-12 order-md-1">
          <div >
          <h2 className="pc-for primerParfLeft">CON LA IMPLEMENTACIÓN DE CAMPAÑAS<br /> DE MARKETING DIGITAL</h2>
          <p className="pc-for parrafoEmbudo primerParfLeft2">Hemos asesorado a +500 empresas en la<br /> implementación de campañas en Facebook e<br /> Instagram Ads, Google Ads, Youtube Ads, Email<br /> Marketing, Analitica Web y Performance</p>
          <h2 className="movil-for primerParfLeft">CON LA IMPLEMENTACIÓN DE CAMPAÑAS DE MARKETING DIGITAL</h2>
          <p className="pdtwot  movil-for primerParfLeft2">Hemos asesorado a +500 empresas en la implementación de campañas en Facebook e Instagram Ads, Google Ads, Youtube Ads, Email Marketing, Analitica Web y Performance</p>
         
          </div>

          </Col>
          <Col  sm={6} xs={12} className="hhhh dos order-xs-1 order-md-2">
              

          <Slidermkt></Slidermkt>

          </Col>
        </Row>
      </Container>
      </div>
      


<div  style={{ fontFamily: "Brandon, Brandon", background: "#e1e2e4", paddingBottom:"20px"}}>
      <Container>

      <Row className="pc-for">







    <Col md={5} id="iconss-iconss"  >
    <img
      loading="lazy"

          alt="principalpruebas"
          width="100%"

        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652976309/Landing_Ecommerce_Embudo_21_b7ac0750f9.png"
      ></img>

   
</Col>

<Col  md={3} id="iconss-iconss"  >
  <img
      loading="lazy"
     
          alt="principalpruebas"
          width="82%"
    
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652976309/Landing_Ecommerce_Embudo_22_7a9ec21374.png"
      ></img>

</Col>

<Col  md={4} style={{ display:"flex", justifyContent:"start", alignItems:"center" }}  >

<div>
  <h2 className="primerParfLeft">EMBUDOS DE VENTA</h2>
          <p className="pc-for parrafoEmbudo">Generamos procesos de venta online y<br/> automatizados, que generan ventas, leads<br/> y clientes de forma constante, recurrente y<br/> escalable en el tiempo.</p>
          </div>
 

    </Col>
  </Row>


  <Row className="movil-for">
    <Col   >
    <div style={{width:"100%"}}>
  <h2 className="primerParfLeft">EMBUDOS DE VENTA</h2>
          <p className="ppp movil-for">Generamos procesos de venta online y automatizados, que generan ventas, leads y clientes de forma constante, recurrente y escalable en el tiempo.</p>

          </div >
    <div style={{textAlign:"center"}} >
    <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="100%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652976309/Landing_Ecommerce_Embudo_21_b7ac0750f9.png"
      ></img>

   
  </div>

  <div style={{textAlign:"center"}}  >
  <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="45%"
        key="id1"
        className="lazyload img "
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652976309/Landing_Ecommerce_Embudo_22_7a9ec21374.png"
      ></img>

  </div>

 

    </Col>
  </Row>


 </Container>
    </div>



    <div  style={{ background: "#290078", paddingTop:"40px", paddingBottom:"40px" }}>
 

     
    <Col style={{display:"flex", justifyContent:"center"}}>

    <div >
    <h1 style={{textAlign:"center"}} className="cont-par-cont" >GENERAMOS ESTRATEGIAS DE ALTO IMPACTO</h1>
    <h1 style={{textAlign:"center"}} className="cont-par-cont2" >AUMENTAR EL RETORNO DE INVERSIÓN PARA TU NEGOCIO</h1>
          <h3 style={{textAlign:"center"}} className="cont-par-cont" >ES NUESTRO TRABAJO</h3></div>
    </Col>
 



  
    
    </div>

    <div  style={{ textAlign:"center", fontFamily: "Brandon, Brandon"}}>
 

     
 

    <Slidermkt2></Slidermkt2>


 
 </div>





    </div>
  );
}

export default seccion_mkt4;
