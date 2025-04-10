import React from "react";
import Slider from "../componentes/componente_ecommerce/section_banner"
import Sct2d from "../componentes/componente_ecommerce/section_d2"
import Sct3d from "../componentes/componente_ecommerce/section_d3"
import Sct4d from "../componentes/componente_ecommerce/section_d4"
import Sct5d from "../componentes/componente_ecommerce/section_d5"
import Sct6d from "../componentes/componente_ecommerce/section_d6"
import Footer from "../componentes/componente_ecommerce/footerd"
import Header from "../componentes/header"
import Seo from "../componentes/componente_ecommerce/seo"
import Helmet from "react-helmet"
// markup
function Ecommerce() {
 
  return (
    
    <div >
       <Seo
              title="Agencia de eCommerce: Shopify y Woocommerce | Los Navegantes"
  
            ></Seo>
      <Header ></Header>
      <Slider ></Slider>
      <Sct2d ></Sct2d>
      <Sct3d ></Sct3d>
      <Sct4d ></Sct4d>
      <Sct5d ></Sct5d>
      <Sct6d ></Sct6d>
      <Footer ></Footer>

     



    </div>
   
  );
};

export default Ecommerce;