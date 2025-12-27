import React from "react";
import Header from "../componentes/header"
import Footer from "../componentes/footer"
import SectionInstagram from "../componentes/componente_marketing/seccion_instagram"
import SectionSaberMas from "../componentes/componente_marketing/seccion_saberM";
import SectionGracias from "../componentes/componente_marketing/sectionGracias";

function merci() {
    const colorFondo = "#031fff"

    return (
        <div>
            <Header></Header>
            <SectionGracias></SectionGracias>
            <SectionSaberMas></SectionSaberMas>
            <SectionInstagram></SectionInstagram>
            <Footer></Footer>
        </div>
    )
}

export default merci;
