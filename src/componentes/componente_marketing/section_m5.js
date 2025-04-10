import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../global-styles/estilo.scss"
import SliderMmkt from "../componente_marketing/Slider/SliderRmkMovil"
import SliderFmkt from "../componente_marketing/Slider/sliderRmkt"
import Slidermkt3 from "../componente_marketing/Slider/sliderMkt3";
import SliderReviews from "../componente_marketing/Slider/sliderReviews"
import Slidertit from "../componentes_home/slidertesti"
function seccion_mkt5() {

 
  return (
    <div  >
        
        <SliderFmkt></SliderFmkt>
        <SliderMmkt></SliderMmkt>
  
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
        src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_MV_b75426856e_d334d9ed-a97c-4b5d-a1b2-9255a6971e9c.png?v=1658868761"
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
src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_VT_39bb86691a_2ab846a0-bdcf-4171-a95c-a20ea472c8de.png?v=1658868760"
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
src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Ecommerce_VT_39bb86691a_2ab846a0-bdcf-4171-a95c-a20ea472c8de.png?v=1658868760"
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
          <h2 className="parrafo-mkt5">SOMOS UNA AGENCIA CERTIFICADA Y ESPECIALISTA EN CRECIMIENTO DIGITAL</h2>
          <p className="subparrafo-mkt5">Más que una agencia, somos un partner estratégico para escalar tu negocio con resultados reales, medibles y sostenibles en el tiempo.</p>
          <p className="subparrafo-mkt5">💡 Reconocidos y respaldados:</p>
          <ul style={{ marginLeft:"20px",listStyleType: 'disc' }} className="subparrafo-mkt5">
            <li>• Google Partner Premier & Meta Partner Premier</li>
            <li>• Certificaciones oficiales en plataformas líderes</li>
            <li>• Más de 10 años de experiencia en Chile y Latam</li>
          </ul>
          <p className="subparrafo-mkt8">Lo que realmente nos avala no son solo los sellos, sino los resultados:</p>
          <p className="subparrafo-mkt5">Hemos llevado a cientos de empresas a escenarios de alto impacto, transformando inversión publicitaria en crecimiento rentable y sostenido.</p>
          <p className="subparrafo-mkt8">Nos especializamos en las plataformas más relevantes para tu empresa:</p>
          <p className="subparrafo-mkt5">Meta Ads (Facebook e Instagram), Google Ads (Search, Youtube, Shopping, Display y Discovery), Tik Tok Ads, Pinterest Ads y en eMail Marketing. </p>
          
          
          <p className="subparrafo-mkt8">Trabaja con expertos que garantizan resultados, no solo certificados.</p>
          </div>

          </Col>
          <Col  sm={6} className="sldmkt3f dos order-xs-1 order-md-2">
              

          <Slidermkt3></Slidermkt3>

          </Col>
        </Row>
    

        <Container className="partners-container" style={{ padding: "30px 0" }}>
  <div 
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px"
    }}
  >
    <div className="partner-logo" style={{ width: "180px", height: "120px", position: "relative" }}>
      <img
        loading="lazy"
        alt="Google Partner Premier 2025"
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "contain",
          padding: "10px" 
        }}
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/PremierPartner_2025.png?v=1742588845"
      />
    </div>
    
    <div className="partner-logo" style={{ width: "180px", height: "120px", position: "relative" }}>
      <img
        loading="lazy"
        alt="Meta Business Partner"
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "contain",
          padding: "10px" 
        }}
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Meta_Premier_Logo.png?v=1742588844"
      />
    </div>
    
    <div className="partner-logo" style={{ width: "180px", height: "120px", position: "relative" }}>
      <img
        loading="lazy"
        alt="TikTok Marketing Partners"
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "contain",
          padding: "10px" 
        }}
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/LandingEcommerce_logoPartner_-46.png?v=1742588844"
      />
    </div>
    
    <div className="partner-logo" style={{ width: "180px", height: "120px", position: "relative" }}>
      <img
        loading="lazy"
        alt="Pinterest Partners"
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "contain",
          padding: "10px" 
        }}
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/LandingEcommerce_logoPartner_-45.png?v=1742588845"
      />
    </div>
    
    <div className="partner-logo" style={{ width: "180px", height: "120px", position: "relative" }}>
      <img
        loading="lazy"
        alt="Klaviyo Silver Partner"
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "contain",
          padding: "10px" 
        }}
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/KLAVIYO_MASTER_GOLD.webp?v=1744292633"
      />
    </div>
    
    <div className="partner-logo" style={{ width: "180px", height: "120px", position: "relative" }}>
      <img
        loading="lazy"
        alt="Shopify Partner"
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "contain",
          padding: "10px" 
        }}
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/shopify-partners.png?v=1742588844"
      />
    </div>
  </div>
