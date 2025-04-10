import React, { useState } from 'react';
import { Col, Row, Container, Button } from "react-bootstrap";
import UseMkt from "../../hooks/useMkt";
import "../global-styles/estilo.scss"
import "../../componentes/global-styles/layout"
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import {navigate} from 'gatsby';
import { init, sendForm } from 'emailjs-com';
function Seccion_bannerd1() {


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

  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion1[0];
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const gift = data.git_capitan[0].url;
 
  return (
    <div className="fondo-nuevo3 inicioo">
      <Container className="contenedor-body">
      <Row id="rowSc1">
      <Col md={1}  ></Col>
          <Col md={6}  >
          <h1 className="par-banner">Somos una Agencia Boutique con Cupos Limitados para Garantizar Resultados Excepcionales</h1>  
            <h4  className="par-banner2">Diseñamos y Desarrollamos Tiendas Online que te ayudan a <strong> vender más por internet</strong> </h4>
         


         
          <Row >
          <Col className="center-cols">
      <img
      loading="lazy"
      width="100%"
className="img-fluid"
          alt="principalpruebas"

  
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1653937334/img1_1_0a9752dc7b.png"
      ></img>
      </Col>

          </Row >





          </Col>
          <Col md={4} >

          <Form id='contact-form66' action="/gracias" onSubmit={handleSubmit(onSubmit)}  className="forone formulario-contacto"
                
                >
                  <h1 style={{color:"black", fontSize:"18px", marginBottom:"20px"}} >COMPLETA TUS DATOS, TE CONTACTAREMOS EN 24 HORAS HÁBILES</h1>
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
                    <Form.Text style={{ fontSize: "18px", color: "#9E9EA7" }}>
                      Elegir Servicio
                   
                    </Form.Text>
               
                    <select name="user_select" class="form-control customDropdown">
                      <option  value="DesarrolloWebyEcommerce">Desarrollo tu Ecommerce</option>
                      <option  value="Marketing Digital">Rediseñar tu tienda online</option>

                      </select>
              
    
     
    
      
  
                  </Form.Group>
            
         
                  <div className="hoverclas2">
                  <Button
                 
                  id="btnContact"
                    type="submit"
                    style={{
                      width:"100%",
                      fontSize:"18px",
                      background: "black ",
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
                  </div>
                </Form>
          </Col>
          <Col md={1} > </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Seccion_bannerd1;
