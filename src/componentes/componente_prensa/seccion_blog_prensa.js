import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Navigation } from "swiper";
import "../global-styles/layout"
import UsePrensa from "../../hooks/usePrensa"
// import required modules

const sectionBlogprensa = () => {
    const response = UsePrensa();
    const data = response.allStrapiPrensa.nodes[0].blog_prensa;
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
  
   
    return (
      <div className="padprensa" style={{marginTop:"40px"}}>
        <Container className="pc-for">

        <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        breakpoints={{
            400: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView:1,
              spaceBetween: 10,
              grid: 3,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
              slidesPerGroup: 3,
            },
          }}

        spaceBetween={30}
        pagination={pagination}
        modules={[Grid, Pagination]}
        className="mySwiper padswiper"
      >

        {data.map((item, i) => (
            <SwiperSlide>
        <a href={item.link_blog_prensa} target="_blank">
               <Card>

                 <Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src={item.link_imagen_post} />

                 <Card.Body id="ccccc2" className="card-body-post" >
                  <span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>{item.etiqueta_blog_prensa}</span>
                   <Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
                    
                    {item.titulos_blog_prensa}
                   </Card.Title>
               
                   <Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
                     {item.descripcion_blog_prensa}
                   </Card.Text>
        
             
                 </Card.Body>
               </Card>
               </a>
</SwiperSlide>
            ))}

            </Swiper>


</Container>
<Container className="movil-for">

<Swiper
slidesPerView={1}
grid={{
  rows: 4,
}}
breakpoints={{
    400: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView:1,
      spaceBetween: 10,
      grid: 4,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
  
    },
  }}

spaceBetween={30}
pagination={pagination}
modules={[Grid, Pagination]}
className="mySwiper padswiper"
>

<SwiperSlide>
    
    <a target="_blank" href="https://www.latercera.com/piensa-digital/noticia/paso-a-paso-como-hacer-una-campana-de-marketing-digital-exitosa/ECZJZI22IJCTTF5A7MA4KQZB6E/" >
    <Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/5.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>TV: La Tercera TV</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
¿Cómo hacer una campaña de marketing digital? | Agencia Los Navegantes 
</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Matías Villanueva, fundador de Agencia Los Navegantes y Academia Metrics enseñó los conceptos más importantes para pequeñas y medianas empresas.
                   </Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://www.youtube.com/watch?v=Y0TRi_mSpH0" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/7_1.png?v=1691183924" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Corfo: Pymes en Línea</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Cómo re-activar tu Pyme con Marketing Digital | Agencia Los Navegantes</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Aprenderás a impulsar el crecimiento de tu Pyme y mejorar tu presencia online junto a Matías Villanueva, CEO de Agencia los Navegantes, ingresa aquí. </Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://www.youtube.com/watch?v=Gld4uuLwjBk&t=214s" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/12.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>YouTube: Webinar Liderazgo </span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Conoce las Claves para liderar al equipo de Agencia Los Navegantes </Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Matías Villanueva compartió las claves que utiliza para liderar el equipo de Agencia Los Navegantes de manera remota. Conócelas aquí. 
</Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://www.youtube.com/watch?v=Gld4uuLwjBk&t=214s" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/12.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>YouTube: Hablemos de Liderazgo</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Conoce las Claves para liderar al equipo de Agencia Los Navegantes </Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Matías Villanueva compartió las claves que utiliza para liderar el equipo de Agencia Los Navegantes de manera remota. Conócelas aquí. 
</Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://www.youtube.com/watch?v=RjK29Lj-5HE" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/18.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Webinar: RadioLab</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Las claves para crear campañas en Facebook Ads | Academia Metrics</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Matías Villanueva te muestra las claves para crear campañas efectivas en Facebook Ads. Aprende a segmentar y obtener los mejores resultados, aquí.</Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://www.youtube.com/watch?v=2xLJU56eZfI&t=376s" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/16.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>YouTube: Javier Yranzo</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Como crear campañas publicitarias en Google Ads | Matías Villanueva</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
El fundador de Agencia Los Navegantes, explicó cómo crear, optimizar y escalar las campañas de Google Ads de manera efectiva. Entérate aquí. </Card.Text> </Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>
    
    <a target="_blank" href="https://www.diarioeldia.cl/economia/2020/5/10/la-apuesta-digital-de-matias-villanueva-para-impulsar-el-e-commerce-entre-las-empresas-71270.html" >
    <Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/02_6d2a03b6-fbbf-46b2-82cc-fa3448e9880b.png?v=1691175304" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Periódico: El Día</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Agencia Los Navegantes y Matías Villanueva en Diario el Día, La Serena. 
