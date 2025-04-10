
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
import "../global-styles/estilo.scss"
const sectionBannerHome = () => {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccionBanner[0];

  
  const Imagenurl = data.linkbanner1;
  const descripcion = data.desccription;
  const texto_pregunta = data.texto_pregunta;

  console.log( Imagenurl, "aca " );


  let Lista = [
    <li className="link-stil" key="id1">
      <img
      loading="lazy"
      style={{paddingTop:"1%"}}
          alt="principalpruebas"
        key="id1"
        className="lazyload img iconban "
        src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/check_m6hzc3.webp?v=1659792472"
      ></img>
      <p className="pBanner">
      Configuramos tu embudo de ventas en menos de 30 días. </p>
    </li>,
    <li className="link-stil" key="id2">
      <img
      loading="lazy"
      alt=""
        key="id2"
        className="lazyload img iconban "
        src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/check_m6hzc3.webp?v=1659792472"
      ></img>
 <p className="pBanner">Buscamos maximizar tu facturación en menos de 90 días.</p>    </li>,
    <li className="lazyload img link-stil" key="id3">
      <img
      loading="lazy"
          alt=""
        key="id3"
        className="lazyload img iconban "
        src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/check_m6hzc3.webp?v=1659792472"
      ></img>
       <p className="pBanner">Escalamos tus resultados en un semestre.</p>
    </li>,
    <li className="link-stil" key="id4">
      <img
      loading="lazy"
          alt=""
        key="id4"
        className="lazyload img iconban"
        src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/check_m6hzc3.webp?v=1659792472"
      ></img>
     <p className="pBanner">Convertimos este año, en <strong>tu mejor año.</strong></p> 
    </li>,
  ];
  return (
    <div className="bnHomee" style={{ paddingTop:"150px", backgroundColor: "blue" }}>
      <Container className="contenedor-body">
        <Row
          className="justify-content-center"
          id="columnas"
          style={{ alignItems: "center" }}
        >
          <Col sm={6} style={{ color: "#fff" }}>
            <h1 style={{fontWeight:"700", lineHeight:"1em", fontSize:"50px", color: "#fff" }} className="encabezado">
            ¿Estás buscando aumentar tus ventas online? 
        
            </h1>
            <p style={{fontSize:"20px"}}>Llegaste a la Agencia de Marketing Digital correcta.</p>

            
            <ul
            className="list-list"
              style={{
                fontSize: "21px",
                listStyle: "none",
              }}
            >
              {Lista}
            </ul>
            <p className="list-list3" >Únete a +800 empresas de Latam que han confiado en nosotros.</p>
            <h3 className="list-list2" >¿Llevemos tus resultados al próximo nivel?</h3>
            
            <div className="hoverclas2 link-co" >
            

            <a
              href="/#agencia-marketing" 
               className="btn-clss" style={{ fontSize:"22px", fontWeight:"700", color: "#fff", textDecoration: "none" }}
            >
              
             <span  ><i style={{fontSize:"14px", marginRight:"3px"}}  className=" bi bi-chevron-down"></i>Conócenos &gt;</span>
            </a>
            </div>
          </Col>
          <Col sm={6} >
            <img loading="lazy"  className="col-s6-baner lazyload img img-fluid imagenBannerHome" width={549} height={309} alt="Agencia Los Navegantes" src={Imagenurl}></img>

           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default sectionBannerHome;


