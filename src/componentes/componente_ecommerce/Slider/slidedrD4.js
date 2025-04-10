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
const SliderD4 = () => {



  
  return (
    <div  >

 <div className="sliderd4for"  >
 <Swiper id="swiperd4"   navigation={true}  

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 70,
            },
          }}

        className="mySwiper" >
        <SwiperSlide>  
        
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m1_b2ac4bda41.jpg?v=1658863477"
                   

                  ></img>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m2_73d3cfb087.jpg?v=1658863478"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m3_325cb29a91.jpg?v=1658863478"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m4_b7eb37a17f.jpg?v=1658863478"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m5_35cc9cde8d.jpg?v=1658863478"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m6_7686735583.jpg?v=1658863478"
                    
                  ></img>
 </SwiperSlide>

 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m7_76010f89b1.jpg?v=1658863478"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m8_13fe42566e.jpg?v=1658863478"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m9_408532eb80.jpg?v=1658863478"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m10_72da685e6b.jpg?v=1658863478"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m11_8dd4bbddae.jpg?v=1658863478"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m12_be719e168d.jpg?v=1658863478"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m13_3921382c7b.jpg?v=1658863478"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m14_43d0870acd.jpg?v=1658863478"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m15_7683686645.jpg?v=1658863478"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/m16_060917c585.jpg?v=1658863478"
                    
                  ></img>
 </SwiperSlide>
 
 
        
      </Swiper>
      </div  >

    </div>
  );
};

export default SliderD4;