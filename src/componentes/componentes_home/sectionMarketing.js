import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
import "../global-styles/estilo.scss"
import Slidermkt from "../componentes_home/sliderMkt";


const sectionMarketing = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion3[0];
  const descripcion = data.descripcion;
  const descripcion2 = data.description2;
  const imagen_iconos = data.imagen_iconos;
  const sliderrr = data.slider_mkt;
  const asdsadad = data.pruebas_s;

  console.log( sliderrr );

  const Titulo = data.titulo;

  return (
    <div style={{ backgroundColor: "#280077"}}>
      <Container style={{paddingBottom:"20px"}} className="sc-refresh" id="contenedor-pc">
        <Row className="rowmt1" >
          <Col style={{ display:"flex", alignItems:"center" }} sm={5} className="order-xs-1 order-md-1">
            <div>
            <h2
              style={{
                lineHeight: "1em",
                fontWeight: "700",
                color: "#ED5682",
                fontSize: "45px",
              }}
            >
              {Titulo}
            </h2>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion}
            </p>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion2}
            </p>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {/* {contenido} */}
            </p>
            <div className="hoverclas2">
            <a
            
              href="https://marketing.agencialosnavegantes.cl/"
              className="texto-link99"
            >
              Descubre más aquí	&gt;
              
            </a>
            </div>
            </div>
          </Col>
          <Col  sm={7} className="order-xs-12 order-md-2">
            <Row >
            <Slidermkt></Slidermkt>
            </Row>
          </Col>
        </Row>

        <Row>
  
          <Col  className="order-xs-12 order-md-2">
            <Row style={{display:"none"}} >
              {imagen_iconos.map((item, i) => (
                <Col xs={3} md={3} sm={3} key={i} style={{textAlign:"center", marginTop:"20px", marginBottom:"40px"}}>
                  <img
                  
                  loading="lazy"
                  alt=""
                    key={i}
                    className="lazyload img img-fluid"
                    src={item.url}
                    width="70%"
                 
                  ></img>

                  
                </Col>
              ))}
            </Row>
            <Row  >
             
                <Col xs={3} md={3} sm={3} style={{textAlign:"center", marginTop:"20px", marginBottom:"40px"}}>
                  <img
                  loading="lazy"
                  alt="imgg"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia-72.png?v=1660746414"
                    width="70%"                
                  ></img>  
                </Col>
                <Col xs={3} md={3} sm={3} style={{textAlign:"center", marginTop:"20px", marginBottom:"40px"}}>
                  <img
                  loading="lazy"
                  alt="imgg"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_LogosADS.png?v=1660746413"
                    width="70%"                
                  ></img>  
                </Col>
                <Col xs={3} md={3} sm={3} style={{textAlign:"center", marginTop:"20px", marginBottom:"40px"}}>
                  <img
                  loading="lazy"
                  alt="imgg"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia-75.png?v=1660746413"
                    width="70%"                
                  ></img>  
                </Col>
                <Col xs={3} md={3} sm={3} style={{textAlign:"center", marginTop:"20px", marginBottom:"40px"}}>
                  <img
                  loading="lazy"
                  alt="imgg"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_MKT_24_46924ec09f.png?v=1659793031"
                    width="70%"                
                  ></img>  
                </Col>
                <Col xs={3} md={3} sm={3} style={{textAlign:"center", marginTop:"20px", marginBottom:"40px"}}>
                  <img
                  loading="lazy"
                  alt="imgg"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_MKT_21_062dff6490.png?v=1659793031"
                    width="70%"                
                  ></img>  
                </Col>
                <Col xs={3} md={3} sm={3} style={{textAlign:"center", marginTop:"20px", marginBottom:"40px"}}>
                  <img
                  loading="lazy"
                  alt="imgg"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_MKT_25_1b0c57c1a2.png?v=1659793031"
                    width="70%"                
                  ></img>  
                </Col>
                <Col xs={3} md={3} sm={3} style={{textAlign:"center", marginTop:"20px", marginBottom:"40px"}}>
                  <img
                  loading="lazy"
                  alt="imgg"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_MKT_22_0f342bba04.png?v=1659793031"
                    width="70%"                
                  ></img>  
                </Col>
                <Col xs={3} md={3} sm={3} style={{textAlign:"center", marginTop:"20px", marginBottom:"40px"}}>
                  <img
                  loading="lazy"
                  alt="imgg"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_MKT_26_f32c49a850.png?v=1659793031"
                    width="70%"                
                  ></img>  
                </Col>
     
            </Row>
          </Col>
        </Row>

  



      </Container>
        
              
      <Container className="movil-for" style={{padding:"20px"}} >
        <Row
          className="justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >

