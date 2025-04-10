import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import "../global-styles/estilo.scss"

const sectionSaberMas = () => {


  return (
    <div  className="cont-mov2" style={{ backgroundColor: "#fff", textAlign:"center"}}>
     
     
      <div style={{justifyContent:"center"}} className="sb-div" >
<div className="saber-finish" style={{ width:"165px",textAlign:"end"}}>
<img className="img-sabermas" style={{ width: "60%"}} loading="lazy"  alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/izquierda_gez7w2.webp?v=1659800628" ></img>
</div>
<div  >
<h1 className="subtituloSobrer" style={{ fontSize: "50px", fontWeight: "700" }}>¿Quieres saber mas sobre nosotros?</h1> 

<p className="parrafoSaber">Somos parte de un holding de empresas digitales que buscan utilizar el internet como un canal de difusión, promoción y ventas.</p>
<p className="parrafoSaber">No solo nos enfocamos en servicios, nos apasiona la educación, los proyectos sociales y las comunidades de nicho.</p>
<p className="parrafoSaber">Aprovechamos las posibilidades que el mundo online hoy nos ofrece para sacar el máximo provecho a la tecnología.</p>
</div>

<div className="saber-finish" style={{width:"165px", textAlign:"start"}}>
<img className="img-sabermas" loading="lazy"  alt="" src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/derecha_prul7x.webp?v=1659800629" ></img>
</div>
</div>









      <Container style={{justifyContent:"center", display:"flex"}} className="contenedor-body9">
        <Row  id="saberMas"
          className="justify-content-center"
          style={{marginTop:"20px", justifyContent: "center", alignItems: "center", width:"70%" }}
        >
          <Col id="saberMas2"  sm={3}><a  href="https://www.fbadschile.cl/"><img loading="lazy" width={242} height={360}  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Nosotros_61_088b2c09cd_dcb6eed749.png?v=1659800763"  alt="academiametrics" className="lazyload img hoverclas img-fluid"></img></a></Col>
        <Col sm={3}><a href="https://www.academiametrics.com/"><img loading="lazy" width={242} height={360} src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Nosotros_59_0d368063a1_c27a409957.png?v=1659800763"  alt=""className="lazyload img hoverclas img-fluid"></img></a></Col>
        <Col id="saberMas2" sm={3}><a ><img loading="lazy" width={242} height={360} src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Nosotros_60_50943fd5a5_a5754f7875.png?v=1659800763" alt="" className="lazyload img hoverclas img-fluid"></img></a></Col>
         
          <Col sm={3}><a href="https://www.autodidactasdigitales.com/"><img loading="lazy" width={242} height={360} src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Nosotros_58_a9bc18b5c6_8e3d653c9c.png?v=1659800763" alt="" className="lazyload img hoverclas img-fluid"></img></a></Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionSaberMas;



