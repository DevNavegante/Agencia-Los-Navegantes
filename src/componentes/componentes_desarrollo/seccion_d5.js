import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import { Col, Row, Container, Button } from "react-bootstrap";

import "../global-styles/estilo.scss"
import UseMkt from "../../hooks/useMkt";
import Slidermkt from "../componentes_home/slidedrD4";
import Example1 from "../componentes_desarrollo/acordiond"
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import {navigate} from 'gatsby';
import { init, sendForm } from 'emailjs-com';
import Video from "../SectionVideo2"


function Seccion_d5() {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion3[0];
  const imagen = data.imagen_iconos;
  const titulo = data.titulo;
  const [isOpen, setOpen] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();

  const [contactNumber, setContactNumber] = useState("000000");
  
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const onSubmit = (data) => {

    generateContactNumber();
    sendForm('default_service', 'template_m974mai', '#contact-form')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);

        navigate('/gracias/');

    
        
      }, function(error) {
        console.log('FAILED...', error);
      });
      
    
  }



  return (
    <div  >
<Container className="seccion_d5x">
<Row >
<Col md={2}></Col >
   <Col md={4} >
   
          <Form id='contact-form3' action="/gracias" onSubmit={handleSubmit(onSubmit)}  className="forone5 formulario-contacto"
                
                ><h1 style={{color:"white", fontSize:"18px", marginBottom:"20px"}} >COMPLETA TUS DATOS, TE CONTACTAREMOS EN 24 HORAS HÁBILES</h1>
                  <input type='hidden' name='contact_number' value={contactNumber} />
                  
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      
                      name='user_email'
                      
                      type="email"
                      placeholder="Correo electrónico. Ej: example@empresa.com"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
    
                    <Form.Control name="user_name" required maxLength="30"  type="text" placeholder="Nombre" />
                   
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name="user_apellido" required maxLength="30" type="text" placeholder="Apellido" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      required maxLength="12"
                      name="user_telefono"
                      type="number"
                      placeholder="Número de celular. Ej: +56922222222"
                    />
                  </Form.Group>
              
                  <Form.Group className="mb-3">
                    <Form.Text style={{ fontSize: "18px", color: "#FFF" }}>
                      Elegir Servicio
                   
                    </Form.Text>
               
                    <select name="user_select" class="form-control customDropdown">
                      <option style={{color:"white"}} value="DesarrolloWebyEcommerce">Desarrollo tu Ecommerce</option>
                      <option style={{color:"white"}} value="Marketing Digital">Rediseñar tu tienda online</option>

                      </select>
              
    
     
    
      
  
                  </Form.Group>
            
                 
                  <Button
                 
                  id="btnContact5"
                    type="submit"
                    style={{
                      width:"100%",
                      fontSize:"18px",
                      background: "#D0FB87 ",
                      borderColor: "transparent",
                      color: "white",
                    }}
                  >
                    Enviar Mensaje{" "}
                    <i
                      className="bi bi-arrow-right"
                      style={{ marginTop:"2px", paddingLeft: "10px", position:"absolute" }}
                    ></i>
                  </Button>
                
                </Form>
          </Col>
<Col md={4} ><Example1 /></Col >
<Col md={2}></Col >
</Row >
</Container>


<div className="scd5-2">
<Row>


<Col md={6} className="video-d5 uno order-xs-12 order-md-1">
          <div  >
          <h1 className="parrf-noss" >¿Qué lograrás con nosotros?</h1>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Materializarás tu proyecto.</p>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Cumplirás tu meta comercial.</p>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Podrás alcanzar las metas que te propongas.</p>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Contarás con un equipo de soporte.</p>

          <p className=" pc-for parrf-video">No perderás<br/> tiempo ni dinero.</p>           

          </div  >


          </Col>
          <Col style={{ display:"flex", alignItems:"center" }} md={6} className="dos order-xs-1 order-md-2">
              
          
          <Video>  </Video>

          </Col>
  
</Row >
<div className="movil-for tiemoses" ><p className="tiempocss" >No perderás<br/>tiempo ni dinero.</p></div  >
</div>


    </div>
  );
}

export default Seccion_d5;
