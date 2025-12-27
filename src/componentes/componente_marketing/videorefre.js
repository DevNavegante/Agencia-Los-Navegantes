
import React from "react";
import {  Button } from "react-bootstrap";
import "../global-styles/estilo.scss"
import vidio from "../../images/pantt.webp";







export const SectionVideo4 = (props) => {
  const [show, setShow] = React.useState(true);


  return (

        <div style={{display:"flex", justifyContent:"center"}}>

      <iframe  className="lazyframe videoiframe4"  src="https://player.vimeo.com/video/1068240355" width="678" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<iframe className="lazyframe videoiframe1"  src="https://player.vimeo.com/video/1068240355" width="450" height="300" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>


      </div>
        
   
  );
};

export default SectionVideo4;


