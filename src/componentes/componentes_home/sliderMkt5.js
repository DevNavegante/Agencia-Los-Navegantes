import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide} from "swiper/react";
import UseHome from "../../hooks/useHome";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../global-styles/estilo.scss"
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";


import { Link } from "gatsby";

// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
const slider5 = () => {
  const response = UseHome();
  const Datos = response.allStrapiHome.nodes[0].home_seccion6;
  
  return (
    <div  >


 
      <Container>
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
  
          <Col >
            <Swiper style={{paddingLeft:"20px", paddingRight:"20px"}} 
              slidesPerView={4}
              spaceBetween={10}
              navigation={true} modules={[Navigation, Pagination]}   
              autoplay={{
                delay: 1500
            }}
              className="mySwiperSlider"
              breakpoints={{
                "360": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "400": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "640": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 1,
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
                      height={150}
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

export default slider5;
