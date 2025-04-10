import React, { useState } from 'react';
import { Col, Row, Container, Button } from "react-bootstrap";
import "../global-styles/estilo.scss"
import UseMkt from "../../hooks/useMkt";
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import {navigate} from 'gatsby';
import { init, sendForm } from 'emailjs-com';
function Seccion_mkt7() {
  const response = UseMkt();
  const data = response.allStrapiMkt.nodes[0].mkt_seccion3[0];
  const imagen = data.imagen_iconos;
  const titulo = data.titulo;
 
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
    <div className="ultimasSec" >


<Container>
        <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Col style={{display:"flex", justifyContent:"center"}}  sm={6} className="uno order-xs-12 order-md-1">
          <div  >
          <h1 className="parrf-noss" >¿Qué lograrás con nosotros?</h1>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Materializarás tu proyecto.</p>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Cumplirás tu meta comercial.</p>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Podrás alcanzar las metas que te propongas.</p>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Contarás con un equipo de soporte.</p>
          </div  >


          </Col>
          <Col  sm={6} className="dos rosros order-xs-1 order-md-2">
              
          <img
      loading="lazy"
          alt="principalpruebas"
          width="90%"

        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652987960/Landing_Ecommerce_Contactanos_99ede8cc9c.jpg"
      ></img>


          </Col>
        </Row>
      </Container>
      </div>

      <div className="ultimasec22">

      <Row
          className="giro justify-content-center"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
               <Col style={{display:"flex", justifyContent:"center"}}  sm={4} className="uno order-xs-12 order-md-1">
          <div  className="fonte" >
          <h1 className="parrf-tr" >¿Te sumas a nuestra tripulación?</h1>
          <p className="parrf-tr2">Reunámonos a conversar sobre tu proyecto, los plazos de ejecución y los resultados que esperas.</p>
          <p className="parrf-tr2">Mejoremos tu presencia en internet desde hoy.</p>

          <a href="#contact-form-saber"><p className="parrf-tr3">¡Si, llenar formulario!</p></a>

          <img
          className="fotos-note"
      loading="lazy"
          alt="principalpruebas"
          width="100%"

        src="https://res.cloudinary.com/agencia-web-refresh223/image/upload/v1652988522/Landing_Ecommerce_Collage_Notebook_53e61e3e2c.png"
      ></img>


          </div  >


          </Col>

          <Col  sm={4} className="dos order-xs-1 order-md-2">
      
          <div className="formularioultimasec"  >  
          <h3  className="titulo-formularios" >COMPLETA TUS DATOS, TE CONTACTAREMOS EN 24 HORAS HÁBILES</h3>
          <Form id='contact-form-saber' action="/gracias" onSubmit={handleSubmit(onSubmit)}  className="formulario-contacto"
                
                >
                  <input type='hidden' name='contact_number' value={contactNumber} />
                  <Form.Group className="mb-3">
    
                    <Form.Control name="user_name" required maxLength="30"  type="text" placeholder="Nombre" />
                   
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name="user_apellido" required maxLength="30" type="text" placeholder="Apellido" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name="user_empresa" required maxLength="20"  type="text" placeholder="Empresa" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      required maxLength="12"
                      name="user_telefono"
                      type="number"
                      placeholder="Número de celular. Ej: +56922222222"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      
                      name='user_email'
                      
                      type="email"
                      placeholder="Correo electrónico. Ej: example@empresa.com"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Text style={{ fontSize: "20px", color: "#FFF" }}>
                      Servicio a Cotizar
                   
                    </Form.Text>
               
                    <select name="user_select" class="form-control customDropdown">
           
                      <option value="Marketing Digital">Marketing Digital</option>
                      <option value="analiticayPerformance">Analitica y Performance</option>
    
                      </select>
              
    
     
    
      
  
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control name='message' required   placeholder="Mensaje" as="textarea" className="textareaa" rows={8} />
                  </Form.Group>
                  <div className="hoverclas2">
                  <Button
                 
                  id="btnContact"
                    type="submit"
                    style={{
                      fontSize:"18px",
                      background: "black",
                            width:"100%",
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
                </div  > 
          </Col>
        </Row>


      </div>



    </div>



  );
}

export default Seccion_mkt7;
