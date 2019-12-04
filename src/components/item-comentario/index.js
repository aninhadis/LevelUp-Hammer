import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody, Col } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom';
import { descricaoStore, add_produto } from "../../store";


const ItemCategoria = (props) => {

    const {comment, email, name, rating} = props.comentario;

    return (
        <Col>

        </Col>
        
    );
}

export default ItemCategoria;
