import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../global-styles/estilo.scss"


import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";


// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
const slidermkt3 = () => {



  
  return (
    <div  >
 <Container>
 
 <Swiper id="swiperMkt" navigation={true}  slidesPerView={1}
       
 
        centeredSlides={true}
        modules={[Pagination]}
        className="mySwiper swipp" >
        <SwiperSlide>  
        
            <img
                  style={{paddingBottom:"20px", paddingRight: "10px"}}
                  loading="lazy"
                  alt=""
                  width="85%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/GOOGLE_PARTNER_MATIAS_1.png?v=1742588180"
                   

                  ></img>
 </SwiperSlide>
 <SwiperSlide> 
     
     
      <img
                  style={{paddingBottom:"20px", paddingRight: "10px"}}
                  loading="lazy"
                  alt=""
                  width="85%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/GOOGLE_PARTNER_MATIAS_3.png?v=1742588178"
                   
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px", paddingRight: "10px"}}
                  loading="lazy"
                  alt=""
                  width="85%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/KLAVIYO_8aad55de-21fc-4f1e-9dd3-a389b183ff13.png?v=1744292832"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px", paddingRight: "10px"}}
                  loading="lazy"
                  alt=""
                  width="85%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/1_15926fa9-324d-4913-9c06-643dffdf9515.jpg?v=1742847608"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px", paddingRight: "10px"}}
                  loading="lazy"
                  alt=""
                  width="85%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/2_a1356ede-1d9d-4ad5-be42-77be59d0b026.jpg?v=1742847608"
                    
                  ></img>
 </SwiperSlide>

 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px", paddingRight: "10px"}}
                  loading="lazy"
                  alt=""
                  width="85%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Landing_Ecommerce_Partner_29_04d4cab851.webp?v=1742905435"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px", paddingRight: "10px"}}
                  loading="lazy"
                  alt=""
                  width="85%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/3_51e64da5-5a98-43ef-9de6-be17bf0dc82d.jpg?v=1742847608"
                    
                  ></img>
 </SwiperSlide>
 
        
      </Swiper>

</Container>
    </div>
  );
};

export default slidermkt3;
