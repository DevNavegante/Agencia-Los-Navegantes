
import React from "react";

import {  Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../componentes/global-styles/estilo.scss"

import vidio from "../images/pantt.webp";







export const SectionVideo = (props) => {
  const [show, setShow] = React.useState(true);


  return (
    <div className="padd-padd" style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "40px", background: props.colorFondo }}>
      
    <div className="padd-padd" style={{ textAlign: "center", paddingTop: "40px", paddingBottom: "40px", background: props.colorFondo }}>
      <iframe className="lazyframe videoiframe2" width="900" height="500" src="https://player.vimeo.com/video/1012952509?badge=0&autopause=0&player_id=0&app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"  title="Agencia Los Navegantes 2024"></iframe>
    </div>

  </div>
   
  );
};

export default SectionVideo;