<Col sm={6} className="order-xs-1 order-md-2">
            <h2 className="tit-movil2"
              style={{
                lineHeight: "1.1em",
                fontWeight: "700",
                color: "#ED5682",
                fontSize: "42px ",
              }}
            >
              {Titulo}
            </h2>
            <p className="parrafos-movil"
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion}
            </p>
            <p className="parrafos-movil"
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {descripcion2}
            </p>
            <p
              style={{
                color: "#fff",
                textAlign: "justify",
                fontSize: "20px",
              }}
            >
              {/* {contenido} */}
            </p>
            <div style={{textAlign:"center"}} >
            <a
            
            href="https://marketing.agencialosnavegantes.cl/"
            className="texto-link99"
          >
            Descubre más aquí	&gt;
            
          </a>
            </div>
          </Col>    


          <Col style={{ marginTop:"40px" }}  sm={6} className="order-xs-12 order-md-1">
            <Row >
            <Slidermkt></Slidermkt>
            </Row>
           
          </Col>
    


          <Col  sm={6} className="order-xs-12 order-md-1">
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
         
                <Col style={{ display:"flex", justifyContent:"center" }} xs={6} md={6} sm={6} >
                  <img
                  alt=""
                  loading="lazy"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Landing_Agencia-72.png?v=1660763752"
                    width="70%" 
                  ></img>  
                </Col>
                <Col style={{ display:"flex", justifyContent:"center" }} xs={6} md={6} sm={6} >
                  <img
                  alt=""
                  loading="lazy"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_LogosADS.png?v=1660746413"
                    width="70%" 
                  ></img>  
                </Col>
                <Col style={{ display:"flex", justifyContent:"center" }} xs={6} md={6} sm={6} >
                  <img
                  alt=""
                  loading="lazy"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia-75.png?v=1660746413"
                    width="70%" 
                  ></img>  
                </Col>

                <Col style={{ display:"flex", justifyContent:"center" }} xs={6} md={6} sm={6} >
                  <img
                  alt=""
                  loading="lazy"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_MKT_24_46924ec09f.png?v=1659793031"
                    width="70%" 
                  ></img>  
                </Col>

                <Col style={{ display:"flex", justifyContent:"center" }} xs={6} md={6} sm={6} >
                  <img
                  alt=""
                  loading="lazy"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_MKT_21_062dff6490.png?v=1659793031"
                    width="70%" 
                  ></img>  
                </Col>

              
                <Col style={{ display:"flex", justifyContent:"center" }} xs={6} md={6} sm={6} >
                  <img
                  alt=""
                  loading="lazy"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_MKT_25_1b0c57c1a2.png?v=1659793031"
                    width="70%" 
                  ></img>  
                </Col>

                
                <Col style={{ display:"flex", justifyContent:"center" }} xs={6} md={6} sm={6} >
                  <img
                  alt=""
                  loading="lazy"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_MKT_22_0f342bba04.png?v=1659793031"
                    width="70%" 
                  ></img>  
                </Col>

                
                <Col style={{ display:"flex", justifyContent:"center" }} xs={6} md={6} sm={6} >
                  <img
                  alt=""
                  loading="lazy"
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Logos_MKT_26_f32c49a850.png?v=1659793031"
                    width="70%" 
                  ></img>  
                </Col>


          
            </Row>
          </Col>
   
        </Row>
  
      </Container>        



    </div>
  );
};

export default sectionMarketing;
