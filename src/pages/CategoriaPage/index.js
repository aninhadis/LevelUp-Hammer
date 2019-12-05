import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import { Container, Row, Col, CardDeck } from 'reactstrap';

import ItemCategoria from '../../components/item-categoria/item-categoria';
import {store, categoriaStore, add_categoria} from '../../store';

import './categoria.css';



export class CategoriaPage extends Component {






    render() {
        // const produtos_item = store.getState().filter(produto => produto.id < 20);

        const m_filtro = categoriaStore.getState();
        var produtos_item = store.getState().filter( produto => produto[m_filtro['busca']] === m_filtro['item']);



        const filtro = (title, item) => {
            // produtos_item = store.getState().filter( produto => (produto[title] === item));
            // cards = produtos_item.map( produto => <ItemCategoria produto={produto}/> ).slice(0,20);
            categoriaStore.dispatch({
                type: add_categoria,
                busca: title,
                item: item
            });
            console.log(produtos_item);
            console.log(title);
            console.log(item);
        }

        var cards = produtos_item.map( produto => <ItemCategoria produto={produto}/> ).slice(0,20);





        // const cards = store.getState().slice(0, 5).map( produto => <ItemCategoria produto={produto}/> );



    



        return (
            <React.Fragment>
                
                <Container className="background-cards" fluid={true}>
                    
                    <Row>
                        <Col xl="2">
                            <Sidebar filtro={filtro}/>
                        </Col>
                        {/* {produtos} */}
                        <Col xl="10">
                            <h1 style={{color:'white'}}>Filtro:  {m_filtro['busca'] } : {m_filtro['item']}</h1>
                            <CardDeck >
                                {cards}
                            </CardDeck>
                        </Col>
                    </Row>
                    
                </Container>

            </React.Fragment>
        )
    }
}

export default CategoriaPage;
