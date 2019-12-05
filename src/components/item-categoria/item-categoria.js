import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody, Col } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom';
import { descricaoStore, add_produto } from "../../store";
import './item-categoria.css'
import noImage from '../../assets/no-image.jpg';


const ItemCategoria = (props) => {

    const {brand, category, color, currency, image, name, price, comments,id} = props.produto;
    var rating = 0;
    comments.forEach(comentario => {
        rating = rating + comentario.rating;
    });

    const chamaDescricao = () => {
        descricaoStore.dispatch({
            type: add_produto,
            produto: props.produto
        });
    }

    return (
        <Col xl="4">
            <Card className='card-css' body outline color="danger">
                <CardImg className="card-img" top width="100%" src={image+'?'+id} alt="Card image cap"/>
                <CardBody>
                    <StarRatingComponent starCount={5} value={rating/comments.length}/>

                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>Lance atual: {price}</CardSubtitle>
                    <CardSubtitle>Categoria: {category}</CardSubtitle>
                    <CardSubtitle>Moeda: {currency}</CardSubtitle>
                    <CardSubtitle>Cor: {color}</CardSubtitle>
                    <Link to="/description" onClick={chamaDescricao} className="stretched-link"></Link>
                </CardBody>
            </Card>
        </Col>
        
    );
}

export default ItemCategoria;
