import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../global-styles/estilo.scss"

import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);
function SectionInstagram() {



  return (
    <div className="sct-insta1" style={{paddingTop:"40px",paddingBottom:"20px"}}>
      <div className="wbww" style={{ textAlign: "center" }}>
        <h2 className="tituloInsta" style={{fontSize:"53px", fontWeight:"700"}}>Síguenos en Instagram</h2>
        <p className="sct-Insta-parrf" style={{marginTop:"10px", fontSize:"20px", marginBottom:"30px"}}>Donde encontraras datos y tips del mundo digital</p>
      </div>
      <div class="powr-instagram-feed" id="332d75e4_1710251737"></div><script src="https://www.powr.io/powr.js?platform=html"></script>
      <div style={{textAlign:"center", marginTop:"20px"}} className="hoverclas2">
            <a
              className="texto-link2"
              href="https://www.instagram.com/agencialosnavegantes/?hl=es"
              
            >
              Ver nuestro Instagram	&gt; 
             
            </a>
            </div>
    </div>
  );
}

export default SectionInstagram;
