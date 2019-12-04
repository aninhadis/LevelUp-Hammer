import React, { Component } from 'react';
import Oferta from '../../components/oferta/Oferta'
import {store} from '../../store';
import './homepage.css'



export class HomePage extends Component {




    render() {

        return (
            <React.Fragment>
            <div className="container">
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
            </div>





                

            </React.Fragment>
        )
    }
}

export default HomePage;
