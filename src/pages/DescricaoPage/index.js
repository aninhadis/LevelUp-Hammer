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
                <Row  style={{alignItems: "center", justifyContent: "center"}} className="produto">
                    <Col id="align-col1" xl='7'>
                    <h1 id="name-item" className="orange-text">{name}</h1>
                    <img id="image-item" src={image}/>
                    </Col>
                    <Col id="align-col2" xl='5'>
                    <h2><span className="orange-text">Valor atual:</span> {price}</h2>
                    <h2><span className="orange-text">Moeda:</span> {currency}</h2>
                    <h2><span className="orange-text">Cor:</span> {color}</h2>
                    <h2><span className="orange-text">Marca:</span> {brand}</h2>
                    <h2><span className="orange-text">Categoria:</span> {category}</h2>
                    <button id="lance-button">Dê seu Lance</button>
                    </Col>
                </Row>
                

            </React.Fragment>
        );
    }
}

export default DescricaoPage;
