import { Link } from "gatsby";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseHome from "../../hooks/useHome";
function sectionSomoPartners() {
  const response = UseHome();
  const data = response.allStrapiHome.nodes[0].home_seccion8[0]
  return (
    <div className="cont-mov" style={{ padding:"40px", background: "#031FFF"}}>
      <Container className="sc-refresh" >
        <Row >
          <Col style={{display:"flex", alignItems:"center"}} sm={6}>
          <div >
            <h1   style={{ textAlign:"left", lineHeight:"1em", fontSize:"45px",fontWeight:"700",color:"#fff"}} className="  encabezado">{data.titulo}</h1>
          
            <p className="descPartners1" style={{ fontSize:"20px", textAlign: "justify" ,color:"#fff",}}>{data.descripcion1}</p>
            <p className="descPartners1" style={{ fontSize:"20px", textAlign: "justify" ,color:"#fff",}}>{data.descripcion2}</p>
            </div>
          </Col>
          <Col style={{display:"flex", alignItems:"center", justifyContent:"center"}} >
           <div style={{textAlign:"center"}}>
            <img
              loading="lazy"
            width={400} height={170}
              style={{ textAlign: "center" }}
              className="lazyload img img-fluid imgPart"
              src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/482854311_18492184567051898_8026937054854018734_n.jpg?v=1742833515"
              alt=""
            ></img>
            <div className="hoverclas2 insignia"  >
            <Link  to="https://www.google.com/partners/agency?id=4329839845" className="hoverclas2" style={{color:"#fff",fontSize:"18px"}}>Ver Insignia » </Link>
            </div>
            </div>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default sectionSomoPartners;
