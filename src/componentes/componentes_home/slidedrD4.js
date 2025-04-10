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
const SliderD4 = () => {
  const response = UseHome();
  const datos = response.allStrapiHome.nodes[0].home_seccion3[0];
  const imagen_iconos = datos.imagen_iconos;


  
  return (
    <div  >
 <Container>
 <div className="sliderd4for"  >
 <Swiper id="swiperd4"   navigation={true}  
      centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
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
              spaceBetween: 20,
            },
          }}

        className="mySwiper" >
        <SwiperSlide>  
        
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968849/m1_b2ac4bda41.jpg"
                   

                  ></img>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968849/m2_73d3cfb087.jpg"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968849/m4_b7eb37a17f.jpg"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968849/m3_325cb29a91.jpg"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968846/m5_35cc9cde8d.jpg"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968846/m6_7686735583.jpg"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968846/m8_13fe42566e.jpg"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968846/m9_408532eb80.jpg"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968846/m7_76010f89b1.jpg"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968846/m10_72da685e6b.jpg"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968843/m14_43d0870acd.jpg"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968843/m13_3921382c7b.jpg"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968843/m15_7683686645.jpg"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968843/m12_be719e168d.jpg"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968843/m16_060917c585.jpg"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653968843/m11_8dd4bbddae.jpg"
                    
                  ></img>
 </SwiperSlide>
 
 
        
      </Swiper>
      </div  >
</Container>
    </div>
  );
};

export default SliderD4;