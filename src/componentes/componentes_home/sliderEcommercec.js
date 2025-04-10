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
const sliderEcommerce = () => {
  const response = UseHome();
  const datos = response.allStrapiHome.nodes[0].home_seccion3[0];
  const imagen_iconos = datos.imagen_iconos;


  
  return (
    <div  >
 <Container>
 
 <Swiper navigation={true} modules={[Navigation, Pagination]}   slidesPerView={1}
       
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
     
        className="mySwiper swipp" >
        <SwiperSlide>  
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Casos_MKT_16_07cb80ad52.png?v=1659794195"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Casos_MKT_17_b6ebc4fa4f.png?v=1659794195"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Casos_MKT_12_722ca0c594.png?v=1659794195"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Casos_MKT_13_249b6087f2.png?v=1659794195"
                   
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Casos_MKT_14_cf04a9c7dd.png?v=1659794195"
               
                  
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload img img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Casos_MKT_18_5900deedd6.png?v=1659794195"
                  
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload img img-fluid"
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1651162382/Landing_Agencia_Casos_MKT_18_5900deedd6.png"
                
                 
                  ></img>
 </SwiperSlide>
        
      </Swiper>

</Container>
    </div>
  );
};

export default sliderEcommerce;
