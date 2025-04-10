import React from "react";
import SeccionTri2 from "../componentes/componentes_tripulacion/seccion_tri2"
import Header from "../componentes/header"
import SeccionTri1 from "../componentes/componentes_tripulacion/seccion_tri1"
import Mv from "../componentes/mision/seccionmv"
import Vm from "../componentes/mision/seccionvm"
import Seo from "../componentes/seo";
import Footer from "../componentes/footer";
import SectionVideo from "../componentes/SectionVideo";
const mision = () => {
  const colorFondo = "#F9F9FA";
  const colorFondoHeader= "#031fff"

  return (
    <div>
       <Seo
              title="Tripulación de Diseñadores, Programadores y Marketers"
  
            ></Seo>
      <Header colorFondo={colorFondoHeader}></Header>
      <SeccionTri1></SeccionTri1>
      <Mv></Mv>
      <Vm></Vm>
      <SeccionTri2></SeccionTri2>
      
      <Footer></Footer>
    </div>
  );
};

export default mision;
