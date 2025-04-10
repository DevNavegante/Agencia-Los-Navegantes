import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../global-styles/estilo.scss"


import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";


// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
const sliderWooc = () => {


  
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
            src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/w6_min_0dcf766f04.png?v=1658862997"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  alt="principalpruebas"
            width="100%"
            src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/benow8_min_6a64cdb704.png?v=1658862997"
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
            width="100%"
            src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/over7_min_5e87216bad.png?v=1658862998"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/w5_min_d1e82750c1.png?v=1658862997"
                          
                   
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Correcciones_Landing_Ecommerce_10_1_ed7a36a56b.png?v=1658862997"
               
                  
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Correcciones_Landing_Ecommerce_09_103424cab2.png?v=1658862997"
               
                  
                  
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Correcciones_Landing_Ecommerce_08_f76df1dc6c.png?v=1658862997"
               
                  
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  alt="principalpruebas"
                  width="100%"
                  src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Correcciones_Landing_Ecommerce_07_9616b8b1dc.png?v=1658862997"
               
                  
                 
                  ></img>
 </SwiperSlide>
 

        
      </Swiper>

      </div>
    </div>
  );
};

export default sliderWooc;
