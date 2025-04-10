import React from "react";
import BlogLayoutPost from "../BlogLayout/BlogLayoutPost";
import "../templates/post/post.scss";
import { Link } from "gatsby";
import UsePost from "../hooks/usePost";
import { Col, Row, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Header from "../componentes/header";
import Seo from "../componentes/seo"
import ShareButtons from "../componentes/sharebutton";
import Footer from "../componentes/footer";
import SectionInstagram from "../componentes/SectionInstagram"
import "../componentes/global-styles/estilo.scss"
import "moment/locale/es"




export default function Post(props) {
  const colorFondo = "#031fff";
  const {
    pageContext: { data: post },
  } = props;

  const response = UsePost();
  const dato = response.allStrapiPost.edges;
  const title = post.seo_title;
  const url = props.location.href;
  const idpost = post.id;
  const description = post.seo_descripcion;



 

  return (
    <div>
   
   <Seo
              title={title}
              description={description}
              image={post.linkminiatura}
            ></Seo>
     

      <div
        className="image moviil-image"
        style={{
          
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `  url(${post.linkbanner})`,
          transition: "background 0.3s  borderRadius 0.3s",
          height: "500px",
          width: "100%",
          
        }}
      >
        <div
          style={{
            alignItems: "center",
            
            justifyContent: "center",
            display: "flex",
            transition: "background .3s,border-radius .3s,opacity .3s",
            width: "100%",
            height: "100%",
           
           
          }}
        >
          <div>
          <h1 style={{width:"85%", margin:"0 auto"}} className="titulo-post2">{post.titulo_post}</h1>
          <div style={{marginTop:"15px", display: "flex", justifyContent:"center", alignItems:"center"}}>
          <p style={{ display:"flex", alignItems:"center", fontSize:"18px", textAlign:"center", color:"white"}}>
          <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-calendar4" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
</svg>
          {post.create_dia}
     
         
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"5px"}}  width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
</svg>
          {post.create_hora}
            </p>

            </div>
          </div>
        </div>
      </div>
      <Header colorFondo={colorFondo} />
      <div  style={{ display: "flex", justifyContent: "center" }}>
        <BlogLayoutPost>
          

        <div className="blog-post-layoutt" >
          <div id="bitacora-id" className="bitacoraRest"
           
            dangerouslySetInnerHTML={{ __html: post.contenido_1 }}
          />


      
     
<h1 className="titulo-bitacora">MIRA LO MAS NUEVO DE LA BITÁCORA</h1>
        

<Container>
  <Row xs={1} md={2}>
  {dato.filter( item => item.node.id !== idpost ).slice(0, 2).map(item => (


        <Col style={{ display: "flex", marginBottom:"10px" }}>
        
        <Card>
        <Link to={`/${item.node.url}`}>
          <Card.Img className="bitacora-single img-fluid " variant="top" src={item.node.linkminiatura} />
          </Link>
          <Card.Body id="ccccc" className="card-body-post" >
            <Link to={`/${item.node.url}`}>
            <Card.Title className="titulo-post">
             
             {item.node.seo_title}
            </Card.Title>
            </Link>
            <Card.Text className="card-text2">
              {item.node.seo_descripcion}
            </Card.Text>
            <Link to={`/${item.node.url}`}>
            <div className="hoverclas2">
            <Card.Link style={{fontSize:"18px"}}>
              Leer más &gt;
            </Card.Link>
            </div>
            </Link>
          </Card.Body>
        </Card>
      
    </Col>
  

     
    ))}
  </Row>
</Container>


          </div>


             
       
        </BlogLayoutPost>
  
        
      </div>
    
      <SectionInstagram ></SectionInstagram>
        <Footer></Footer>
     
      
    </div>
  

           



  );
}



