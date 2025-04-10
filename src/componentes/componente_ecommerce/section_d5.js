import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { Col, Row, Container, Button, Card } from "react-bootstrap";
import SliderPrensa from "../componente_marketing/Slider/slider_prensa"
import "../global-styles/estilo.scss"

import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import {navigate} from 'gatsby';
import { init, sendForm } from 'emailjs-com';
init('user_ERlBBhqIOUeDDIcksWV35');

function Seccion_d5() {
 
  const [isOpen, setOpen] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();

  const [contactNumber, setContactNumber] = useState("000000");
  
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const onSubmit = (data) => {
    const btncompra = document.getElementById('btnContact5');
    btncompra.disabled = true; 
    generateContactNumber();
    sendForm('default_service', 'template_m974mai', '#contact-form3')
      .then(function(response) {
        window.location.href = '/thanks';

    
        
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
   
          <Form id='contact-form3' action="/thanks" onSubmit={handleSubmit(onSubmit)}  className="forone5 formulario-contacto"
                
                ><h1 style={{color:"white", fontSize:"18px", marginBottom:"20px", textAlign:"left"}} >COMPLETA TUS DATOS, EN MENOS DE 24 HORAS HÁBILES TE CONTACTAREMOS</h1>
                  <input type='hidden' name='contact_number' value={contactNumber} />
                  
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      
                      name='user_email'
                      requerid
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
                    <Form.Control name="user_empresa" minLength="4"    required maxLength="20"  type="text" placeholder="Empresa" />
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
                    <Form.Text style={{ fontSize: "18px", color: "#FFF" }}>
                      Elegir Servicio
                   
                    </Form.Text>
               
                    <select name="user_select" class="form-control customDropdown">
                      <option style={{color:"white"}} value="Desarrollo Web y Ecommerce">Desarrollo tu Ecommerce</option>
                      <option style={{color:"white"}} value="Desarrollo Web y Ecommerce">Rediseñar tu tienda online</option>

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
<Col md={6} >

<Accordion id="acordion-agencia2">

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    01. ¿En qué Plataformas trabajamos?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Tenemos experiencia con varios CMS para eCommerce pero nos hemos especializado en Shopify y Woocommerce.
                   
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    02. ¿Cúal es el tiempo aprox. para un proyecto?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Va a depender de la magnitud de la tienda online.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    03. ¿Cómo funciona la forma de pago?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Usualmente el cobro será de un 50% + IVA al inicio y 50% + IVA al finalizar.

                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    04. ¿Cómo funciona la forma de pago?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Pago con transferencia, pago con débito, pago con crédito y/o pago con PayPal.

                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    05. ¿De qué forma se lleva a cabo el proceso?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Se dispone un director de proyecto y un líder desarrollo, sumado a un equipo de especialistas.


                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    06. ¿Diseñan, desarrollan y suben todos los productos al sitio?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Tenemos un límite de 70 productos por tienda pero capacitamos y entregamos un manual de uso para clientes.


                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    07. ¿Cuál es el costo de una tienda online?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Eso depende de cada proyecto pero nuestros trabajos comienzan en $800.000 CLP + IVA o $1.000 USD (sujeto a fluctuación dólar) + IVA.


                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    08. ¿También prestan servicios de marketing una vez entregado el proyecto?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Sí, pero es un tema que se debe evaluar comercialmente junto al director de proyecto.


                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    09. ¿Trabajan con empresas que se adjudicaron fondos concursables de Corfo,
                                    Sercotec, etc?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Claro que sí, pero dependerá si los montos coinciden con los estipulados para el servicio.


                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>



</Col >
<Col md={2}></Col >
</Row >
</Container>

<SliderPrensa></SliderPrensa>
<div className="scd5-2">
<Row>


     <Col style={{display:"flex", justifyContent:"center"}} md={6} sm={6} className="uno order-xs-12 order-md-1">
          <div  >
          <h1 className="parrf-noss" >¿Qué lograrás con nosotros?</h1>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Materializarás tu proyecto.</p>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Cumplirás tu meta comercial.</p>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Podrás alcanzar las metas que te propongas.</p>
          <p className="parrf-noss2"><i class="fa fa-check"></i> Contarás con un equipo de soporte.</p>
          <p className=" pc-for parrf-video">No perderás<br/> tiempo ni dinero.</p>   
          </div  >


          </Col>
          <Col  sm={6} md={5} className="dos rosros order-xs-1 order-md-2">
              
          <img
         
          alt="principalpruebas"
          width="90%"

        src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/Recurso_16.webp?v=1742911130"
      ></img>


          </Col>
  
</Row >
<div className="movil-for tiemoses" ><p className="tiempocss" >No perderás<br/>tiempo ni dinero.</p></div  >
</div>


    </div>
  );
}

export default Seccion_d5;
