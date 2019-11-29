import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Oferta.css';

function Oferta() {
  return (
    <div className="Oferta card" style={ { width: "18rem" } }>
      <a src="img/logo.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <span className="nome-produto">Nome do produto</span>
        <a href="#" className="btn btn-primary">Dê seu lance</a>
      </div>
    </div>
  );
}

export default Oferta;