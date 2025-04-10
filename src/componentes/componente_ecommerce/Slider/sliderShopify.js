import React from "react";

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
const sliderShopify = () => {


  
  return (
    <div className="paddslidereviews"   >
<div className="revDiv"  >



 
 <Swiper  id="sliderShopify" navigation={true}   
              spaceBetween={70} 
              modules={[Pagination]}
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
            src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/w2_min_a7c15d0843.png?v=1658862997"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  alt="principalpruebas"
            width="100%"
            src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/w1_min_4b275c7190.png?v=1658862997"
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
            width="100%"
            src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/w4_min_c8f4307e30.png?v=1658862997"
                    
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
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Correcciones_Landing_Shopify_04_1_6c1ddc01fb.png?v=1658862997"
               
                  
                  
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Correcciones_Landing_Shopify_05_1188334e60.png?v=1658862997"
               
                  
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Correcciones_Landing_Shopify_06_b437f40686.png?v=1658862997"
               
                  
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Correcciones_Landing_03_301a023999.png?v=1658862997"
               
                  
                  ></img>
 </SwiperSlide>

        
      </Swiper>

      </div>
    </div>
  );
};

export default sliderShopify;
