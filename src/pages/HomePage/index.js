import React, { Component } from 'react';
import {store} from '../../store';



export class HomePage extends Component {


    render() {

        return (
            <React.Fragment>



                {/* <Route path='/' exact="true" render={props => (
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
                
                  <AddTodo AddTodo={this.addTodo}/>
                  <Todo removeTodo={this.removeTodo} tarefas={this.state.tarefas} markComplete={this.markComplete}/>
                
              </React.Fragment>
            </div>
          )}/> */}





                

            </React.Fragment>
        )
    }
}

export default HomePage;
