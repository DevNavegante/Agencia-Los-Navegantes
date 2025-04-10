import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class Example1 extends Component {
    render() {
        return (
            <>
                <div>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                01. ¿En qué Plataformas trabajamos?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Tenemos experiencia con varios CMS para eCommerce pero nos hemos especializado en Shopify y Woocommerce.</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            02. ¿Cúal es el tiempo aprox. para un proyecto?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Va a depender de la magnitud de la tienda online.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                            03. ¿Cómo funciona la forma de pago?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="2">
                                <Card.Body>Usualmente el cobro será de un 50% + IVA al inicio y 50% + IVA al finalizar.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                            04. ¿Cómo funciona la forma de pago?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="3">
                                <Card.Body>Pago con transferencia, pago con débito, pago con crédito y/o pago con PayPal.
</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4">
                            05. ¿De qué forma se lleva a cabo el proceso?

                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="4">
                                <Card.Body>Se dispone un director de proyecto y un líder desarrollo, sumado a un equipo de especialistas.
</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="5">
                            06. ¿Diseñan, desarrollan y suben todos los productos al sitio?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="5">
                                <Card.Body>Tenemos un límite de 70 productos por tienda pero capacitamos y entregamos un manual de uso para clientes.
</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="6">
                            07. ¿Cuál es el costo de una tienda online?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="6">
                                <Card.Body>Eso depende de cada proyecto pero nuestros trabajos comienzan en $800.000 CLP + IVA o $1.000 USD (sujeto a fluctuación dólar) + IVA.
</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="7">
                            08. ¿También prestan servicios de marketing una vez entregado el proyecto?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="7">
                                <Card.Body>Sí, pero es un tema que se debe evaluar comercialmente junto al director de proyecto.
</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="8">
                            09. ¿Trabajan con empresas que se adjudicaron fondos concursables de Corfo,
                                    Sercotec, etc?
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="8">
                                <Card.Body>Claro que sí, pero dependerá si los montos coinciden con los estipulados para el servicio.
</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </>
        );
    }
}

export default Example1;