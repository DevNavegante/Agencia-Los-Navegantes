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

import SectionSomoPartners from "../componentes/componentes_home/sectionSomoPartners"
import SectionSobreNosotros from "../componentes/componentes_home/sectionSobreNosotros"
import SectionSumate from "../componentes/componentes_home/sectionSumate"
import SeparadorOlasSirena from "../componentes/separadorOlasSirena"
import SectionSaberMas from "../componentes/componentes_home/sectionSaberMas";
import SectionInstagram from "../componentes/SectionInstagram"
import Slider from "../componentes/componentes_home/slider"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}


const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  const colorFondo= "#031fff"
  return (
    <React.Fragment>
      <Seo
              title="Agencia de Marketing Digital, eCommerce y Performance"
  
            ></Seo>
       <div
        className="image image-bl-post"
        style={{
          
                 
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
         
          backgroundColor: "#3b39ff",
          transition: "background 0.3s  borderRadius 0.3s",
          height: "650px",
          width: "100%",
        }}
      >
        <div className="row rowraw"
         
        >
          <div className="opacitBanner" >
          <h1 className="titulo-post7">WHOOPS!</h1> 
          <h3 className="subtituloBitacora" style={{ textAlign:"center", color: "#fff", fontSize: "44px",fontWeight:"700"}}>La página que estás buscando no se encuentra!</h3>
          <div style={{textAlign:"center"}} className="hoverclas2">
            <a className="link-woops" style={{fontWeight:"700", color: "#ff5a83",  fontSize: "35px"}} href="/"
              
            >
              
Ir al Home &gt; 
              
            </a>
            </div>
          </div>
        </div>
      </div>
      <Header colorFondo={colorFondo} />
      
      <SectionInstagram></SectionInstagram>
      <Footer />
    </React.Fragment>
  );
}

export default NotFoundPage
