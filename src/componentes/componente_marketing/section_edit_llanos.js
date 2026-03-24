import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../global-styles/estilo.scss"
import SliderMmkt from "../componente_marketing/Slider/SliderRmkMovil"
import SliderFmkt from "../componente_marketing/Slider/sliderRmkt"
import SliderReviews from "../componente_marketing/Slider/sliderReviews"
function seccion_edit_llanos() {
  return (
    <div>
        <SliderFmkt></SliderFmkt>
        <SliderMmkt></SliderMmkt>
        <div style={{paddingTop:"40px", paddingBottom:"40px", paddingBottom:"40px", background:"#DEDCEC"}}>
            <SliderReviews id="slider-rew"></SliderReviews>
        </div>
    </div>
  );
}
export default seccion_edit_llanos;
