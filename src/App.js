import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Todo from './components/Todo.js';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import Header from './components/layout/Header.js';
import About from  './components/pages/About.js';
import Oferta from './components/oferta/Oferta';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      tarefas:[

        // {
        //   id: uuid.v4(),
        //   title: "tarefa 1",
        //   completed: false
        // }
      ]
    };  
  }
  markComplete = (id) => {
    this.setState({
      tarefas: this.state.tarefas.map( itemTarefa => {
        if (itemTarefa.id == id){
          itemTarefa.completed = !itemTarefa.completed;
        }
        return itemTarefa;
      })
    })
  }
  removeTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(resposta => {
      this.setState({
        tarefas: [...this.state.tarefas.filter(
          tarefas => tarefas.id !== id
        )]
      })
    })

  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {title: title, complete: false})
    .then(resposta => {
      this.setState({tarefas: [...this.state.tarefas, resposta.data]})
    })    
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
    .then(resposta => {
      console.log(resposta.data);
      this.setState({tarefas: resposta.data})
    })
  }

  render(){
    return (
      <Router>
        <div className = "App" >
          <Header />
          <Route path='/' render={props => (
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
              {/* <React.Fragment>
                <Oferta/>
                
                  <AddTodo AddTodo={this.addTodo}/>
                  <Todo removeTodo={this.removeTodo} tarefas={this.state.tarefas} markComplete={this.markComplete}/>
                
              </React.Fragment> */}
            </div>
          )}/>
          <Route path="/about" component={About} />
        </div> 
      </Router>
    );  
  }
}

export default App;
