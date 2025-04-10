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
const slidermkt3 = () => {
  const response = UseHome();
  const datos = response.allStrapiHome.nodes[0].home_seccion3[0];
  const imagen_iconos = datos.imagen_iconos;


  
  return (
    <div  >
 <Container>
 
 <Swiper id="swiperMkt" navigation={true}  slidesPerView={1}
       

        centeredSlides={true}

        className="mySwiper swipp" >
        <SwiperSlide>  
        
            <img
                  style={{paddingBottom:"20px", paddingRight: "10px"}}
                  loading="lazy"
                  alt=""
                  width="85%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652982834/Landing_Ecommerce_Partner_28_7d6d4956ae.png"
                   

                  ></img>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  style={{paddingBottom:"20px", paddingRight: "10px"}}
                  loading="lazy"
                  alt=""
                  width="85%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652982834/Landing_Ecommerce_Partner_30_52bc8a8445.png"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px", paddingRight: "10px"}}
                  loading="lazy"
                  alt=""
                  width="85%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652982834/Landing_Ecommerce_Partner_29_04d4cab851.png"
                    
                  ></img>
 </SwiperSlide>


 
        
      </Swiper>

</Container>
    </div>
  );
};

export default slidermkt3;
