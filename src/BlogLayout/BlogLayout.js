import React from "react"
import { Container, Grid } from "semantic-ui-react"
import "./BlogLayout.scss"
import Menu from "../menu"
import "../componentes/global-styles/estilo.scss"

export default function BlogLayout(props) {


    const { children  } = props
    return(
        <Container fluid  className="blog-layout" >


        <Grid>
            <Grid.Column mobile={16} tablet={16} computer={11}>
                {children}
            </Grid.Column>
            <Grid.Column className="segundo-grid" tablet={16} computer={4}>
                <Menu/>
            </Grid.Column>
            

        </Grid>
     
        
        </Container>
    )

}