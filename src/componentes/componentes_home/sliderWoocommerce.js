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
const sliderWooc = () => {
  const response = UseHome();
  const datos = response.allStrapiHome.nodes[0].home_seccion3[0];



  
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
            src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654107525/w6_min_0dcf766f04.png"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  alt="principalpruebas"
            width="100%"
            src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654107524/benow8_min_6a64cdb704.png"
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
            width="100%"
            src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654107524/over7_min_5e87216bad.png"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654107524/w5_min_d1e82750c1.png"
                          
                   
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654011765/Correcciones_Landing_Ecommerce_10_1_ed7a36a56b.png"
               
                  
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968447/Correcciones_Landing_Ecommerce_09_103424cab2.png"
               
                  
                  
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968447/Correcciones_Landing_Ecommerce_08_f76df1dc6c.png"
               
                  
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968447/Correcciones_Landing_Ecommerce_07_9616b8b1dc.png"
               
                  
                 
                  ></img>
 </SwiperSlide>
 

        
      </Swiper>

      </div>
    </div>
  );
};

export default sliderWooc;
