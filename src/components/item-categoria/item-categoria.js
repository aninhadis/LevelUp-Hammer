import React from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Col } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom';
import { descricaoStore, add_produto } from "../../store";
import './item-categoria.css'
import noImage from '../../assets/no-image.jpg';

const ItemCategoria = (props) => {

    const {category, color, currency, image, name, price, comments,id} = props.produto;
    var rating = 0;
    var urlImage;
    comments.forEach(comentario => {
        rating = rating + comentario.rating;
    });

    const checkImage = (imageSrc, good, bad) => {
        var img = new Image();
        img.onload = good; 
        img.onerror = bad;
        img.src = imageSrc;
    }
    
    checkImage(`${image}?${id}`, 
    ()=>{ 
        console.log("good", `${image}?${id}`);
        urlImage = `${image}?${id}`;
    }, 
    ()=>{ 
        console.log("bad", noImage); 
        urlImage = noImage;
    } );


    const chamaDescricao = () => {
        descricaoStore.dispatch({
            type: add_produto,
            produto: props.produto
        });
    }

    return (
        <Col xl="4">
            <Card className='card-css' body outline color="danger">
                <p value={urlImage}></p>
                <CardImg className="card-img" top width="100%" src={image+'?'+id} alt="Card image cap"/>
                <CardBody>
                    <StarRatingComponent starCount={5} name={""} value={rating/comments.length}/>

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
