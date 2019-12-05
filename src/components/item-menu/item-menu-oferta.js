import React from 'react';
import {Card, CardImg, CardTitle, CardSubtitle, CardBody, Col, Row, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import { descricaoStore, add_produto } from "../../store";
import './item-menu.css';


const ItemMenuOferta = (props) => {

    const {id, name, image, price } = props.produto;

    const chamaDescricao = () => {
        descricaoStore.dispatch({
            type: add_produto,
            produto: props.produto
        });
    }
   
    return (
        <Col xl='12'>
            <Card id="leilao" body outline color="danger">
                <CardImg id="imagem-menu-oferta" top width="100%" src={image+'?'+id} alt="Card image cap" />
                    <CardBody>
                        <Row>
                            <CardTitle id="oferta-name">{name}</CardTitle>
                            <CardTitle id="oferta-price">Lance atual: {price}</CardTitle>
                            <Button id="oferta-button">Dê seu lance</Button>          
                        </Row>
                        
                        <Link to="/description" onClick={chamaDescricao} className="stretched-link"></Link>
                    </CardBody>
            </Card>
        </Col>
        

    );

}

export default ItemMenuOferta;