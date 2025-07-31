import React, { useState } from 'react';
import '../componentes/global-styles/estilo.scss'
import "../componentes/componentes_analitica/sectionAnalitica2";
import { Col, Row, Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import { Redirect } from "react-router-dom";
import {navigate} from 'gatsby';
import {Link} from 'gatsby';
import { useHistory } from "react-router-dom";
import { init, sendForm } from 'emailjs-com';
// Importar el componente PhoneInput y sus estilos
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

init('user_ERlBBhqIOUeDDIcksWV35');
function SectionContacto() {

  const { register, handleSubmit, watch, errors } = useForm();

  const [contactNumber, setContactNumber] = useState("000000");
  // Estado para el número de teléfono
  const [phone, setPhone] = useState("");
  
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const onSubmit = (data) => {
    // Asignar el valor del teléfono al objeto data
    data.user_telefono = phone;
    
    const btncompra = document.getElementById('btnContact');
    btncompra.disabled = true; 
    generateContactNumber();
    sendForm('default_service', 'template_m974mai', '#contact-form')
      .then(function(response) {  
        window.location.href = '/gracias';
      }, function(error) {
        console.log('FAILED...', error);
      });
  }

  return (
    <div id="contacto" >
      <div style={{ background: "#FA5983" }}>
        <Container className="contenedor-contacto">
          <Row>
            <Col style={{ display:"flex", alignItems:"center", }} sm={6}>
              <div>
              <h1 id="scContactoT"
                style={{ lineHeight: "1em", fontSize: "45px", color: "#fff", fontWeight: "700", width:"90%" }}
              >
                Si necesitas contactarnos dejanos un mensaje.
              </h1>
              <br></br>
              <h3
              className="sub-cont"
                style={{
                  paddingBottom: "20px",
                  color: "#fffe00",
                  fontSize: "27px",
                  lineHeight: "1.1em",
                  fontWeight: "700",
                }}
              >
                Te responderemos dentro de 24 horas hábiles.
              </h3>
              </div>
            </Col>
            <Col sm={6}>
              <Form id='contact-form' action="/gracias" onSubmit={handleSubmit(onSubmit)} className="formulario-contacto">
                <input type='hidden' name='contact_number' value={contactNumber} />
                <Form.Group className="mb-3">
                  <Form.Control name="user_name" required minLength="4" maxLength="30" type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control name="user_apellido" minLength="4" required maxLength="30" type="text" placeholder="Apellido" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control name="user_empresa" minLength="4" required maxLength="40" type="text" placeholder="Empresa" />
                </Form.Group>
                
                {/* Reemplazar el campo de teléfono original con PhoneInput */}
                <Form.Group className="mb-3">
                  <input type='hidden' name='user_telefono' value={phone} />
                  <PhoneInput
                    country={'cl'} // Chile como país por defecto
                    value={phone}
                    onChange={setPhone}
                    inputProps={{
                      name: 'phone',
                      required: true,
                      maxLength: 20
                    }}
                    containerClass="phone-input-container"
                    inputClass="form-control"
                    buttonClass="phone-input-button"
                    dropdownClass="phone-input-dropdown"
                    searchClass="phone-input-search"
                    enableSearch={true}
                    disableSearchIcon={false}
                    placeholder="Número de celular"
                    isValid={(value, country) => {
                      // Permitir campo vacío para poder borrar
                      if (value.length === 0) return true;
                      
                      if (country.countryCode === 'ar') {
                        // Para Argentina: +549 + código área (2 dígitos) + número (8 dígitos) = 13 caracteres totales
                        return value.length === 13;
                      }
                      if (country.countryCode === 'cl') {
                        // Para Chile: +56 + 9 + número (8 dígitos) = 12 caracteres totales
                        return value.length === 12;
                      }
                      // Para otros países, validación estándar
                      return value.length >= 8 && value.length <= 20;
                    }}
                    preferredCountries={['cl', 'ar', 'mx', 'es', 'us']}
                    enableAreaCodes={true}
                    autoFormat={true}
                    disableCountryCode={false}
                    countryCodeEditable={false}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    name='user_email'
                    required minLength="4"
                    type="email"
                    placeholder="Correo electrónico. Ej: example@empresa.com"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Text style={{ fontSize: "20px", color: "#FFF" }}>
                    Servicio a Cotizar
                  </Form.Text>
                  <select name="user_select" class="form-control customDropdown">
                    <option value="Desarrollo Web y Ecommerce">Desarrollo Web y Ecommerce</option>
                    <option value="Marketing Digital">Marketing Digital</option>
                  </select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control name='message' required minLength="5" placeholder="Mensaje" as="textarea" className="textareaa" rows={8} />
                </Form.Group>
                
                <Button
                  id="btnContact"
                  type="submit"
                  style={{
                    fontSize:"18px",
                    background: "transparent",
                    borderColor: "transparent",
                    color: "rgb(255, 254, 0)",
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
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SectionContacto;