</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Agencia Los Navegantes se enfoca en asistir a emprendedores a mejorar su visibilidad online y maximizar sus ventas a través de Internet. 

                   </Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://www.agencialosnavegantes.cl/" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/03_bfec0799-8c84-44c7-a2be-5c1e21445c4e.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Academia: Platzi.com</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Fundador de Agencia Los Navegantes, Matías Villanueva es invitado a Platzi.</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
CEO de Agencia Los Navegantes, el 2018 dictó curso de Facebook Ads básico y Avanzado para la startup Platzi en Colombia. Entérate aquí. </Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>


<SwiperSlide>   
<a target="_blank" href="https://www.pucv.cl/uuaa/direccion-de-incubacion-y-negocios/evento/webinar-cowork-atacama-estrategias-de-comercializacion-y-marketing" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/21.jpg?v=1691012063" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Webinar: Cowork Atacama</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Tips para aumentar las ventas en tu E-commerce con Matías Villanueva </Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Conversamos con el CEO de Agencias los Navegantes sobre como sacarle el máximo provecho a tu E-commerce y ralentizar tu inversión. Conocer más aquí 
</Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://revistaemprende.cl/reactiva-digital-ciclo-de-webinars-que-busca-transformar-los-negocios-de-pymes-y-emprendedores/" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/14_edeadaa5-0801-437d-b2d7-a203cb3b291a.jpg?v=1691180265" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Blog: Digitaliza tu Pyme</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Aprende Marketing Digital Para Re-Activar tu Pyme.</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
En una entrevista para Pymes en Línea junto a Corfo, Matías Villanueva de Agencia Los Navegantes promovió la digitalización en el pensamiento de los emprendedores. 
</Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://www.youtube.com/watch?v=U7W9F4Zddd8" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/18_c4f24252-e8fa-459f-a101-e7b4233fd858.jpg?v=1691184542" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>YouTube: David Castarrosa</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Cómo crear anuncios de Facebook Ads para vender en línea | Academia Metrics </Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Matías Villanueva mostró cómo  crear anuncios que realmente sean rentables para las tiendas online. Te mostramos toda la entrevista aquí. </Card.Text></Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://www.youtube.com/watch?v=pLHqQU3IlgU&t=930s" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/22.jpg?v=1691184616" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>YouTube: Educando Emprendedores </span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Cuáles son las métricas más importantes en campañas publicidad online | Agencia Los Navegantes</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Junto a Matías Villanueva podrás conocer las métricas más importantes de la publicidad online y cómo utilizarlas de manera correcta, clic Aquí. 
</Card.Text> </Card.Body>
</Card>
</a>
</SwiperSlide>   

