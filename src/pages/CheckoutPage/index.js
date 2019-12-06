import React, { Component } from 'react';
import { Container, Row, Col, CardDeck, Input } from 'reactstrap';
import ItemCategoria from '../../components/item-categoria/item-categoria';
import {Link} from 'react-router-dom';
import {store, categoriaStore, add_categoria, descricaoStore} from '../../store';

import './checkout.css';



export class CheckoutPage extends Component {

    render() {

        const m_filtro = categoriaStore.getState();
        var produtos_item = store.getState().filter( produto => produto[m_filtro['busca']] === m_filtro['item']);

        const {name, price} = descricaoStore.getState();


        const filtro = (title, item) => {
            categoriaStore.dispatch({
                type: add_categoria,
                busca: title,
                item: item
            });
        }

        let cards = produtos_item.map( (produto, index) => <ItemCategoria key={index} produto={produto}/> ).slice(0,3);

        return (
            <>
                <Container className="background-cards" fluid={true}>
                    <Row>
                        <Col xl="12">
                            <h1 style={{margin:"10px"}}>{name}</h1>
                            <h3>Lance Atual: {price}</h3>
                            <Input style={{margin:"5px"}} placeholder="Seu Lance" />
                            <h5 style={{margin:"10px"}} >Digite os dados do cartão:</h5>
                            <Input style={{margin:"5px"}} placeholder="Digite o número do cartão" />
                            <Input style={{margin:"5px"}} placeholder="Digite a validade" />
                            <Input style={{margin:"5px"}} placeholder="Digite o código de segurança" />

                            <h5 style={{margin:"10px"}} >Locais Cadastros</h5>
                            <Input style={{margin:"5px"}} placeholder="CEP" />
                            <Input style={{margin:"5px"}} placeholder="Estado" />
                            <Input style={{margin:"5px"}} placeholder="Cidade" />
                            <Input style={{margin:"5px"}} placeholder="Bairro" />
                            <Input style={{margin:"5px"}} placeholder="Rua" />
                            <Input style={{margin:"5px"}} placeholder="Número" />
                            <button id="checkout-button"><Link to="/" style={{color:"#E4E8EA"}}>Finalizar Lance</Link></button>

                        </Col>
                    </Row>

                    <Row>
                        {/* {produtos} */}
                        <Col xl="12">
                            <h3 style={{margin:"10px"}} >SUGESTÕES</h3>
                            <CardDeck >
                                {cards}
                            </CardDeck>
                        </Col>
                    </Row>
                    
                </Container>
            </>
        )
    }
}

export default CheckoutPage;
