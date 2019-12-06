import React from 'react'
import {Link} from 'react-router-dom';
import './Oferta.css';

function Oferta() {
  return (
    <Link to={'/'} className="Oferta">
      <div className="card" style={ { width: "18rem" } }>
        <img src="img/logo.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <a href="#lance" className="lance">Lance</a>
          <span className="nome-produto">Nome do produto</span>
          <a href="#lance" className="btn btn-primary">Dê seu lance</a>
        </div>
      </div>
    </Link>
  );
}

export default Oferta;