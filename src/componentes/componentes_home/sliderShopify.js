import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
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
const sliderShopify = () => {
  const response = UseHome();
  const datos = response.allStrapiHome.nodes[0].home_seccion3[0];
  const imagen_iconos = datos.imagen_iconos;


  
  return (
    <div className="paddslidereviews"   >
<div className="revDiv"  >



 
 <Swiper  id="sliderShopify" navigation={true} modules={[Navigation]}   
              spaceBetween={70} autoplay={{
                delay: 2000
            }}
       
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "360": {
            "slidesPerView": 1,
            "spaceBetween": 60
          },
          "400": {
            "slidesPerView": 1,
            "spaceBetween": 60
          },
          "640": {
            "slidesPerView": 1,
            "spaceBetween": 60
          },
          "768": {
            "slidesPerView": 1,
            "spaceBetween": 70
          },
          "1024": {
            "slidesPerView": 4,
          }
        }}
      
        className="mySwiper" >
        <SwiperSlide>  
        <div >
            <img
                  
                  alt="principalpruebas"
            width="100%"
            src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654107528/w2_min_a7c15d0843.png"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  alt="principalpruebas"
            width="100%"
            src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654107528/w1_min_4b275c7190.png"
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
            width="100%"
            src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654107525/w4_min_c8f4307e30.png"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654107524/w3_min_576f5f3f88.png"
                          
                   
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654011765/Correcciones_Landing_Shopify_04_1_6c1ddc01fb.png"
               
                  
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968122/Correcciones_Landing_Shopify_05_1188334e60.png"
               
                  
                  
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968122/Correcciones_Landing_Shopify_06_b437f40686.png"
               
                  
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968122/Correcciones_Landing_03_301a023999.png"
               
                  
                 
                  ></img>
 </SwiperSlide>
 

        
      </Swiper>

      </div>
    </div>
  );
};

export default sliderShopify;
