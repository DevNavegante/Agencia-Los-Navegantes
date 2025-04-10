import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../global-styles/estilo.scss"


import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Link } from "gatsby";

// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
const slider2 = () => {
  const response = UseHome();
  const Datos = response.allStrapiHome.nodes[0].home_seccion6;
  
  return (
    <div className="contenedor-Slider2" >




<div className="sld2mkt" >
<h1 className="tit-mkt2" >CLIENTES QUE CONFIAN EN NOSOTROS</h1> 
<p className="subtit-mkt2" >+60 marcas con facturacion anuales de 6, 7 y 8 cifras $USD</p> 
</div>

 
      <Container>
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
  
          <Col sm={8}>
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              modules={[Pagination]}
              autoplay={{
                delay: 500
            }}
              className="mySwiperSlider"
              breakpoints={{
                "360": {
                  "slidesPerView": 2,
                  "spaceBetween": 20
                },
                "400": {
                  "slidesPerView": 2,
                  "spaceBetween": 20
                },
                "640": {
                  "slidesPerView": 2,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 2,
                  "spaceBetween": 40
                },
                "1024": {
                  "slidesPerView": 4,
                }
              }}
              
            >
              {Datos.map((item, i) => (
                <SwiperSlide key={i}>
                  <a href={item.link1} key={i}>
                    <img loading="lazy" 
                      key={i}
                      className="imsld-fin img-slider-movil img-fluid"
                      width={203}
                      height={203}
                      src={item.imagen1[0].url}
                      alt=""
                    ></img>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default slider2;
