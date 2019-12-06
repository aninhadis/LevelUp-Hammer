import React from 'react';
import {Card, CardImg, CardTitle, CardBody, Col, Row, Button} from 'reactstrap';
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
                        <Row style={{justifyContent: "space-around", alignItems: "center"}}>
                            <CardTitle id="oferta-name">{name}</CardTitle>
                            <CardTitle id="oferta-price"><span style={{color: "#ff6f00", fontWeight: "bold"}}>Lance atual:</span> {price}</CardTitle>
                            <Card id="oferta-button"><Button id="oferta-button"><Link to="/checkout" style={{color:"#E4E8EA"}} className="stretched-link"></Link>Dê seu lance</Button></Card>
                            {/* <button id="oferta-button">Dê seu Lance</button></Link>           */}
                        </Row>
                        
                        {/* <Link to="/description" onClick={chamaDescricao} className="stretched-link"></Link> */}
                    </CardBody>
            </Card>
        </Col>
        

    );

}

export default ItemMenuOferta;