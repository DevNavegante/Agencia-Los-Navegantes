import React from "react";
import Header from "../componentes/header"
import Footer from "../componentes/footer"
import SectionInstagram from "../componentes/componente_marketing/seccion_instagram"
import SectionSaberMas from "../componentes/componentes_home/sectionSaberMas";
import SectionGracias from "../componentes/componente_contacto/SectionBannerGracias";

function gracias() {
    const colorFondo = "#031fff"

    return (
        <div>
            <Header colorFondo={colorFondo}></Header>
            <SectionGracias></SectionGracias>
            <SectionSaberMas></SectionSaberMas>
            <SectionInstagram></SectionInstagram>
            <Footer></Footer>
        </div>
    )
}

export default gracias;
