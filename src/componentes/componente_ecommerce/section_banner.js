import React, { useState } from 'react';
import { Col, Row, Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import {navigate} from 'gatsby';
import "../global-styles/estilo.scss"

import { init, sendForm } from 'emailjs-com';
init('user_ERlBBhqIOUeDDIcksWV35');
function Seccion_bannerd1() {


  const {  handleSubmit } = useForm();

  const [contactNumber, setContactNumber] = useState("000000");
  const [disable, setDisable] = React.useState(false);
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }
 
  const onSubmit = (data) => {
    const btncompra = document.getElementById('btnContact');
    btncompra.disabled = true; 
    generateContactNumber();
    sendForm('default_service', 'template_m974mai', '#contact-form66')
      .then(function(response) {   
        window.location.href = '/thanks';

      
   
        
   
     

    
        
      }, function(error) {
        console.log('FAILED...', error);
      });
      
    
  }


 
  return (
    <div className="fondo-nuevo3 inicioo">
      <Container className="contenedor-body">
      <Row id="rowSc1">
          <Col md={7}  >
          <h1 className="par-banner">Somos una Agencia Boutique con Cupos Limitados para Garantizar Resultados Excepcionales</h1>  
            <h4  className="par-banner2">Diseñamos y Desarrollamos Tiendas Online que te ayudan a <strong> vender más por internet</strong> </h4>
         


         
          <Row >
          <Col className="center-cols">
      <img
      loading="lazy"
      width="100%"
className="img-fluid"
          alt="principalpruebas"

  
        src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/img1_1_0a9752dc7b.png?v=1658860248"
      ></img>
      </Col>

          </Row >





          </Col>
          <Col md={5} >

          <Form id='contact-form66' action="/thanks" onSubmit={handleSubmit(onSubmit)}  className="forone formulario-contacto"
                
                >
                  <h1 style={{color:"black", fontSize:"18px", marginBottom:"20px"}} >COMPLETA TUS DATOS, EN MENOS DE 24 HORAS HÁBILES TE CONTACTAREMOS</h1>
                  <input type='hidden' name='contact_number' value={contactNumber} />
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      requerid
                      name='user_email'
                      minLength="4"                     
                      type="email"
                      placeholder="Correo electrónico. Ej: example@empresa.com"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
    
                    <Form.Control name="user_name" minLength="4"    required maxLength="30"  type="text" placeholder="Nombre" />
                   
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name="user_apellido" minLength="4"    required maxLength="30" type="text" placeholder="Apellido" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name="user_empresa" required minLength="4"    maxLength="20"  type="text" placeholder="Empresa" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      required maxLength="12"
                      name="user_telefono"
                      type="number"
                      minLength="4"   
                      placeholder="Número de celular. Ej: +56922222222"
                    />
                  </Form.Group>
              
                  <Form.Group className="mb-3">
                    <Form.Text style={{ fontSize: "18px", color: "#9E9EA7" }}>
                      Elegir Servicio
                   
                    </Form.Text>
               
                    <select name="user_select" class="form-control customDropdown">
                      <option  value="Desarrollo Web y Ecommerce">Desarrollo tu Ecommerce</option>
                      <option  value="Desarrollo Web y Ecommerce">Rediseñar tu tienda online</option>

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

        </Row>
      </Container>
    </div>
  );
}

export default Seccion_bannerd1;
