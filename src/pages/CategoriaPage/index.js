import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import { Container, Row, Col, CardDeck } from 'reactstrap';

import ItemCategoria from '../../components/item-categoria/item-categoria';
import {store} from '../../store';



export class CategoriaPage extends Component {


    render() {
        const produtos_item = store.getState().filter(produto => produto.id < 6);
        const cards = produtos_item.map( produto => <ItemCategoria produto={produto}/> );
        // const cards = store.getState().map( produto => <ItemCategoria produto={produto}/> );
        

        return (
            <React.Fragment>
                
                <Container fluid={true}>
                    <Row>
                        <Col xl="2">
                            <Sidebar/>
                        </Col>
                        {/* {produtos} */}
                        <Col xl="10">
                            <CardDeck>
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
