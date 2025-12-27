import React from "react";

import "../componentes/global-styles/layout"
import Header from "../componentes/header"
import Footer from "../componentes/footer"
import SectionBannerHome from "../componentes/componentes_home/sectionBannerHome"
import SectionAgencia from "../componentes/componentes_home/sectionAgencia"
import Sectionolas from "../componentes/sectionolas"
import SectionMarketing from "../componentes/componentes_home/sectionMarketing"
import SectionAnaliticaPerformance from "../componentes/componentes_home/sectionAnaliticaPerformance"
import SectionDesarrollo from "../componentes/componentes_home/sectionDesarrollo"
import Seo from "../componentes/seo"
import SectionBlog from "../componentes/componentes_home/sectionBlog"
import Video from "../componentes/SectionVideo"
import "../componentes/global-styles/estilo.scss"
import SectionSomoPartners from "../componentes/componentes_home/sectionSomoPartners"
import SectionSobreNosotros from "../componentes/componentes_home/sectionSobreNosotros"
import SectionSumate from "../componentes/componentes_home/sectionSumate"
import SectionSaberMas from "../componentes/componentes_home/sectionSaberMas";
import SectionInstagram from "../componentes/SectionInstagram"
import Slider from "../componentes/componentes_home/slider"
import SectionContacto from "../componentes/SectionContacto"
import SliderViews from "../componentes/componentes_home/sliderReviews"
import Slider2 from "../componentes/componentes_home/SliderRmkMovil"
import Videopa from "../componentes/SectionVideo"
import Slidervideos from "../componentes/componentes_home/slidertesti"
import SliderPrensa from "../componentes/componente_marketing/Slider/slider_prensa"
const IndexPage = () => {
  const colorFondo= "#031fff"


  return (
    
    <React.Fragment >
      <Seo
              title="Agencia de Marketing Digital, eCommerce y Performance"
              description="Desde el 2014 impulsamos la venta online de cientos de empresas. ¿Quieres ser parte de uno de nuestros casos de éxito? ¡El momento es ahora! Contáctanos aquí."
            ></Seo>

 




      <body> 
       
      <Header colorFondo={colorFondo} />
      <SectionBannerHome></SectionBannerHome>
      <Sectionolas></Sectionolas>
     
      <SectionAgencia ></SectionAgencia>
    
      <SectionMarketing></SectionMarketing>
      <SectionAnaliticaPerformance></SectionAnaliticaPerformance>
      <SectionDesarrollo></SectionDesarrollo>
      
      <Slider id="slider-movil" ></Slider>
      <Slider2 id="slider-movil" ></Slider2>
      
      
      <SectionSobreNosotros></SectionSobreNosotros>
      <Video></Video>
      <SectionSomoPartners></SectionSomoPartners>

      <SliderViews></SliderViews>
 

      <SectionSumate></SectionSumate>
  
      <SectionContacto></SectionContacto>
   
      <SectionSaberMas></SectionSaberMas>
      <SectionBlog></SectionBlog>
      <Videopa></Videopa>
      <SliderPrensa></SliderPrensa>
      <SectionInstagram></SectionInstagram>
      <Footer />
      </body> 
    </React.Fragment>
   
  );
};

export default IndexPage;
