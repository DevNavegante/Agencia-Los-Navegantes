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
const SliderD5 = () => {



  
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
        <a href="https://ww2.banchileinversiones.cl/web/personas">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo1_aa8ed9266c.png?v=1658860993"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide> 
 <a href="https://www.everlast.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo2_6508088c93.png?v=1658861021"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide> 
 <a href="https://tienda.notco.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-22_729b2757-e456-472b-96f6-df8758540e4b.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://depto51.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo3_e7f04bcbd1.png?v=1658861037"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://limonada.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo4_323456e6ab.png?v=1658861076"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.village.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo44_a5b95858b6.png?v=1658861204"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.billabong.cl">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo6_954211a192.png?v=1658861276"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
     <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo7_2d5a9b8fe9.png?v=1658861343"
                    
                  ></img>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.blockstore.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo8_0dfaf7076a.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.topwear.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-1.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://freemet.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo9_1ba706016d.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.gnomowear.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-2.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.lounge.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-3.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide>
  <SwiperSlide>  
 <a href="https://www.amoble.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo23_2e262e5c78.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://pergolux.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-5.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.eliteperfumes.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo10_0e79cff970.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.pagofacil.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo11_1d6443c5d0.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.ngx.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo12_456f807984.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.killstore.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo13_fe3760b463.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.hellohello.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo14_49e9ebd026.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.cafecaribe.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo15_b2fea81809.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.fabrics.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo16_176563d162.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://galeriaimpresionarte.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo17_932ec6f248.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.burton.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo18_5334992968.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.pichintun.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo19_0adccb58f0.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://shop.soytendencia.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo20_872f3f0d72.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.zooyork.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo21_6fc47dc7a1.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>

 <SwiperSlide>  
 <a href="https://www.cascarafoods.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-6.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://tiendaride.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-7.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://www.nextsteps.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-8.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://www.agencialosnavegantes.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-9.png?v=1710797307"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://indiachic.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-10_8819ffba-dc58-49f4-9c53-c5cc52e94e1a.png?v=1710797307"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://hype-lab.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-11_5a4041ff-c2b2-4fdd-a7a0-0c96a65f0e03.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://www.macme.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-12_a1bbefb5-7eca-42bb-a5b6-a8c3fd4cb25c.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://amantanitienda.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-13_d297f102-3033-4a73-a116-738fb3ffb87e.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://getskedu.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-14_197a5ab5-21ae-4312-a531-0bd0c4b9e218.png?v=1710797307"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.awl.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-15_5e0c3c6c-7850-4796-9a5d-2102b86e3e79.png?v=1710797307"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.calcetinesbacanes.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-16_588842ae-1309-4314-9329-7e09f4801ac3.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://sheet.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-17_eb926d42-3577-471c-91cb-f36e2a9425d7.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.freshbrand.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-18_e2cb512c-4dba-49ec-9287-0ba301334acc.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://rakuencosmeticacoreana.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-19_194d3e31-4f26-4145-8097-2fa50c8dda09.png?v=1710797306"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://clubdelseguro.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo22_e0333ad461.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>

 <SwiperSlide>  
 <a href="https://www.overdrive.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo24_7dd88e29de.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.joseherrera.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo25_12b6b672d2.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.mashini.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo26_99adbe13c4.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://tendenciasgourmet.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo27_d2d2b73330.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.erizosstore.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo28_86093601cb.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.forastero.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo29_139a4847b3.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.cadacosaensulugar.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo30_c7f180ebb1.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.lovelust.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo31_17fc118bd2.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.bravaestampa.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo32_aa3bc8247c.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.boazjoyas.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo33_d2138f06d0.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.casachic.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo34_8aea2cf70a.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.braintoys.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo35_387214ff81.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.demarie.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo36_421da04ca3.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.decoporti.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo37_d0942e13c4.png?v=1658861346"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.estacionnatural.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo38_43ef2379a1.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://familyshop.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo39_9278778bf9.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://fondodeculturaeconomica.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo40_cda21127e1.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://kwmarket.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo41_b93e499b85.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.mizos.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo42_8310c7086b.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.sioux.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo43_4250734532.png?v=1658861343"
                   

                  ></img>
                  </a>
 </SwiperSlide>   
 
      </Swiper>
      </div  >

    </div>
  );
};

export default SliderD5;