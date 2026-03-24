import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../global-styles/estilo.scss"


import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import { Link } from "gatsby";

// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
const slidermkt4 = () => {



  
  return (
    <div  >
 <Container id="sldmkt4">
 
 <Swiper id="swiperMkt" navigation={true}   slidesPerView={1}
          modules={[Pagination]}
      
        centeredSlides={true}
     
        className="mySwiper swipp" >
        <SwiperSlide>  
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img
                  
                  loading="lazy"
                  alt="Agencia Los Navegantes"
                  width="100%"
                
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Landing_Agencia_Casos_MKT-14.png?v=1774363435"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  loading="lazy"
                  alt="Agencia Los Navegantes"
                  width="100%"
              
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Landing_Agencia_Casos_MKT-12.png?v=1774363396"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt="Agencia Los Navegantes"
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Landing_Agencia_Casos_MKT_-16.png?v=1774363397"
                    
                  ></img>
 </SwiperSlide>
      </Swiper>

</Container>
    </div>
  );
};

export default slidermkt4;
