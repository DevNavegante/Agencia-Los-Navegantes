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
const slideranalitica = () => {
  const response = UseHome();
  const datos = response.allStrapiHome.nodes[0].home_seccion3[0];
  const imagen_iconos = datos.imagen_iconos;


  
  return (
    <div  >
 <Container>
 
 <Swiper id="swiperAnalitica" navigation={true} modules={[Navigation,Pagination]}   slidesPerView={1}
       
  
        centeredSlides={true}
        modules={[Pagination]}
        className="mySwiper swipp" >
        <SwiperSlide>  
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Casos_Analitica_27_50c75ce72a.png?v=1659793912"
                   

                  ></img></div>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Casos_Analitica_31_abc62121c5.png?v=1659793912"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Casos_Analitica_28_dd68343bc3.png?v=1659793912"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Casos_Analitica_30_9bfa0f2fcd.png?v=1659793912"
                   
                 
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Casos_Analitica_32_d326d79566.png?v=1659793913"
               
                  
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  <img
                  
                  loading="lazy"
                  alt=""
                  width={800}
                  height={800}
                    className="lazyload mmimm img-fluid"
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Landing_Agencia_Casos_Analitica_29_e619d864d8.png?v=1659793912"
                  
                 
                  ></img>
 </SwiperSlide>
 
        
      </Swiper>

</Container>
    </div>
  );
};

export default slideranalitica;