<SwiperSlide>   
<a  target="_blank" href="https://www.agencialosnavegantes.cl/" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/2_29e4d9bf-7062-486d-b71c-71d82c5c226c.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Periódico: LUN</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Fundadores de Agencia Los Navegantes cuentan cómo crearon su empresa.  
</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Poco a poco esto fue creciendo y hoy son un equipo de +40 especialistas en el área de marketing digital, liderados por su CEO y Fundador, Matías Villanueva. 
</Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://www.diarioeldia.cl/economia/2020/5/10/la-apuesta-digital-de-matias-villanueva-para-impulsar-el-e-commerce-entre-las-empresas-71270.html" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/6_1.jpg?v=1691184107" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Periódico: El Día</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Agencia Los Navegantes impulsan el e-commerce entre las empresas </Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Matías Villanueva compartió las claves que utiliza para liderar el equipo de Agencia Los Navegantes de manera remota. Conócelas aquí. 
</Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="http://www.laserena.cl/noticia/3931/municipio-entrega-herramientas-para-fortalecer-las-ventas-online-de-las-pymes" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/11_95994599-2ac1-4532-952e-9cdd2eaf86bb.jpg?v=1691184287" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Municipalidad: La Serena</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Agencia Los Navegantes junto a Municipio ayudan a fortalecer las ventas online en las Pymes.</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Día a Día aumentan las tiendas online por tal razón, Agencia Los Navegantes benefició 65 personas a posicionar su emprendimiento, conoces el detalle aquí.
</Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://www.youtube.com/watch?v=6shl_g8Dk-M" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/10.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Webinar: Red de Mentores UST</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Cuáles son las claves para emprender en le mundo digital  | Matías Villanueva</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Conversamos cuáles fueron los pro y contras del CEO de Agencia Los Navegantes, que lo han llevado a ser Google Partner Premier de manera autodidacta. </Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://www.youtube.com/watch?v=RjK29Lj-5HE" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/18.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Webinar: RadioLab</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Las claves para crear campañas en Facebook Ads | Academia Metrics</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Matías Villanueva te muestra las claves para crear campañas efectivas en Facebook Ads. Aprende a segmentar y obtener los mejores resultados, aquí.</Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://www.youtube.com/watch?v=LF8MzXXS1dw" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/11.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>YouTube: Francois Pouzet</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Paso a paso para crear una campaña en meta ads | Academia Metrics </Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
En una entrevista exclusiva, Matías Villanueva mostró un tutorial detallado de cómo crear una campaña en Meta Ads desde cero. Entra aquí
</Card.Text> </Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://www.youtube.com/watch?v=yGAMscjDTk0&t=132s" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/9.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>YouTube: Vilma Nuñez</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Matías Villanueva entrevista a Vilma Nuñez, experta en Marketing Digital.</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Vilma Núñez, especialista en marketing digital. Nos revela muchos tips para optimizar campañas, tener una mejor estructura de trabajo y mucho más.</Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://impulsochileno.cl/noticias/curso-gratuito-de-marketing-digital/" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/4_06d4acbf-e6ba-4d18-8356-8384956e19d0.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Blog: Impulso Chileno</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Curso gratuito de Marketing Digital con Matías Villanueva y Academia Metrics.</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
¡El Impulso Chileno nos destacó! Descubre cómo nuestro curso gratis de marketing digital revolucionó el aprendizaje en línea en tiempos de pandemia. </Card.Text> </Card.Body>
</Card>
</a>
</SwiperSlide>

<SwiperSlide>   
<a target="_blank" href="https://www.agencialosnavegantes.cl/" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/12__1.jpg?v=1691185196" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Blog: Litoral Press</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Conoce porqué dejaron la universidad y crearon su empresa</Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Autodidacta y emprendedor, Matías Villanueva fundó el 2014 Agencia Los Navegantes y en los primeros 9 meses no ganó ni un peso.  Conoce más aquí.
</Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>
    
<SwiperSlide>   
<a target="_blank" href="https://www.youtube.com/watch?v=ZLYnueMP7pU" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/19.jpg?v=1690988192" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>Webinar: Red de Mentores UST</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Conoce las métricas más importantes en publicidad online | Academia Metrics </Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Junto a Matías Villanueva conocerás las métricas más importantes en publicidad online y cómo utilizarlas para medir el éxito de tus campañas, clic Aquí. </Card.Text>
</Card.Body>
</Card>
</a>
</SwiperSlide>     

<SwiperSlide>   
<a target="_blank" href="https://www.youtube.com/watch?v=I5LaPShyiE8" >
<Card>
<Card.Img style={{marginBottom:"5px"}} className="bitacora-single img-fluid " variant="top" src="https://cdn.shopify.com/s/files/1/0610/5648/3573/files/20_a085497f-3db0-4287-8f91-3ffc9799fa63.jpg?v=1691180735" />
<Card.Body id="ccccc2" className="card-body-post" >
<span style={{background:"#e7eafe", color:"black", fontWeight:"bold", borderRadius:"100px", padding:"3px 20px", marginTop:"10px"}}>YouTube: Daniel Traslaviña</span>
<Card.Title style={{marginTop:"10px", fontFamily:"Brandon Grotesque"}} className="titulo-post-blog">
Aprende todo sobre Facebook Ads | Academia Metrics </Card.Title>
<Card.Text style={{fontFamily:"Brandon Grotesque"}} className="card-text3">
Conoce cada paso de que debes dar para crear una campaña efectiva en Facebook Ads junto a Matías Villanueva, más detalles aquí</Card.Text> </Card.Body>
</Card>
</a>
</SwiperSlide>   
   
    </Swiper>


</Container>



      </div>
    );
  };
  
  export default sectionBlogprensa;