import React, { Component } from 'react';
import Oferta from '../../components/oferta/Oferta'
import {store} from '../../store';
import './homepage.css'
import { CardDeck, Row, Col} from 'reactstrap';
import ItemMenuNovo from '../../components/item-menu/item-menu-novos';
import logo from '../../assets/logo.png';
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
              <h1 id="sessao-procurados"> Leiloes mais procurados </h1>
              <CardDeck>
                {cardsProcurados}
              </CardDeck>
            </div>
          </Row>
          <h1>Próximo passo</h1>
              
              

            {/* <div className="container">
              <section className="secao-leiloes">
                <div className="container-destaque">
                  <Oferta/>
                </div>
                <div className="container-novos-leiloes">
                  <h2>Novos Leilões</h2>
                  <div className="container-produtos produtos-novos">
                    <div>100</div>
                    <div>101</div>
                    <div>102</div>
                    <div>103</div>
                  </div>
                </div>
              </section>
              <React.Fragment>
                <Oferta/>
              </React.Fragment>
            </div> */}





                

            </React.Fragment>
        )
    }
}

export default HomePage;
