import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../global-styles/estilo.scss"
import UseMkt from "../../hooks/useMkt";
import Slidermkt from "../componentes_home/slidedrD4";
import Slidermkt2 from "../componentes_home/sliderShopify";
import Slidermkt3 from "../componentes_home/sliderWoocommerce";
import Example1 from "../componentes_desarrollo/acordiond"


function Seccion_d4() {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion3[0];
  const imagen = data.imagen_iconos;
  const titulo = data.titulo;
 
  return (
    <div  >
<div style={{textAlign:"center", background:"#F6F6F6", paddingTop:"40px"}} >
        <img className="pc-for"
            style={{ marginBottom:"10px" }}
            alt="Agencia Los Navegantes"
            width="20%"
            src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653967901/sector14_min_dcd65ce1c8.png"
></img>
<img className="movil-for"
            style={{ paddingBottom:"20px", margin:"0 auto" }}
            alt="Agencia Los Navegantes"
            width="50%"
            src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653967901/sector14_min_dcd65ce1c8.png"
></img>
<div >


<Slidermkt2></Slidermkt2>
    
    
     </div>



</div>

<div  style={{textAlign:"center" , background:"#F6F6F6"}} >
        
<img className="pc-for"
            style={{ marginBottom:"10px" }}
            alt="Agencia Los Navegantes"
            width="20%"
            src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968550/sector15_min_5f3ac808e5.png"
></img>
<img className="movil-for"
            style={{ paddingTop:"30px", paddingBottom:"20px", margin:"0 auto" }}
            alt="Agencia Los Navegantes"
            width="60%"
            src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968550/sector15_min_5f3ac808e5.png"
></img>

<div style={{ paddingBottom:"30px" }}>

<Slidermkt3></Slidermkt3>
     </div>

     <div style={{ display:"flex", justifyContent:"center",  paddingBottom:"40px" }}>

      <a
            className="boton-mkt7"
              href="#contact-form66"
              style={{
     
               
                
          
                textDecoration: "none",
              }}
            >
              QUIERO SABER MÁS
            </a>
      
    

      </div>



</div>

 

<div style={{textAlign:"center", paddingTop:"40px", paddingBottom:"40px"}}>

<h2 className="parrfd4">Somos Partners Digitales</h2>
<h3 className="parrf2d4">Somos especialistas en decenas de plataformas.</h3>
<Slidermkt></Slidermkt>
<a
      className="boton-mkt8"
        href="#contact-form66"
        style={{

         
          
    
          textDecoration: "none",
        }}
      >
        IR AL FORMULARIO DE CONTACTO
      </a>


</div>    
<div style={{background:"#9F80F5", height:"5px"}}></div >

<div className="padcreamos" >

<div className="colcreamos" > 
<h2 className="parrfd4">Creamos tiendas online que no sólo lucen bien,
te hacen VENDER MEJOR!</h2>
</div >

<Container >
<Row >

<Col >
<img
            alt="Agencia Los Navegantes"
            width="100%"
            src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654005537/Correcciones_Landing_12_740f46472e.jpg"
></img>
</Col>

</Row >
<Row className="conObt" >
<Col className="pc-for" style={{textAlign:"right", backgroundColor:"white"}} >
<img
            alt="Agencia Los Navegantes"
            width="80%"
            src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Correcciones_Landing_Capitan_copy_4c6a8eb348.png?v=1690930155"
></img>
</Col >
<Col className="movil-for" sm={12} style={{textAlign:"center", backgroundColor:"white"}} >
<img
            alt="Agencia Los Navegantes"
            width="80%"
            src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Correcciones_Landing_Capitan_copy_4c6a8eb348.png?v=1690930155"
></img>
</Col >

<Col className="pc-for" style={{ display:"flex", alignItems:"center", backgroundColor:"white" }}>

<div style={{width:"90%", textAlign:"left"}}> 
<h2 className="parrfscD4">Conversemos sobre tus objetivos y naveguemos juntos a ese horizonte.</h2>
<p className="parrfsc2D4">Nuestra tripulación te acompañará en el proceso de diseño, desarrollo, integración y publicación de la tienda online que necesites.</p>
<p className="parrfsc3D4">Junto a nosotros podrás</p>

            <a
            
              href="#contact-form3"
              className="link-sd4"
            >
              Desarrollar tu Ecommerce	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg>
              
            </a>
            <br/>
            <a
            
              href="#contact-form3"
              className="link-sd4"
            >
              Rediseñar tu tienda Online	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg>
              
            </a>

</div >


</Col >
<Col className="movil-for" style={{  alignItems:"center", backgroundColor:"white" }}>

<div style={{width:"100%", textAlign:"center"}}> 
<h2 className="parrfscD4">Conversemos sobre tus objetivos y naveguemos juntos a ese horizonte.</h2>
<p className="parrfsc2D4">Nuestra tripulación te acompañará en el proceso de diseño, desarrollo, integración y publicación de la tienda online que necesites.</p>
<p className="parrfsc3D4">Junto a nosotros podrás</p>

            <a
            
              href="/marketing-digital"
              className="link-sd4"
            >
              Desarrollar tu Ecommerce	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg>
              
            </a>
            <br/>
            <a
            
              href="/marketing-digital"
              className="link-sd4"
            >
              Rediseñar tu tienda Online	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg>
              
            </a>

</div >


</Col >
</Row >

</Container>


<div>


</div>

</div>



    </div>
  );
}

export default Seccion_d4;
