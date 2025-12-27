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
    <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/001.png?v=1691017879" />
    <Card.Body id="ccccc2" className="card-body-post" >
     <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>La Tercera</span>
      <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
      ¿Cómo hacer una campaña de marketing digital? | Agencia Los Navegantes
      </Card.Title>
    </Card.Body>
    </Card>
     
    
            </SwiperSlide>
    
            <SwiperSlide>
    
    
            <Card>
    <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/002.png?v=1691017879" />
    <Card.Body id="ccccc2" className="card-body-post" >
     <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Las Últimas Noticias</span>
      <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
      Fundadores de Agencia Los Navegantes cuentan cómo crearon su empresa. 
      </Card.Title>
    </Card.Body>
    </Card>
    
            </SwiperSlide>
            <SwiperSlide>
    
            <Card>
    <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/003.png?v=1691017879" />
    <Card.Body id="ccccc2" className="card-body-post" >
     <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>La Serena</span>
      <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
      Agencia Los Navegantes junto a Municipio ayudan a fortalecer las ventas online en las Pymes.
      </Card.Title>
    </Card.Body>
    </Card>
    
            </SwiperSlide>
            <SwiperSlide>
    
    
            <Card>
    <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/004.png?v=1691017879" />
    <Card.Body id="ccccc2" className="card-body-post" >
     <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>ElDía</span>
      <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
      Agencia Los Navegantes y Matías Villanueva en Diario el Día, La Serena.
      </Card.Title>
    </Card.Body>
    </Card>
     
    
            </SwiperSlide>
            <SwiperSlide>
    
    
    
            <Card>
    <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/005.png?v=1691017879" />
    <Card.Body id="ccccc2" className="card-body-post" >
     <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Vilma Nuñez</span>
      <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
      Matías Villanueva entrevista a Vilma Nuñez, experta en Marketing Digital.
      </Card.Title>
    </Card.Body>
    </Card>
    
              
           
    
            </SwiperSlide>
            <SwiperSlide>
            <Card>
    <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/006.png?v=1691017879" />
    <Card.Body id="ccccc2" className="card-body-post" >
     <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Red de Mentores UST</span>
      <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
      Cuáles son las claves para emprender en le mundo digital  | Matías Villanueva
      </Card.Title>
    </Card.Body>
    </Card>
           
    
            </SwiperSlide>
          </Swiper>
    
    
    <div className="clasene" ><a href="/prensa" className="qrsm">QUIERO SABER MÁS</a></div>
    
    </div>
  );
};

export default sliderprensa;