import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody, Col } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom';
import { descricaoStore, add_produto } from "../../store";


const ItemCategoria = (props) => {

    const {brand, category, color, currency, image, name, price, comments} = props.produto;
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
        <Col xl="3">
            <Card className>
                <CardImg top width="100%" src={image} alt="Card image cap" />
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
