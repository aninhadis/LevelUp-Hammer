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
                    <h1 id="name-item">{name}</h1>
                    <img id="image-item" src={image}/>
                    </Col>
                    <Col id="align-col2" xl='5'>
                    <h2>Valor atual: {price}</h2>
                    <h2>Moeda: {currency}</h2>
                    <h2>Cor: {color}</h2>
                    <h2>Marca: {brand}</h2>
                    <h2>Categoria: {category}</h2>
                    <button id="lance-button">Dê seu Lance</button>
                    <button id="lance-button">Aumentar Lance</button>
                    </Col>
                </Row>
                <div className="comentario" style={{background:"#6d6d6d", color: "#FAFBF9"}}>
                    <h1 style={{marginBottom: "0"}}>Comentários:</h1>
                </div>
                

            </React.Fragment>
        );
    }
}

export default DescricaoPage;