</Container>


      </Container>
      </div>


      <div className="versc5" >
      <Col style={{textAlign:"center"}}>
      <div class="fondocompartidon">
      <h1 className="par-banner-blackV">CONSEGUIMOS EL MAXIMO RETORNO DE TU INVERSION EN ANUNCIOS</h1>

          <img style={{paddingBottom:"60px"}}
       loading="lazy"

           alt="principalpruebas"
           width="70%"
  
         className="lazyload img "
         src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/agencialosnavegantes_1.png?v=1742829821"
       ></img>

<h1 className="par-banner-black">NUESTRO PROCESO COMPROBADO CON CIENTOS DE EMPRESAS INCLUYE:</h1></div>
<div class="marketing-services-container">
  

<div class="contenedorNuevo">
  <div class="service-card">
    <div class="image-container">
      <img 
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Agencia_Los_Navegantes_2.png?v=1742826838" 
        alt="Influencer Marketing" 
        class="service-image"
      />
    </div>
    <div class="service-content">
      <h2 class="service-title">
        <span class="title-secondary">Influencer</span>
        <span   class="panene title-main">Marketing</span>
      </h2>
      <p class="service-description">
        Anuncios con influencers<br class="nonedont"></br> +50K seguidores.
      </p>
    </div>
  </div>


  <div class="service-card">
    <div class="image-container">
      <img 
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Agencia_Los_Navegantes_4_1.png?v=1742826934" 
        alt="UGC & EGC" 
        class="service-image"
      />
    </div>
    <div class="service-content">
      <h2 class="service-title">
        <span class="title-secondary">UGC</span>
        <span class="panene title-secondary"><span class="title-main" style={{marginRight:"10px"}}>&</span> EGC</span>
      </h2>
      <p class="service-description">
        Contenido generado por<br class="nonedont"></br> creadores y colaboradores.
      </p>
    </div>
  </div>


  <div class="service-card">
    <div class="image-container">
      <img 
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Agencia_Los_Navegantes_3.webp?v=1742824166" 
        alt="Anuncios con IA" 
        class="service-image"
      />
    </div>
    <div class="service-content">
      <h2 class="service-title">
        <span class="title-main">Anuncios</span>
        <span  class="title-main panene">con <span style={{marginLeft:"10px"}} class="title-secondary"> IA</span></span>
      </h2>
      <p class="service-description">
        Avatares, voces, imágenes y<br class="nonedont"></br> videos con IA.
      </p>
    </div>
  </div>

  <div class="service-card">
    <div class="image-container">
      <img 
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Agencia_Los_Navegantes.webp?v=1742824166" 
        alt="Anuncios convencionales" 
        class="service-image"
      />
    </div>
    <div class="service-content">
      <h2 class="service-title">
        <span class="title-main">Anuncios</span>
        <span  class="panene title-secondary">convencionales</span>
      </h2>
      <p class="service-description">
        Destacando los beneficios de<br class="nonedont"></br> productos/servicios.
      </p>
    </div>
  </div>
  </div>
</div>
<div style={{paddingTop:"60px", backgroundColor:"#5d4fdb"}}>
<h1 className="par-banner-black">ESTRATEGIAS PUBLICITARIAS BASADAS EN METRICAS Y DATOS CLAVE</h1>

