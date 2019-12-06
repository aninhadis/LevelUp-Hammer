import React, { Component } from 'react';
import {descricaoStore} from '../../store';
import {Row,Col} from 'reactstrap';
import {Link} from 'react-router-dom'
import './descricao.css'



class DescricaoPage extends Component {

    render() {

        const {brand, category, color, currency, image, name, price} = descricaoStore.getState();

        return (


            <React.Fragment>
                <Row  style={{alignItems: "center", justifyContent: "center"}} className="produto">
                    <Col id="align-col1" xl='7'>
                    <h1 id="name-item" className="name-text">{name}</h1>
                    <img id="image-item" alt="imagem" src={image}/>
                    </Col>
                    <Col id="align-col2" xl='5'>
                    <h4><span className="orange-text">Valor atual:</span> {price}</h4>
                    <h4><span className="orange-text">Moeda:</span> {currency}</h4>
                    <h4><span className="orange-text">Cor:</span> {color}</h4>
                    <h4><span className="orange-text">Marca:</span> {brand}</h4>
                    <h4><span className="orange-text">Categoria:</span> {category}</h4>
                    <button id="lance-button"><Link to="/checkout" style={{color:"#E4E8EA"}}>Dê seu Lance</Link></button>
                    </Col>
                </Row>
                

            </React.Fragment>
        );
    }
}

export default DescricaoPage;
