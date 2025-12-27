import React from "react";
import { Modal, Nav, Button, Col, Row, Container } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";
import "../componentes/global-styles/estilo.scss"

function ModalHeader() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);

  return (
    <div>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Collapsed content</h4>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark nh">
          <button
          style={{display:"flex", justifyContent:"end", alignItems:"center", color:"white"}}
            onClick={() => setShow(true)}
           className="botonHamburguer"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menú
            <img loading="lazy" 
              width={43}
              height={43}
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/hamburguesa_2_pkfede.webp?v=1659816039"
              className="imagen-menu"
              alt="s"
            ></img>
          </button>
        </nav>
      </div>

      <Modal style={{ overflowY: "hidden", backgroundColor: "rgba(0,0,0,.8)" }}
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
       

        <Row style={{ marginTop:"5%" }}>

          <Col className="menu-movil2" style={{ textAlign: "center", lineHeight: "2" }}>

            <Nav.Item id="myDIV">
              <Link
                className="navbar-brand item-menu  "
                to="/"
                activeStyle={{
                  color: "#cdcd41",
                  fontWeight: 700
                }}
                style={{ fontSize: "32px" }}
              >
                Inicio
              </Link>
            </Nav.Item>
            <Nav.Item className="navbar-brand">
              <Link
                className="navbar-brand item-menu  "
                to="/tripulacion"
                activeStyle={{
                  color: "#cdcd41",
                  fontWeight: 700
                }}
                style={{ fontSize: "32px" }}
              >
                Tripulación
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="navbar-brand item-menu"
                to="/marketing-digital"
                style={{ fontSize: "32px" }}
                activeStyle={{
                  color: "#cdcd41",
                  fontWeight: 700
                }}
              >
                Marketing Digital
              </Link>
            </Nav.Item>
            <Nav.Item>
              <a
                className="navbar-brand item-menu "
                href="/ecommerce"
                style={{ fontSize: "32px" }}
              >
                Desarrollo Ecommerce
              </a>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="navbar-brand item-menu"
                to="/blog/page"
                style={{ fontSize: "32px" }}
                activeStyle={{
                  color: "#cdcd41",
                  fontWeight: 700
                }}
              >
                Blog
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="navbar-brand item-menu"
                to="/prensa"
                style={{ fontSize: "32px" }}
                activeStyle={{
                  color: "#cdcd41",
                  fontWeight: 700
                }}
              >
                Apariciones en Prensa
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="navbar-brand item-menu"
                to="/contacto"
                style={{ fontSize: "32px" }}
                activeStyle={{
                  color: "#cdcd41",
                  fontWeight: 700
                }}
              >
                Contacto
              </Link>
            </Nav.Item>
           


          </Col>







        </Row>
        <Button
        className="equis-movil"
          style={{
            marginLeft: "90%",
            background: "transparent",
            border: "none",
            fontSize: "80px",
            position: "fixed"

          }}
          onClick={handleClose}
        >
          <img loading="lazy" 
              width={43}
              height={43}
              src="https://cdn.shopify.com/s/files/1/0654/9366/3973/files/001260c7-b8fa-4f60-8b7d-8b5520a79c7e_1_kpvfis.webp?v=1659816057"
              className="imagen-menu"
              alt="s"
            ></img>
        </Button>
      </Modal>
    </div>
  );
}

export default ModalHeader;
