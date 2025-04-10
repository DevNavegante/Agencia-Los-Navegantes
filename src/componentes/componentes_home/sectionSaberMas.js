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
     <Col sm={3}><a href="https://www.academiametrics.com/"><img loading="lazy" width={242} height={360} src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-GRAFICASWEB-1.png?v=1710938098"  alt=""className="lazyload img hoverclas img-fluid"></img></a></Col>
        <Col id="saberMas2" sm={3}><a href="https://open.spotify.com/show/3UpMgCSvyBvTQOwVTTyIXN" ><img loading="lazy" width={242} height={360} src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Landing_Agencia_Nosotros_60_50943fd5a5_a5754f7875_1.webp?v=1719866958" alt="" className="lazyload img hoverclas img-fluid"></img></a></Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default sectionSaberMas;



