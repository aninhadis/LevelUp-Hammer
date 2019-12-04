import React, { Component } from 'react';
import {descricaoStore} from '../../store';
import {Row,Col} from 'reactstrap';
import './descricao.css'



class DescricaoPage extends Component {

    render() {

        const {brand, category, color, currency, image, name, price, comments} = descricaoStore.getState();


        console.log(descricaoStore.getState());

        return (


            <React.Fragment>
                <Row className="produto">
                    <Col id="align-col1" xl='6'>
                    <h1 id="name-item">{name}</h1>
                    <img id="image-item" src={image}/>
                    </Col>
                    <Col id="align-col2" xl='6'>
                    <h2>Valor atual: {price}</h2>
                    <h2>Moeda: {currency}</h2>
                    <h2>Cor: {color}</h2>
                    <h2>Marca: {brand}</h2>
                    <h2>Categoria: {category}</h2>
                    </Col>
                </Row>
                <div className="comentario">
                    <h1>Comentários:</h1>
                </div>
                

            </React.Fragment>
        );
    }
}

export default DescricaoPage;
