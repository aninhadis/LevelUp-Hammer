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
        var txt_filtro = <span></span>;
        var produtos_item;

        if(m_filtro['busca'] != undefined || m_filtro['item'] != undefined){
            console.log('filtro:');
            console.log(m_filtro['busca']);
            console.log(m_filtro['item']);

            txt_filtro = <h1 style={{color:'white'}}>Filtro:  {m_filtro['busca'] } : {m_filtro['item']}</h1>
            if(m_filtro['busca'] == 'stars'){
                produtos_item = store.getState().filter( item => {
                    var rating = 0;
                    item.comments.forEach(comentario => {
                        rating = rating + comentario.rating;
                    });
                    const len = item.comments === undefined ? 1 : item.comments.length;
                    console.log('Valor:' + rating/len)
                    return (rating/len == m_filtro['item']);
                });
            }else{
                if(m_filtro['busca'] == 'name'){
                    produtos_item = store.getState().filter( produto => {
                        return produto[m_filtro['busca']].includes(m_filtro['item']);
                    });
                }
                else produtos_item = store.getState().filter( produto => produto[m_filtro['busca']] == m_filtro['item']);
            }
        }else{
            produtos_item = store.getState();
        }



        const filtro = (title, item) => {
            // produtos_item = store.getState().filter( produto => (produto[title] === item));
            // cards = produtos_item.map( produto => <ItemCategoria produto={produto}/> ).slice(0,20);
            categoriaStore.dispatch({
                type: add_categoria,
                busca: title,
                item: item
            });
            console.log(title);
            console.log(item);
        }

        var cards = produtos_item.map( produto => <ItemCategoria produto={produto}/> ).slice(0,20);





        // const cards = store.getState().slice(0, 5).map( produto => <ItemCategoria produto={produto}/> );



    



        return (
            <React.Fragment>
                
                <Container className="background-cards" fluid={true}>
                    {txt_filtro}
                    <Row>
                        <Col xl="2">
                            <Sidebar filtro={filtro}/>
                        </Col>
                        {/* {produtos} */}
                        <Col xl="10">
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
