import React, { useState } from 'react';
import { Col, Row, Container, Button } from "react-bootstrap";

import "../global-styles/estilo.scss"

import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import {navigate} from 'gatsby';
import { init, sendForm } from 'emailjs-com';
init('user_ERlBBhqIOUeDDIcksWV35');
function SectionBannerMkt() {


  const { handleSubmit } = useForm();

  const [contactNumber, setContactNumber] = useState("000000");
  
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const onSubmit = (data) => {
    const btncompra = document.getElementById('btnContact8');
    btncompra.disabled = true; 
    generateContactNumber();
    sendForm('default_service', 'template_m974mai', '#contact-form-mkt')
      .then(function(response) {
        window.location.href = '/merci';
    
        
      }, function(error) {
        console.log('FAILED...', error);
      });
      
    
  }

  return (
    <div className="fondo-nuevo inicioo">
      <Container className="contenedor-body">
      <Row id="rowSc1">
          <Col md={8}  >
          <h1 className="par-banner-black">AGENCIA DE MARKETING DIGITAL Y PERFORMANCE</h1>  
            <h4  className="par-banner2">Resolvemos tus problemas de ventas, escalamos tus resultados digitales y maximizamos tu retorno de inversion en internet.</h4>
           

         
          <Row >
          <Col className="center-cols">
      <img
      loading="lazy"
      width="100%"

          alt="principalpruebas"

  
        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Recurso_WEB_2.webp?v=1744292634"
      ></img>
      </Col>

          </Row >





          </Col>
          <Col md={4} >
          <h4  className="par-banner3">¿Conversamos sobre tu proyecto?</h4>
            <h4  className="par-banner4">Completa el formulario de contacto </h4>
          <Form id='contact-form-mkt' action="/gracias" onSubmit={handleSubmit(onSubmit)}  className="forone formulario-contacto"
                
                >
                  <h1 style={{color:"black", fontSize:"18px", marginBottom:"20px"}} >COMPLETA TUS DATOS, EN MENOS DE 24 HORAS HÁBILES TE CONTACTAREMOS</h1>
                  <input type='hidden' name='contact_number' value={contactNumber} />
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      
                      required
                      name='user_email'
                      minLength="4"
                      type="email"
                      placeholder="Correo electrónico. Ej: example@empresa.com"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
    
                    <Form.Control name="user_name" required minLength="4" maxLength="30"  type="text" placeholder="Nombre" />
                   
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name="user_apellido" required minLength="4" maxLength="30" type="text" placeholder="Apellido" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name="user_empresa" required minLength="4" maxLength="20"  type="text" placeholder="Empresa" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      required maxLength="12"
                      minLength="4"
                      name="user_telefono"
                      type="number"
                      placeholder="Número de celular. Ej: +56922222222"
                    />
                  </Form.Group>
              
                  <Form.Group className="mb-3">
                    <Form.Text style={{ fontSize: "14px", color: "#9E9EA7" }}>
                    ¿Cuánto presupuesto mensual dispones?

                   
                    </Form.Text>
               
                    <select name="user_select" class="form-control customDropdown">
                      <option  value="Menos de $2500 USD">Menos de $2500 USD</option>
                      <option  value="Entre $2.500 y $5.000 USD">Entre $2.500 y $5.000 USD</option>
                      <option  value="Entre $5.000 y $10.000 USD">Entre $5.000 y $10.000 USD</option>
                      <option  value="Más de $10.000 USD">Más de $10.000 USD</option>

                      </select>
              
    
     
    
      
  
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Text style={{ fontSize: "14px", color: "#9E9EA7" }}>
                    ¿Cual es tu Venta Mensual Total (sumatoria entre online y offline)?

                   
                    </Form.Text>
               
                    <select name="user_select2" class="form-control customDropdown">
                      <option  value="Menos de $10.000 USD">Menos de $10.000 USD</option>
                      <option  value="Entre $10.000 y $30.000 USD">Entre $10.000 y $30.000 USD</option>
                      <option  value="Entre $30.000 y $75.000 USD">Entre $30.000 y $75.000 USD</option>
                      <option  value="Más de $75.000 USD">Más de $75.000 USD</option>

                      </select>
              
    
     
    
      
  
                  </Form.Group>
            
         
                  <div className="hoverclas2">
                  <Button
                 
                  id="btnContact8"
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
        </Row>
      </Container>
    </div>
  );
}

export default SectionBannerMkt;
