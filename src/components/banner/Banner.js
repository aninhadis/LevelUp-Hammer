import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Banner.css';

function Banner() {
  return (
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Fluid jumbotron</h1>
            <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
    </div>
  );
}

export default Banner;