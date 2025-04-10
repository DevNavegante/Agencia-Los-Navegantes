import React from "react";
import { Link } from "gatsby";
import "../global-styles/layout";
import { Col, Row, Container } from "react-bootstrap";
import UsePrensa from "../../hooks/usePrensa";
import Card from "react-bootstrap/Card";
const sectionImportante = () => {
    const response = UsePrensa();
    const dato = response.allStrapiPrensa.nodes[0].blog_prensa;

  
   
    return (
      <div style={{marginTop:"40px"}}>
        <Container>
        <Row className="importantessc" >
            <Col >
  {dato.slice(0, 1).map(item => (

<a href={item.link_blog_prensa} target="_blank">
        <Col style={{ display: "flex", marginBottom:"10px" }}>
        
        <Card>
        
          <Card.Img className=" img-fluid " variant="top" src={item.link_imagen_post} />

          <Card.Body id="ccccc" className="card-body-post" >
          <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>{item.etiqueta_blog_prensa}</span>
            <Card.Title className="titulo-post-blog3">
             
            {item.titulos_blog_prensa}
            </Card.Title>
                        
    
          </Card.Body>
        </Card>
      
    </Col>    
    </a>
    ))}
    </Col>
    <Col>

    <Container className="ult-etnra">
       <div> <h1 className="titulo-post-blog2">Últimos Agregados</h1></div>
                                         <Col style={{marginTop:"30px"}} >
                                         
                                      {dato.slice(-2).map((item,  i) => (
                                             <a href={item.link_blog_prensa}>
                                        <Row>
                                            <Col md={6}>
                                            <div style={{marginBottom:"20px"}}>
                                        <span style={{width:"", background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px"}}>{item.etiqueta_blog_prensa}</span>
                                            <h1 style={{marginTop:"30px"}} className="titulo-post-blog2">{item.titulos_blog_prensa}</h1>
                                 
                                      </div>

                                            </Col>
                                            <Col className="disFFF" md={4}>
                                            <img className="imgimportants"  src={item.link_imagen_post} />

                                            </Col>
                                     
                                      </Row>
                                      <div className="dark"></div>

                                            </a>
                                           ) )} 
                                           
                                            </Col>
                                     </Container>




    </Col>



  </Row>


        </Container>



      </div>
    );
  };
  
  export default sectionImportante;