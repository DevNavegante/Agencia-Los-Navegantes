import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../global-styles/estilo.scss"
import UseMkt from "../../hooks/useMkt";
import Slidermkt from "../componentes_home/slidertMkt4";
import Slidermkt2 from "../componentes_home/slidermkt2";
import Slidermkt3 from "../componentes_home/sliderMkt3";
import SliderReviews from "../componentes_home/sliderReviews"
function seccion_mkt5() {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion3[0];
  const imagen = data.imagen_iconos;
  const titulo = data.titulo;
 
  return (
    <div  >
        
  
        <Container  >
        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col  sm={6} className="paddfe uno order-xs-12 order-md-1">

          <h1 className="pp-far" >¿CUÁL ES NUESTRA GARANTÍA?</h1>
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
          <Col  sm={6} className="dos order-xs-1 order-md-2">
              
          <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="90%"
        key="id1"
        className="lazyload img "
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Landing_Ecommerce_Mock_Up.png?v=1690929335"
      ></img>


          </Col>
        
        </Row>


        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
      <Col  sm={6} style={{paddingTop:"20px"}} className="movil-for order-xs-1 order-md-1">

<h1 className="pp-far">¿POR QUÉ TRABAJAR CON NOSOTROS?</h1>
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

<Col  sm={6} className=" order-xs-2 order-md-1">
              
          <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
          width="90%"
        key="id1"
        className="lazyload img "
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/LandingEcommerce_Mockup2.png?v=1690929335"
      ></img>


          </Col>



          <Col  sm={6} className="pc-for order-xs-1 order-md-2">

<h1 className="pp-far">¿POR QUÉ TRABAJAR CON NOSOTROS?</h1>
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

      <div style={{ display:"flex", justifyContent:"center", paddingTop:"40px", paddingBottom:"40px" }}>

      <a
            className="boton-mkt5"
              href="#contact-form-saber"
              style={{
     
               
                
          
                textDecoration: "none",
              }}
            >
              QUIERO SABER MÁS
            </a>
      
    

      </div>
      <div style={{background:"#290078", height:"20px", width:"100%"}}></div >


      <div className="secse" style={{ background:"#E1E2E4"}}>
    



        <Container className="contain-mkt4"  >
        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col style={{ display:"flex", justifyContent:"end" }}  sm={6} className="uno order-xs-12 order-md-1">
          <div className="llMV" >
          <h2 className="parrafo-mkt5">SOMOS UNA AGENCIA CERTIFICADA</h2>
          <p className="subparrafo-mkt5">Podemos ser tu partner estratégico para lograr resultados reales y medibles y escalables en el tiempo.</p>
          <p className="subparrafo-mkt5">Actualmente somos Google Partners y Facebook Partners, contamos con diferentes certificaciones oficiales, pero lo más importante es que nos avala experiencia real y resultados de alto impacto en Google Ads y Facebook Ads.</p>
          </div>

          </Col>
          <Col  sm={6} className="sldmkt3f dos order-xs-1 order-md-2">
              

          <Slidermkt3></Slidermkt3>

          </Col>
        </Row>
    

        <Container className="oopsk"
        style={{   display: "flex",
            justifyContent: "center"}}
        
       >
 
           <Col xs={3} md={3} sm={6} style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign: "center" }}>
           <img
       loading="lazy"

           alt="principalpruebas"
           width="90%"
      
         className="lazyload img "
         src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652983079/Landing_Ecommerce_logo_Partner_31_80794ff347.png"
       ></img>
              <img
       loading="lazy"
   
           alt="principalpruebas"
           width="90%"
  
         className="lazyload img "
         src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652983079/Landing_Ecommerce_logo_Partner_32_7265186da2.png"
       ></img>
              <img
       loading="lazy"
  
           alt="principalpruebas"
           width="90%"

         className="lazyload img "
         src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652983079/Landing_Ecommerce_logo_Partner_33_5a568642a4.png"
       ></img>
              <img
       loading="lazy"
    
           alt="principalpruebas"
           width="90%"
    
         className="lazyload img "
         src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652983079/Landing_Ecommerce_logo_Partner_34_95593538c5.png"
       ></img>
           </Col>
 

 
       </Container>


      </Container>
      </div>


      <div className="versc5" >
      <Col>
    <h1 className="parrafos-anuncio" >¡Creamos anuncios que venden!</h1>
          <p className="parrafos-anuncio2"  >CONSEGUIMOS EL MÁXIMO ROA DE TU INVERSIÓN EN ADS</p>
          <img
       loading="lazy"

           alt="principalpruebas"
           width="100%"
  
         className="lazyload img "
         src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Landing_Ecommerce_Anuncios_que_venden.png?v=1690929004"
       ></img>
    </Col>
</div>

<div style={{paddingTop:"20px", paddingBottom:"20px", background:"#DEDCEC"}}>
<SliderReviews id="slider-rew"></SliderReviews>
</div>

<div className="versc6">
<Row>
<Col md={6} sm={6} className="loplop" >

<img
       loading="lazy"

           alt="principalpruebas"
           width="50%"
  
         className="lazyload img "
         src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654026383/Correcciones_Landing_Capitan_fc46a2b280.png"
       ></img>

</Col>



<Col style={{ display:"flex", justifyContent:"center", alignItems:"center" }}  sm={6} className="uno order-xs-12 order-md-1">
          <div className="forsolos2">
          <h1 className="parrafos-exp" >Conversemos sobre tus objetivos y naveguemos juntos a ese horizonte.</h1>
          <p className="parrafos-exp2"  >Nuestra tripulación te acompañará en el proceso de diseño, desarrollo, integración y publicación de la tienda online que necesites.</p>
          <p className="parrafos-exp3"  >Junto a nosotros podrás</p>
           
          </div>

          </Col>



</Row>
</div>



    </div>
  );
}

export default seccion_mkt5;
