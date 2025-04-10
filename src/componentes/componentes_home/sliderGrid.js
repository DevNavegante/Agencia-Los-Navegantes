import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import UseHome from "../../hooks/useHome";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Link } from "gatsby";
import "../global-styles/estilo.scss"

// import required modules
import { Grid, Pagination, Navigation } from "swiper";

export default function App() {
    const response = UseHome();
    const Datos = response.allStrapiHome.nodes[0].home_seccion6;



  return (
    <>
<div  className="movil-for" >
<div   style={{marginTop:"30px"}}  >
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
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626721/001_banchile_min_e1591908278345_3da749569f.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide> 
 <a href="https://www.ccu.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960590/CCU_87adfe0222.png"
                   

                  ></img>
                  </a>
 </SwiperSlide>



 
 <SwiperSlide>  
 <a href="https://www.blockstore.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626832/Block_8aa8ef2b2e.png"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626749/008_depto51_min_e1591908321210_f70d184180.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.freemet.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626905/freemet_0377f1b84e.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
 <a href="https://hellowine.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626975/007_hellowine_min_e1591908439272_70b60cc0a3.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://amoble.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627111/amoble_e7d43060bd.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
 <a href="https://www.areadesign.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960544/AREA_DESING_fb46924c73.png"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://braintoys.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627319/Brain_toys_815d709e7d.jpg"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627280/brava_Logo_b35150df62.jpg"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627215/logo_99da5bbaff.png"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626984/006_cafecaribe_min_e1591908462616_3fa9ee4d8d.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
 <a href="http://www.escueladecomercio.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626877/Logos_clientes_02_e343f600ca.jpg"
                   

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
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627388/deco_por_ti_48f74818c0.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://demarie.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627333/de_Marie_df9d1d7bc4.jpg"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626915/elite_ff917d54df.jpg"
                   

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
                    
                     src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627404/estacion_natural_dfe327899c.jpg"
                    
 
                   ></img>
                   </a>
  </SwiperSlide> 
 
  <SwiperSlide>  
  <a href="https://www.forastero.life/">
             <img
                   style={{paddingBottom:"20px"}}
                   loading="lazy"
                   alt=""
                   width="100%"
                    
                     src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627197/forastero_6f5a456830.jpg"
                    
 
                   ></img>
                   </a>
  </SwiperSlide>
  <SwiperSlide>  
  <a href="https://froens.cl/">
             <img
                   style={{paddingBottom:"20px"}}
                   loading="lazy"
                   alt=""
                   width="100%"
                    
                     src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960704/FROENS_b8810d83ae.png"
                    
 
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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627144/herrera_e0b84bdb9c.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
  <SwiperSlide>  
 <a href="https://www.tiendakallfu.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960729/kallfu_54ce7b0584.png"
                   

                  ></img>
                  </a>
 </SwiperSlide>
  
 <SwiperSlide>  
 <a href="https://www.lineatre.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960779/LINEATRE_4255d65a14.png"
                   

                  ></img>
                  </a>
 </SwiperSlide>  
 
 <SwiperSlide>  
 <a href="https://lovelust.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627263/lovelust_b70b6c52aa.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://mashini.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627155/mashini2_2785ee6d0e.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://microchile.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960830/MICROCHILE_efdca98cfd.png"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://naturaloe.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960853/NATURALOE_b41909a32b.png"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626938/005_ngx_min_e1591908387139_d845a83107.jpg"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626927/pagofacil_c6dee93db1.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide> 

 
  <SwiperSlide>  
 <a href="https://pichintun.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627064/pichintun_1c00bf7b6a.jpg"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626818/village_2d4d3303f5.jpg"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626759/grupolimonada_f1f09e2eed.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
 <a href="https://www.billabong.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626858/billabong_1_57cfee603e.jpg"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626733/003_everlast_min_e1591908251232_47a7693b1c.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://fabrics.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626998/fabrics2_4a206b5de7.jpg"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626964/009_killstore_min_e1591908413192_3d7b872cee.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.7veinte.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626888/7veinte_2ddcadc92e.jpg"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627296/boaz_a49b3e2bdc.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.bombukids.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960565/bombukids_8e1c01b9b3.png"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
 <a href="https://buka.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960577/buka_0ba85ced15.png"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627055/burtonx_583007ca23.jpg"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627309/casachic_e359287d66.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://labarra.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960765/LA_BARRA_023b50c26d.png"
                   

                  ></img>
                  </a>
 </SwiperSlide>  
 <SwiperSlide>  
 <a href="https://crossmountain.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960614/CROSSMOUNTAIN_d08aa36adb.png"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.danielmoksha.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960625/DANIEL_MOKSHA_dacd9814ef.png"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://discoverystore.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960639/DISCOVERY_d4912f298b.png"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://ecotiendanatural.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960652/Ecotienda_natural_f19c2a2c50.png"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
  <a href="https://etienne.cl/">
             <img
                   style={{paddingBottom:"20px"}}
                   loading="lazy"
                   alt=""
                   width="100%"
                    
                     src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960670/ETIENNE_92a6897ce7.png"
                    
 
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
                    
                     src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627425/family_shop_7e0d4784da.jpg"
                    
 
                   ></img>
                   </a>
  </SwiperSlide>
  <SwiperSlide>  
 <a href="https://www.greenglass.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960716/GREEN_GLASS_0695368a79.png"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627016/impresionarte_9ba7bf8648.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://www.kenza.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960752/KENZA_18dedc4ef9.png"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627481/KW_3f9c62e04a.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>  
 <SwiperSlide>  
 <a href="https://ludovica.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960801/LUDOVICA_1680a8d275.png"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960813/MACME_6b8c6395c2.png"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
 <SwiperSlide>  
 <a href="https://milurugs.com/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960841/MILU_RUGS_0d70b436a1.png"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://mizos.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627495/MIZOS_cff77fa254.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
  
 <SwiperSlide>  
 <a href="https://www.noajoyas.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1656960864/NOA_a0a0560f4a.png"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 
 <SwiperSlide>  
 <a href="https://overdrive.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627132/overdrive_35d1923b89.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide>
 <SwiperSlide>  
 <a href="https://profesorklocker.cl/">
            <img
                  style={{paddingBottom:"20px"}}
                  loading="lazy"
                  alt=""
                  width="100%"
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646626774/profesor_klocker_febb4142db.png"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627082/soyte_aeba5cf439.jpg"
                   

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
                   
                    src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1646627524/bannercarrusel_e5048a8445.jpg"
                   

                  ></img>
                  </a>
 </SwiperSlide> 
      </Swiper>
      <div className=" slider-pad" style={{justifyContent:"center", display:"flex", textAlign: "center", paddingTop: "25px" }}>
          <h2 className="tit-movil" style={{ marrginTop:"20px", marginBottom:"20px", fontSize:"28px", fontWeight:"700", paddingLeft:"10px", paddingRight:"10px" }} >¿Quieres conocer nuestros casos de éxito?</h2>
 
        </div>
                 <div  className=" hoverclas2 movil-slider" style={{marginBottom:"30px", textAlign:"center", justifyContent:"center"}}>
          <Link to="/contacto"
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
