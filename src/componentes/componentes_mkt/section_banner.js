import React, { useState } from 'react';
import { Col, Row, Container, Button } from "react-bootstrap";
import UseMkt from "../../hooks/useMkt";
import "../global-styles/estilo.scss"
import "../../componentes/global-styles/layout"
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import {navigate} from 'gatsby';
import { init, sendForm } from 'emailjs-com';
function SectionBannerMkt() {


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
    <div className="fondo-nuevo inicioo">
      <Container className="contenedor-body">
      <Row id="rowSc1">
          <Col md={8}  >
          <h1 className="par-banner">AGENCIA DE MARKETING DIGITAL Y PERFORMANCE</h1>  
            <h4  className="par-banner2">Resolvemos tus problemas de ventas, escalamos tus resultados digitales y maximizamos tu retorno de inversion en internet.</h4>
            <h4  className="par-banner3">¿Conversamos sobre tu proyecto?</h4>
            <h4  className="par-banner4">Completa el formulario de contacto <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></h4>

         
          <Row >
          <Col className="center-cols">
      <img
      loading="lazy"
      width="100%"

          alt="principalpruebas"

  
        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652970123/Landing_Ecommerce_Banner1_dafaf89d4c.png"
      ></img>
      </Col>

          </Row >





          </Col>
          <Col md={4} >

          <Form id='contact-form-mkt' action="/gracias" onSubmit={handleSubmit(onSubmit)}  className="forone formulario-contacto"
                
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
                      <option  value="DesarrolloWebyEcommerce">Marketing Digital</option>
                      <option  value="Marketing Digital">Analitica y Performance</option>

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

export default SectionBannerMkt;
