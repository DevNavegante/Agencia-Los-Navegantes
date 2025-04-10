import React from "react";
import Sct1 from "../componentes/componente_marketing/section_bannerm1"
import Sct2 from "../componentes/componente_marketing/section_m2"
import Sct3 from "../componentes/componente_marketing/section_m3"
import Sct4 from "../componentes/componente_marketing/section_m4"
import Sct5 from "../componentes/componente_marketing/section_m5"
import Sct6 from "../componentes/componente_marketing/section_m6"
import Footer from "../componentes/componente_marketing/footerd"
import Header from "../componentes/header"
import Seo from "../componentes/componente_marketing/seo"

// markup
function marketingdigital() {
  return (
    <React.Fragment >
         <Seo
              title="Agencia de Marketing Digital Chile | Meta Ads, Google Ads, eMail Marketing."
  
            ></Seo>
                        
      <Header ></Header>
      <Sct1 ></Sct1>
      <Sct2 ></Sct2>
      <Sct3></Sct3>
      <Sct4></Sct4>
      <Sct5></Sct5>
      <Sct6></Sct6>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default marketingdigital
