
import React from "react";
import '../global-styles/estilo.scss'
import { Col, Row, Container } from "react-bootstrap";
import UsePosts from "../../hooks/usePosts";
function sectionBlog() {
  const response = UsePosts();
  const data = response.allStrapiPost.nodes;



  return (
    <div className="sec-blg-3" style={{padding:"30px"}}>
      <div style={{ lineHeight:"1em", textAlign: "center" }}>
        <h1 className="tituloBitacora" style={{ lineHeight:"1em", fontSize:"50px", fontWeight:"700" }} >Ingresa a la Bitácora</h1>
        <br></br>
        <p style={{ lineHeight:"1em", fontSize:"20px", marginBottom:"30px"}} >Nuestro Blog de Contenidos Digitales</p>
      </div>
      <Container style={{  maxWidth: "1140px" }}>
        <Row className="bitacora-pc">
            <Col sm={4} >
              <div style={{ padding: "10px" }}>
                <div style={{ border: "1px solid rgba(0,0,0,.125)" }}>
                  <img
                  loading="lazy"
                    width={358}
                    height={201}
                    className="lazyload img card-img-top"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Bitacora_62_5e09d99cd5.jpg?v=1659800900"
                    alt="Card  cap"
                  ></img>
                
                  <div className="card-bit" >
                  
                    <h5 className="card-title" style={{ color: "#2046F5" }}>
                    <a  href="https://www.agencialosnavegantes.cl/las-mejores-herramientas-para-vender-mas-en-tu-e-commerce">
                      Las mejores herramientas para vender más en tu e-commerce
                      </a>
                    </h5>
                    
                    <p className="card-text" >
                    En Agencia Los Navegantes te revelamos las mejores herramientas que te ayudarán a vender más en tu e-commerce. Sigue leyendo y toma nota. Tener un sitio web ahora es sencillo, es comprar un dominio y un servidor para ello. Aquí el reto es conseguir vender tu producto. Por eso, en este blog te traemos las herramientas para que vendas más en tu e-commerce. Conoce las 10 herramientas que te harán vender más en tu e-commerce a continuación: 1. Aplica un buen Marketing de Contenidos El contenido es lo más importante en el mundo digital. Los motores de búsqueda premian la...
                    </p>
                    <div className="hoverclas3">
            <a
              className="texto-link4"
              href="https://www.agencialosnavegantes.cl/las-mejores-herramientas-para-vender-mas-en-tu-e-commerce"
              
            >
              Leer más &gt;
             
            </a>
            </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={4} >
              <div style={{ padding: "10px" }}>
                <div style={{ border: "1px solid rgba(0,0,0,.125)" }}>
                  <img
                  loading="lazy"
                    width={358}
                    height={201}
                    className="lazyload img card-img-top"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Bitacora_63_0b5e50f0b7.jpg?v=1659800872"
                    alt="Card  cap"
                  ></img>
                
                  <div className="card-bit" >
                  
                    <h5 className="card-title" style={{ color: "#2046F5" }}>
                    <a  href="https://www.agencialosnavegantes.cl/en-este-articulo-te-explicamos-como-construir-relaciones-mas-cercanas-con-tus-clientes-utilizando-el-linked-in-sales-navigator">
                    LinkedIn Sales Navigator: ¿qué es y para qué sirve?
                      </a>
                    </h5>
                    
                    <p className="card-text" >
                    En este artículo te explicamos cómo construir relaciones más cercanas con tus clientes utilizando el LinkedIn Sales Navigator Sabemos que llegaste a este artículo en búsqueda de información sobre una de las más recientes herramientas presentadas por LinkedIn, el LinkedIn Sales Navigator. Y es que encontrarnos frente a estrategias de marketing que no dan resultados...</p>
                    <div className="hoverclas3">
            <a
              className="texto-link4"
              href="https://www.agencialosnavegantes.cl/en-este-articulo-te-explicamos-como-construir-relaciones-mas-cercanas-con-tus-clientes-utilizando-el-linked-in-sales-navigator"
              
            >
              Leer más &gt;
             
            </a>
            </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={4} >
              <div style={{ padding: "10px" }}>
                <div style={{ border: "1px solid rgba(0,0,0,.125)" }}>
                  <img
                  loading="lazy"
                    width={358}
                    height={201}
                    className="lazyload img card-img-top"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Bitacora_64_35fb2afa15.jpg?v=1659800966"
                    alt="Card  cap"
                  ></img>
                
                  <div className="card-bit" >
                  
                    <h5 className="card-title" style={{ color: "#2046F5" }}>
                    <a  href="https://www.agencialosnavegantes.cl/7-claves-para-hacer-teletrabajo-desde-casa-de-manera-exitosa">
                    7 Claves para hacer teletrabajo desde casa de manera exitosa
                      </a>
                    </h5>
                    
                    <p className="card-text" >
                    Por más de 5 años hemos trabajado bajo la modalidad de home office en la Agencia Los Navegantes y hoy en día, la pandemia del coronavirus obligó a muchas empresas del mundo a trabajar de esta manera. Por ello, desde nuestra experiencia compartimos contigo 7 claves para hacer teletrabajo desde casa y morir en el intento. Trabajar online desde la distancia exige
                    </p>
                    <div className="hoverclas3">
            <a
              className="texto-link4"
              href="https://www.agencialosnavegantes.cl/7-claves-para-hacer-teletrabajo-desde-casa-de-manera-exitosa"
              
            >
              Leer más &gt;
             
            </a>
            </div>
                  </div>
                </div>
              </div>
            </Col>
  
        </Row>

        <Row className="bitacora-movil">
 
            <Col sm={4} >
              <div style={{  padding: "10px" }}>
                <div style={{ border: "1px solid rgba(0,0,0,.125)" }}>
                  <img
                  loading="lazy"
                    width={358}
                    height={201}
                    className="lazyload img card-img-top"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Bitacora_62_5e09d99cd5.jpg?v=1659800900"
                    alt="Card  cap"
                  ></img>
                  <div className="card-body" style={{textAlign:"justify"}}>
                    <h5 className="card-title" style={{ color: "#2046F5" }}>
                    <a  href="https://www.agencialosnavegantes.cl/las-mejores-herramientas-para-vender-mas-en-tu-e-commerce">
                    Las mejores herramientas para vender más en tu e-commerce
                      </a>
                    </h5>
                    <p className="card-text" >
                    En Agencia Los Navegantes te revelamos las mejores herramientas que te ayudarán a vender más en tu e-commerce. Sigue leyendo y toma nota. Tener un sitio web ahora es sencillo, es comprar un dominio y un servidor para ello. Aquí el reto es conseguir vender tu producto. Por eso, en este blog te traemos las herramientas para que vendas más en tu e-commerce. Conoce las 10 herramientas que te harán vender más en tu e-commerce a continuación: 1. Aplica un buen Marketing de Contenidos El contenido es lo más importante en el mundo digital. Los motores de búsqueda premian la...
                    
                    </p>
                    <a href="https://www.agencialosnavegantes.cl/las-mejores-herramientas-para-vender-mas-en-tu-e-commerce" className="estiloLink3" style={{ color:"#ff5a83",}}>
                    Leer más &gt;
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={4} >
              <div style={{  padding: "10px" }}>
                <div style={{ border: "1px solid rgba(0,0,0,.125)" }}>
                  <img
                  loading="lazy"
                    width={358}
                    height={201}
                    className="lazyload img card-img-top"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Bitacora_63_0b5e50f0b7.jpg?v=1659800872"
                    alt="Card  cap"
                  ></img>
                  <div className="card-body" style={{textAlign:"justify"}}>
                    <h5 className="card-title" style={{ color: "#2046F5" }}>
                    <a  href="https://www.agencialosnavegantes.cl/en-este-articulo-te-explicamos-como-construir-relaciones-mas-cercanas-con-tus-clientes-utilizando-el-linked-in-sales-navigator">
                    LinkedIn Sales Navigator: ¿qué es y para qué sirve?
                      </a>
                    </h5>
                    <p className="card-text" >
                    En este artículo te explicamos cómo construir relaciones más cercanas con tus clientes utilizando el LinkedIn Sales Navigator Sabemos que llegaste a este artículo en búsqueda de información sobre una de las más recientes herramientas presentadas por LinkedIn, el LinkedIn Sales Navigator. Y es que encontrarnos frente a estrategias de marketing que no dan resultados...
                    </p>
                    <a href="https://www.agencialosnavegantes.cl/en-este-articulo-te-explicamos-como-construir-relaciones-mas-cercanas-con-tus-clientes-utilizando-el-linked-in-sales-navigator" className="estiloLink3" style={{ color:"#ff5a83",}}>
                    Leer más &gt;
                    </a>
                  </div>
                </div>
              </div>
            </Col>
        </Row>
      </Container>
      <div className="btmmm" style={{display:"flex", justifyContent:"center"}} >
      <div style={{marginTop:"20px"}} className="hoverclas2">
            <a
              className="texto-link2"
              href="/blog/page"
              
            >
              Ver mas contenido &gt; 
             
            </a>
            </div>
      </div>
    </div>
  );
}

export default sectionBlog;