<div className="marketing-strategy-grid">
  <div className="strategy-card">
    <div className="strategy-icon">
      <img 
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Recurso_10.webp?v=1742827607" 
        alt="Análisis del público objetivo" 
      /><h3 className="strategy-title">Análisis del<br></br>público objetivo</h3>
    </div>
    
    <p className="strategy-description">Identificamos deseos,<br></br>problemas y motivaciones para<br></br>lograr segmentaciones<br></br>efectivas.</p>
  </div>
  
  <div className="strategy-card">
    <div className="strategy-icon">
      <img 
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Recurso_9.webp?v=1742827606" 
        alt="Enfoque en beneficios" 
      /><h3 className="strategy-title">Enfoque en<br></br>beneficios</h3>
    </div>
    
    <p className="strategy-description">Vendemos soluciones, no<br></br>características.</p>
  </div>
  
  <div className="strategy-card">
    <div className="strategy-icon">
      <img 
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Recurso_8.webp?v=1742827606" 
        alt="Optimización constante" 
      /><h3 className="strategy-title">Optimización<br></br>constante</h3>
    </div>
    
    <p className="strategy-description">Medimos audiencias,<br></br>creatividades, ganchos y copies<br></br>para escalar lo que funciona.</p>
  </div>
  
  <div className="strategy-card">
    <div className="strategy-icon">
      <img 
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Recurso_7.webp?v=1742827606" 
        alt="Estrategias innovadoras" 
      /><h3 className="strategy-title">Estrategias<br></br>innovadoras</h3>
    </div>
    
    <p className="strategy-description">Humanizamos la marca para<br></br>generar confianza y conversión.</p>
  </div>
  
  <div className="strategy-card">
    <div className="strategy-icon">
      <img 
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Recurso_6.webp?v=1742827607" 
        alt="Análisis competitivo" 
      /><h3 className="strategy-title">Análisis<br></br>competitivo</h3>
    </div>
    
    <p className="strategy-description">Identificamos qué anuncios<br></br>funcionan en tu sector y<br></br>diseñamos estrategias<br></br>diferenciadoras.</p>
  </div>
  
  <div className="strategy-card">
    <div className="strategy-icon">
      <img 
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Recurso_3.webp?v=1742827606" 
        alt="Matriz de testeo" 
      /><h3 className="strategy-title">Matriz<br></br>de testeo</h3>
    </div>
    
    <p className="strategy-description">Probamos anuncios en niveles<br></br>de prioridad (alto impacto,<br></br>mediano plazo, ideas<br></br>exploratorias).</p>
  </div>
  
  <div className="strategy-card">
    <div className="strategy-icon">
      <img 
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Recurso_5.webp?v=1742827607" 
        alt="Producción ágil" 
      /><h3 className="strategy-title">Producción<br></br>ágil</h3>
    </div>
    
    <p className="strategy-description">Creamos anuncios efectivos<br></br>con guiones detallados para<br></br>escalar rápido la inversión.</p>
  </div>
  
  <div className="strategy-card">
    <div className="strategy-icon">
      <img 
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Recurso_4.webp?v=1742827606" 
        alt="Implementación de aprendizaje" 
      /><h3 className="strategy-title">Implementación<br></br>de aprendizaje</h3>
    </div>
    
    <p className="strategy-description">Optimizamos cada campaña<br></br>con base en resultados y<br></br>tendencias de mercado.</p>
  </div>
</div>

</div>
    </Col>
</div>

<div style={{paddingTop:"40px", paddingBottom:"40px", paddingBottom:"40px", background:"#DEDCEC"}}>
<SliderReviews id="slider-rew"></SliderReviews>

</div>

<div className="versc6">
<Row>
<Col md={5} sm={6} className="loplop" >

<img
       loading="lazy"

           alt="principalpruebas"
           width="70%"
  
         className="lazyload img "
         src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/10_anos_de_experiencia_1.png?v=1742830957"
       ></img>

</Col>



<Col md={6} style={{ display:"flex", justifyContent:"center", alignItems:"center" }}  sm={6} className="uno order-xs-12 order-md-1">
          <div className="forsolos2">
          <h1 className="parrafos-exp" >Conversemos sobre tus objetivos y naveguemos juntos a ese horizonte.</h1>
          <p className="parrafos-exp2"  >Nuestra tripulación te acompañará en el proceso para resolver tus problemas de ventas, escalar tus resultados digitales y maximizamos tu retorno de inversión en Internet.</p>
        
          </div>

          </Col>



</Row>
</div>



    </div>
  );
}

export default seccion_mkt5;
