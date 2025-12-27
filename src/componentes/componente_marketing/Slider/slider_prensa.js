import React from 'react';

import "../../global-styles/estilo.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import UsePrensa from "../../../hooks/usePrensa"
 
function sliderprensa() {

  const response = UsePrensa();
  const data = response.allStrapiPrensa.nodes[0].blog_prensa;
  
  return (
    <div className="contenedorSlidernuevo"  >
    <div style={{ marginBottom:"30px", textAlign:"center"}}>
    <h1 className="petitulo">Prensa y Entrevistas</h1>
    <p className="pepesub pc-for">Conoce más sobre nuestro trabajo a través de artículos de prensa, <br></br> entrevistas e invitaciones a múltiples canales de Youtube.</p>
    <p className="pepesub movil-for">Conoce más sobre nuestro trabajo a través de artículos de prensa, entrevistas e invitaciones a múltiples canales de Youtube.</p>
    
    </div>
    
    
    
    
    <Swiper id="swiperMkt76" navigation={true}
           
          
            
            modules={[Pagination]}
            className="mySwiper feropi"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 60,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 60,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
    
          >
            <SwiperSlide>
    
    
            <Card>
    <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/5.jpg?v=1690988192" />
    <Card.Body id="ccccc2" className="card-body-post" >
     <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>TV: La Tercera TV</span>
      <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
      ¿Cómo hacer una campaña de marketing digital? | Agencia Los Navegantes 
      </Card.Title>
    </Card.Body>
    </Card>
     
    
            </SwiperSlide>
    
            <SwiperSlide>
    
    
            <Card>
    <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/02_6d2a03b6-fbbf-46b2-82cc-fa3448e9880b.png?v=1691175304" />
    <Card.Body id="ccccc2" className="card-body-post" >
     <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Periódico: El Día</span>
      <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
      Agencia Los Navegantes y Matías Villanueva en Diario el Día, La Serena. 
      </Card.Title>
    </Card.Body>
    </Card>
    
            </SwiperSlide>
            <SwiperSlide>
    
            <Card>
    <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/2_29e4d9bf-7062-486d-b71c-71d82c5c226c.jpg?v=1690988192" />
    <Card.Body id="ccccc2" className="card-body-post" >
     <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Periódico: LUN</span>
      <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
      Fundadores de Agencia Los Navegantes cuentan cómo crearon su empresa. 
      </Card.Title>
    </Card.Body>
    </Card>
    
            </SwiperSlide>
            <SwiperSlide>
    
    
            <Card>
    <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/9.jpg?v=1690988192" />
    <Card.Body id="ccccc2" className="card-body-post" >
     <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>YouTube: Vilma Nuñez</span>
      <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
      Matías Villanueva entrevista a Vilma Nuñez, experta en Marketing Digital.
      </Card.Title>
    </Card.Body>
    </Card>
     
    
            </SwiperSlide>
            <SwiperSlide>
    
    
    
            <Card>
    <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/17.jpg?v=1690988192" />
    <Card.Body id="ccccc2" className="card-body-post" >
     <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Corfo: Pymes en Línea</span>
      <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
      Cómo re-activar tu Pyme con Marketing Digital | Agencia Los Navegantes
      </Card.Title>
    </Card.Body>
    </Card>
    
              
           
    
            </SwiperSlide>
            <SwiperSlide>
            <Card>
    <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/03_bfec0799-8c84-44c7-a2be-5c1e21445c4e.jpg?v=1690988192" />
    <Card.Body id="ccccc2" className="card-body-post" >
     <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Academia: Platzi.com</span>
      <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
      Fundador de Agencia Los Navegantes, Matías Villanueva es invitado a Platzi.
      </Card.Title>
    </Card.Body>
    </Card>
           
    
            </SwiperSlide>
          </Swiper>
    
    
    <div className="clasene" ><a href="/prensa" className="qrsm">QUIERO LEER MÁS</a></div>
    
    </div>
  );
};

export default sliderprensa;
