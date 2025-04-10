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
                  alt=""
                  width="100%"
                
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655321749/Landing_Ecommerce_Resultado_15_b3fe37a542.png"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
              
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655321750/Landing_Ecommerce_Resultado_17_ff944b3f1d.png"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655321750/Landing_Ecommerce_Resultado_20_da7636d3b1.png"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                    
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655321750/Landing_Ecommerce_Resultado_16_08a538914c.png"
                   
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
               
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655321750/Landing_Ecommerce_Resultado_19_9a959984ac.png"
               
                  
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width="100%"
                 
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1655321750/Landing_Ecommerce_Resultado_18_b392c5c35c.png"
                  
                 
                  ></img>
 </SwiperSlide>

        
      </Swiper>

</Container>
    </div>
  );
};

export default slidermkt4;
