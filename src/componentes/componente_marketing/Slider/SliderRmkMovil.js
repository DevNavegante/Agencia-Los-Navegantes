import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Link } from "gatsby";
import "../../global-styles/layout"

// import required moduless
import { Grid, Pagination, Navigation } from "swiper";

export default function App() {


  return (
    <>
<div  className="movil-for" style={{paddingTop:"30px"}} >
<div style={{marginTop:"30px"}}    >
<h1 className="subtituloSobrer" style={{ fontSize: "50px", fontWeight: "700", textAlign:"center" }}>Hemos apoyado a cientos de marcas</h1> 
<p style={{ fontSize: "17px", textAlign:"center", fontWeight: "300" }}>Trabajamos con más de 60 empresas activamente.</p> 
<p style={{marginTop:"-20px", fontSize: "17px", textAlign:"center", fontWeight: "300" }}>Hemos asesorado a +800 empresas en aumentar sus ventas online. </p> 

      </div>


      <Swiper id="swipgri" 
      navigation={true}
      slidesPerView={2}
      modules={[Grid, Pagination, Navigation]}
        grid={{
          rows: 2,
        }}
        spaceBetween={0}
        
        
        className="mySwiperllll"
      >
           <SwiperSlide>  
        <a href="https://ww2.banchileinversiones.cl/web/personas">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/001_banchile_min_e1591908278345_3da749569f.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide> 
 <a href="https://www.ccu.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/CCU_87adfe0222.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>

 



 
 <SwiperSlide>  
 <a href="https://www.blockstore.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Block_8aa8ef2b2e.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://depto51.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/008_depto51_min_e1591908321210_f70d184180.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.topwear.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES_Mesa_de_trabajo_1.png?v=1710789722"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.freemet.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/freemet_0377f1b84e.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>

 <SwiperSlide>  
 <a href="https://www.killstore.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/009_killstore_min_e1591908413192_3d7b872cee.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.7veinte.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/7veinte_2ddcadc92e.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>

 <SwiperSlide>  
 <a href="https://www.areadesign.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/AREA_DESING_fb46924c73.png?v=1658867053"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
 <a href="https://www.boazjoyas.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/boaz_a49b3e2bdc.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.bravaestampa.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/brava_Logo_b35150df62.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://buka.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/buka_0ba85ced15.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>



 <SwiperSlide>  
 <a href="https://www.cafecaribe.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/006_cafecaribe_min_e1591908462616_3fa9ee4d8d.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
 <a href="https://www.casachic.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/casachic_e359287d66.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="http://www.escueladecomercio.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Logos_clientes_02_e343f600ca.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://clubdelseguro.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960601/CLUB_DEL_SEGURO_a05b27fc91.png"
                   

                  ></img>
                  </a>
 </SwiperSlide>

 <SwiperSlide>  
 <a href="https://decoporti.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/deco_por_ti_48f74818c0.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://demarie.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/de_Marie_df9d1d7bc4.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 
 <SwiperSlide>  
 <a href="https://www.eliteperfumes.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/elite_ff917d54df.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>

 <SwiperSlide>  
  <a href="https://www.estacionnatural.cl/">
             <img
                   style={{paddingBottom:"20px"}}
                   loading="lazy"
                   alt=""
                   width="60%"
                    
                     src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/estacion_natural_dfe327899c.jpg?v=1658866602"
                    
 
                   ></img>
                   </a>
  </SwiperSlide> 
 
  <SwiperSlide>  
  <a href="https://www.forastero.life/">
             <img
                   style={{paddingBottom:"20px"}}
                   loading="lazy"
                   alt=""
                   width="60%"
                    
                     src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/forastero_6f5a456830.jpg?v=1658866602"
                    
 
                   ></img>
                   </a>
  </SwiperSlide>
  <SwiperSlide>  
  <a href="https://froens.cl/">
             <img
                   style={{paddingBottom:"20px"}}
                   loading="lazy"
                   alt=""
                   width="60%"
                    
                     src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/FROENS_b8810d83ae.png?v=1658866602"
                    
 
                   ></img>
                   </a>
  </SwiperSlide>
 
  <SwiperSlide>  
 <a href="https://www.joseherrera.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/herrera_e0b84bdb9c.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
  <SwiperSlide>  
 <a href="https://www.tiendakallfu.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/kallfu_54ce7b0584.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
  
 <SwiperSlide>  
 <a href="https://www.lineatre.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/LINEATRE_4255d65a14.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>  
 
 <SwiperSlide>  
 <a href="https://lovelust.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/lovelust_b70b6c52aa.jpg?v=1658866603"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://mashini.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/mashini2_2785ee6d0e.jpg?v=1658866603"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://microchile.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/MICROCHILE_efdca98cfd.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://naturaloe.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/NATURALOE_b41909a32b.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
 <a href="https://www.ngx.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/005_ngx_min_e1591908387139_d845a83107.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
  
 
 <SwiperSlide>  
 <a href="https://www.pagofacil.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/pagofacil_c6dee93db1.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide> 

 
  <SwiperSlide>  
 <a href="https://pichintun.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/pichintun_1c00bf7b6a.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>


 <SwiperSlide>  
 <a href="https://www.zooyork.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/004_zooyork_min_e1591908488675_cb2d951f5f.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 
 <SwiperSlide>  
 <a href="https://www.cascarafoods.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-06.png?v=1710790100"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
  
 <SwiperSlide>  
 <a href="https://www.agencialosnavegantes.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-09.png?v=1710790101"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://hype-lab.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-11.png?v=1710790100"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 
 <SwiperSlide>  
 <a href="https://indiachic.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-10.png?v=1710790101"
                   

                  ></img>
                  </a>
 </SwiperSlide> 

 <SwiperSlide>  
 <a href="https://getskedu.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-14.png?v=1710790100"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.awl.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-15.png?v=1710790100"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.freshbrand.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-18.png?v=1710790100"
                   

                  ></img>
                  </a>
 </SwiperSlide>



 {/* Mitad del bendito */}









 <SwiperSlide>  
        <a href="https://tienda.notco.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-22.png?v=1710790100"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://limonada.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/grupolimonada_f1f09e2eed.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
 <a href="https://www.billabong.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/billabong_1_57cfee603e.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>


 <SwiperSlide>  
 <a href="https://www.everlast.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/003_everlast_min_e1591908251232_47a7693b1c.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>

 <SwiperSlide>  
 <a href="https://www.gnomowear.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-02.png?v=1710789853"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://hellowine.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/007_hellowine_min_e1591908439272_70b60cc0a3.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.lounge.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-03.png?v=1710789908"
                   

                  ></img>
                  </a>
 </SwiperSlide>

 <SwiperSlide>  
 <a href="https://amoble.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/amoble_e7d43060bd.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>

 <SwiperSlide>  
 <a href="https://www.bombukids.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/bombukids_8e1c01b9b3.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://braintoys.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Brain_toys_815d709e7d.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>





 
 
 <SwiperSlide>  
 <a href="https://www.burton.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/burtonx_583007ca23.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.cadacosaensulugar.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/logo_99da5bbaff.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
 <a href="https://labarra.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/LA_BARRA_023b50c26d.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>  
 <SwiperSlide>  
 <a href="https://pergolux.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-05.png?v=1710789988"
                   

                  ></img>
                  </a>
 </SwiperSlide>  
 <SwiperSlide>  
 <a href="https://crossmountain.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/CROSSMOUNTAIN_d08aa36adb.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.danielmoksha.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/DANIEL_MOKSHA_dacd9814ef.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://discoverystore.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/DISCOVERY_d4912f298b.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://ecotiendanatural.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/Ecotienda_natural_f19c2a2c50.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
  <a href="https://etienne.cl/">
             <img
                   style={{paddingBottom:"20px"}}
                   loading="lazy"
                   alt=""
                   width="60%"
                    
                     src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/ETIENNE_92a6897ce7.png?v=1658866602"
                    
 
                   ></img>
                   </a>
  </SwiperSlide>
  
  <SwiperSlide>  
  <a href="https://familyshop.cl/">
             <img
                   style={{paddingBottom:"20px"}}
                   loading="lazy"
                   alt=""
                   width="60%"
                    
                     src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/family_shop_7e0d4784da.jpg?v=1658866602"
                    
 
                   ></img>
                   </a>
  </SwiperSlide>
  <SwiperSlide>  
 <a href="https://www.greenglass.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/GREEN_GLASS_0695368a79.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://galeriaimpresionarte.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/impresionarte_9ba7bf8648.jpg?v=1658866603"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.kenza.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/KENZA_18dedc4ef9.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://kwmarket.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/KW_3f9c62e04a.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>  
 <SwiperSlide>  
 <a href="https://ludovica.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/LUDOVICA_1680a8d275.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>  

 <SwiperSlide>  
 <a href="https://milurugs.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/MILU_RUGS_0d70b436a1.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://mizos.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/MIZOS_cff77fa254.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
  
 <SwiperSlide>  
 <a href="https://www.noajoyas.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/NOA_a0a0560f4a.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
 <a href="https://overdrive.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/overdrive_35d1923b89.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://profesorklocker.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/profesor_klocker_febb4142db.png?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://shop.soytendencia.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/soyte_aeba5cf439.jpg?v=1658866602"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://www.village.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/village_2d4d3303f5.jpg?v=1658866603"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://tiendaride.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-07.png?v=1710790101"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.nextsteps.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-08.png?v=1710790100"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
 <a href="https://www.macme.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-12.png?v=1710790100"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://amantanitienda.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-13.png?v=1710790100"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.calcetinesbacanes.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-16.png?v=1710790100"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://sheet.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-17.png?v=1710790100"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://rakuencosmeticacoreana.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/ALN-MARZO-SEM03-LOGOSCLIENTES-19.png?v=1710790101"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.agencialosnavegantes.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="60%"
                   
                    src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/bannercarrusel_e5048a8445.jpg?v=1658868592"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
      </Swiper>
      <div className=" slider-pad" style={{justifyContent:"center", display:"flex", textAlign: "center", paddingTop: "25px" }}>
          <h2 className="tit-movil" style={{ marrginTop:"20px", marginBottom:"20px", fontSize:"28px", fontWeight:"700", paddingLeft:"10px", paddingRight:"10px" }} >¿Quieres conocer nuestros casos de éxito?</h2>
 
        </div>
                 <div  className=" hoverclas2 movil-slider" style={{marginBottom:"30px", textAlign:"center", justifyContent:"center"}}>
          <Link to="#contact-form-saber"
           className="tit-slider-link"
          style={{
            
                color: "#031FFE",
                fontSize: "18px",
                fontWeight: "700",
                textDecoration: "none",
              }}>
            Solicita portafolio aquí
            &gt;
          </Link>
          </div></div>
    </>
  );
}
