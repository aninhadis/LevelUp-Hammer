import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
// import uuid from 'uuid';
import Header from './components/layout/Header.js';
// import About from  './components/pages/About.js';
// import Oferta from './components/oferta/Oferta';
import CategoriaPage from './pages/CategoriaPage';

import { store, add_data } from "./store";
import DescricaoPage from './pages/DescricaoPage';



class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state= {
      produtos:[],//Lista de produtos que irei salvar ao carregar a página
      produto: {}
    };  
  }

  componentDidMount() {
    store.subscribe(()=>{
      this.setState({
        produtos: store.getState()
      });
    });
    axios.get('https://cors-anywhere.herokuapp.com/https://funil-mock.herokuapp.com/').then(resposta => {
      var data = Object.keys(resposta.data).map(function(key){
        return resposta.data[key];
      })
      //this.setState({produtos: data[0]});
      store.dispatch({
        type: add_data,
        produtos: data[0]
      });
    });
  }

  
  render(){

    return (
      
      <Router>
        <div className = "App" >
          <Header />
          
          {/* <Route path="/about" component={About} /> */}
          <Route path="/category" component={CategoriaPage} />
          <Route path="/description" component={DescricaoPage} />
          {/* <Route path="/description" render={props =>(<CategoriaPage  produtos={this.state.produtos}/>)}/> */}
          {/* <Route path="/category" component={t1} /> */}
        </div> 
      </Router>
    );  
  }


  
}



export default App;
