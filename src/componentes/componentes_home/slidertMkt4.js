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
const slidermkt4 = () => {
  const response = UseHome();
  const datos = response.allStrapiHome.nodes[0].home_seccion3[0];
  const imagen_iconos = datos.imagen_iconos;


  
  return (
    <div  >
 <Container id="sldmkt4">
 
 <Swiper id="swiperMkt" navigation={true} modules={[Navigation]}   slidesPerView={1}
       
      
        centeredSlides={true}
     
        className="mySwiper swipp" >
        <SwiperSlide>  
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652975820/Landing_Ecommerce_Resultado_15_0330d4c833.png"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
              
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652975820/Landing_Ecommerce_Resultado_18_c9201e8ac4.png"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652975820/Landing_Ecommerce_Resultado_19_e0df00b6fe.png"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                    
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652975820/Landing_Ecommerce_Resultado_17_283782715a.png"
                   
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
               
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652975820/Landing_Ecommerce_Resultado_20_9cc468aae2.png"
               
                  
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                 
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652975820/Landing_Ecommerce_Resultado_20_9cc468aae2.png"
                  
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652975821/Landing_Ecommerce_Resultado_16_18803f9b45.png"
                
                 
                  ></img>
 </SwiperSlide>
        
      </Swiper>

</Container>
    </div>
  );
};

export default slidermkt4;
