import React from 'react';
import {Card, CardImg, CardTitle, CardSubtitle, CardBody, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import { descricaoStore, add_produto } from "../../store";
import './item-menu.css';

const ItemMenuProcurados = (props) => {

    const {id, name, image, price } = props.produto;

    const chamaDescricao = () => {
        descricaoStore.dispatch({
            type: add_produto,
            produto: props.produto
        });
    }
   
    return (
        <Col xl='4'>
            <Card body outline color="danger">
                <CardImg top width="100%" src={image+'?'+id} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardSubtitle><span className="orange-text">Lance Atual:</span> {price}</CardSubtitle>
                        <Link to="/description" onClick={chamaDescricao} className="stretched-link"></Link>
                    </CardBody>
            </Card>
        </Col>
        

    );
    
}

export default ItemMenuProcurados;