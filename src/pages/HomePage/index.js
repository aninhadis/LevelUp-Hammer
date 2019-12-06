import React, { Component } from 'react';
import {store} from '../../store';
import './homepage.css'
import { CardDeck, Row, Col} from 'reactstrap';
import ItemMenuNovo from '../../components/item-menu/item-menu-novos';
import ItemMenuOferta from '../../components/item-menu/item-menu-oferta';
import ItemMenuProcurados from '../../components/item-menu/item-menu-procurados';



export class HomePage extends Component {



    render() {

      const cardsNovos = store.getState().slice(0,4).map( produto => <ItemMenuNovo produto={produto}/> );
      const cardsProcurados = store.getState().slice(0,6).map( produto => <ItemMenuProcurados produto={produto}/> );
      const cardOferta = store.getState().slice(50,51).map( produto => <ItemMenuOferta produto={produto}/> );

        return (

          
            <React.Fragment>

          <Row>
            <Col xl='6'>
              {cardOferta}
            </Col>
            <Col xl='6'>
              <CardDeck>
                {cardsNovos}
              </CardDeck>
            </Col>
            <div >
              <h1 id="sessao-procurados"> Leilões mais procurados </h1>
              <CardDeck>
                {cardsProcurados}
              </CardDeck>
            </div>
          </Row>
            </React.Fragment>
        )
    }
}

export default HomePage;
