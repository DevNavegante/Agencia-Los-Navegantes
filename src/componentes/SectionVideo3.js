
import React from "react";

import {  Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../componentes/global-styles/estilo.scss"
import vidio from "../images/pantt.webp";







export const SectionVideo3 = (props) => {
  const [show, setShow] = React.useState(true);


  return (
    <div className="padd-padd" style={{ textAlign:"center",  paddingTop: "40px", paddingBottom: "40px", background: props.colorFondo }}>

      <div className="paseoG"><h1 className="tbia">PASEO FIN DE AÑO</h1>
      <h3>Nos fuimos junto a nuestro equipo a Cascadas Las Animas a celebrar un año lleno de crecimiento y éxito.</h3>
      </div>
      
      <iframe className="lazyframe videoiframe2" width="778" height="400" src="https://player.vimeo.com/video/783934764?h=f936b1d278&title=0&byline=0&portrait=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     

   
    </div>
  );
};

export default SectionVideo3;





