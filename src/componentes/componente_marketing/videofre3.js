
import React from "react";
import {  Button } from "react-bootstrap";
import "../global-styles/estilo.scss"
import vidio from "../../images/pantt.webp";







export const SectionVideo5 = (props) => {
  const [show, setShow] = React.useState(true);


  return (
    <div id="video2d" className="padd-padd" style={{ paddingTop: "40px", paddingBottom: "40px", background: props.colorFondo }}>


      <iframe  className="lazyframe videoiframe4"  src="https://player.vimeo.com/video/851098812" width="678" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<iframe className="lazyframe videoiframe1"  src="https://player.vimeo.com/video/851098812" width="450px" height="300" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>


      </div>
        
    
  );
};

export default SectionVideo5;


