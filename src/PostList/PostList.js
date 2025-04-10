import React from 'react'
import "./PostList.scss"
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "gatsby"
import { map } from "lodash"
import Card from "react-bootstrap/Card"


export default function PostList(props) {
  
    const {posts} = props;
    
   console.log(props)
  
    return (
<React.Fragment>
        <Container  className="contenedor-disposicion"  fluid>
            {map(posts, (post) =>(

                
            <Row >
            
            <Link to={`/${post.url}`}>
               
                <Col  className="contenedor-disposicion__item"  >

                <Card id ="carta">
                    <Card.Img  variant="top"  src={post.linkminiatura} />
                    <Card.Img  variant="top" style={{display:"none"}}  src={post.linkbanner} />
                    <Card.Body id="crd-body">
                    <Card.Title className="titulo-post">{post.titulo_post}</Card.Title>
                    <Card.Text className="texto-descripcion44">{post.seo_descripcion}</Card.Text>
                    <Card.Link className="color-enlace" >Leer más &gt;
                    </Card.Link>
                    </Card.Body>
                </Card>
            

                </Col>
                </Link>
                
            </Row>
             ) )}
        </Container>
        <Container  className="contenedor-disposicion-movil"  fluid>
            {map(posts, (post) =>(

                
            <Row className="row-cont" >
            
            <Link to={`/${post.url}`}>
               
                <Col  className="contenedor-disposicion__item2"  >

                <Card >
                    <Card.Img  variant="top"  src={post.linkminiatura} />
                    <Card.Img  variant="top" style={{display:"none"}}  src={post.linkbanner} />
                    <Card.Body  className="card-bodd">
                    <Card.Title className="titulo-post">{post.titulo_post}</Card.Title>
                    <Card.Text className="texto-descripcion">{post.seo_descripcion}</Card.Text>
                    <Card.Link className="color-enlace" >Leer más &gt;</Card.Link>
                    </Card.Body>
                </Card>
            

                </Col>
                </Link>
                
            </Row>
             ) )}
        </Container>
        </React.Fragment>
    )
}


/*       <Image className="imagen-tamaño" target={post.contenido_1} src={post.miniatura.url}  />
                    <Card className="post-list__item">
                        <Image className="imagen-tamaño" src={post.miniatura.url}  />
                        <p>{post.titulo_post}</p>
                        <p>{post.contenido_1}</p>
                    </Card> */  