import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../global-styles/estilo.scss"
import UseMkt from "../../hooks/useMkt";
import Slidermkt from "../componentes_home/slidedrD4";
import Example1 from "../componentes_desarrollo/acordiond"


function Seccion_d6() {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion3[0];
  const imagen = data.imagen_iconos;
  const titulo = data.titulo;
 
  return (
    <div  className="scd6">

<Row className="pc-for">
<Col style={{textAlign:"end"}} >

<img loading="lazy"  className=" img-fluid" alt="olas" width="70%"  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654020353/pc3_1_7daf39b0e9.png" ></img>


</Col>
<Col style={{display:"flex", alignItems:"center"}} >


<div className="pad-paf-d6" >
          <h1 className="parrafd6" >
¿Te sumas a nuestra tripulación?</h1>
          <p className="parrafd7" > Reunámonos a conversar sobre tu proyecto, los plazos de ejecución y los resultados que esperas.</p>
          <p className="parraf2d7" > Mejoremos tu presencia en internet desde hoy.</p>
           
<a
      className="boton-mkt8"
      href="#contact-form66"
        style={{

         
          
    
          textDecoration: "none",
        }}
      >
        ¡SÍ, CONVERSEMOS!
      </a>
          </div  >



</Col>



</Row>


<Row className="movil-for">
<Col style={{textAlign:"center"}} >

<img loading="lazy"  className=" img-fluid" alt="olas" width="70%"  src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1654020353/pc3_1_7daf39b0e9.png" ></img>


</Col>
<Col style={{display:"flex", alignItems:"center", justifyContent:"center"}} >


<div className="pad-paf-d6" >
          <h1 className="parrafd6" >
¿Te sumas a nuestra tripulación?</h1>
          <p className="parrafd7" > Reunámonos a conversar sobre tu proyecto, los plazos de ejecución y los resultados que esperas.</p>
          <p className="parraf2d7" > Mejoremos tu presencia en internet desde hoy.</p>
           

          </div  >



</Col>
<div  style={{display:"flex", justifyContent:"center"}} >
<a
      className="boton-mkt8"
        href="#contact-form66"
        style={{

         
          
    
          textDecoration: "none",
        }}
      >
        ¡SÍ, CONVERSEMOS!
      </a>
      </div  >
</Row>


    </div>
  );
}

export default Seccion_d6;
