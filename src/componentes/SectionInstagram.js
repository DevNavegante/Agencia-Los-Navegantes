import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../componentes/global-styles/layout";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";


// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);

function SectionInstagram() {



  return (
    <div className="sct-insta1" style={{paddingTop:"40px",paddingBottom:"20px"}}>
      <div className="wbww" style={{ textAlign: "center" }}>
        <h2 className="tituloInsta" style={{fontSize:"53px", fontWeight:"700"}}>Síguenos en Instagram</h2>
        <p className="sct-Insta-parrf" style={{marginTop:"10px", fontSize:"20px", marginBottom:"30px"}}>Donde encontraras datos y tips del mundo digital</p>
      </div>
     <div className="feropi2">
     <Swiper

        slidesPerView={5}
        spaceBetween={20}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <a href="https://www.instagram.com/p/DG5nR1hxcCd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank"><img className="fforpir" style={{paddingBottom:"20px"}} loading="lazy" alt=""  width="100%"              
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/GOOGLE_PARTNER_PREMIER_2025_DE_MV.jpg?v=1742843887"></img></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.instagram.com/reel/C1IfZxYuvI2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank"><img className="fforpir"  style={{paddingBottom:"20px"}} loading="lazy" alt=""  width="100%"              
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/NOTCO.jpg?v=1742843887"></img></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.instagram.com/p/C4G6KekxG6u/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank"><img className="fforpir" style={{paddingBottom:"20px"}} loading="lazy" alt=""  width="100%"              
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/POST_DE_JIMENA.jpg?v=1742843887"></img></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.instagram.com/reel/C8ah3PgRbks/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank"><img  className="fforpir" style={{paddingBottom:"20px"}} loading="lazy" alt=""  width="100%"              
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/POST_DE_DANIELA.jpg?v=1742843887"></img></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://www.instagram.com/reel/DHeBB_VR08A/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank"><img className="fforpir" style={{paddingBottom:"20px"}} loading="lazy" alt=""  width="100%"              
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/POST_DE_GOOGLE_PARTNER_COLLAGE_NUEVO.jpg?v=1742843887"></img></a>
        </SwiperSlide>
      </Swiper></div>
      <div style={{textAlign:"center", background:"white", paddingTop:"40px", paddingBottom:"40px", position:"relative", zIndex:"99999"}} >
            <a
              className="texto-link101"
              href="https://www.instagram.com/agencialosnavegantes/?hl=es"
              
            >
              Síguenos en Instagram	&gt; 
             
            </a>
            </div>
    </div>
  );
}

export default SectionInstagram;
