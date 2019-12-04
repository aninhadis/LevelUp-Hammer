import React, { Component } from 'react'
import {Link} from 'react-router-dom';


import './Header.css'

function Header(){
    return(
    <header className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" role="navigation">
            <div className="container">
                <a><img src="img/logo.jpg" width="100" alt="Logo"/></a>
                <div className="pesquisa">
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control" placeholder="Search"></input>
                    </div>
                </div>
                <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                    &#9776;
                </button>
                <div >
                    <ul className="nav navbar-nav flex-row justify-content-end ml-auto">
                        <li className="dropdown order-1">
                            <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-outline-secondary dropdown-toggle">Login <span className="caret"></span></button>
                            <ul className="dropdown-menu dropdown-menu-right mt-2">
                            <li className="px-3 py-2">
                                <form className="form" role="form">
                                        <div className="form-group">
                                            <input id="emailInput" placeholder="Email" className="form-control form-control-sm" type="text" required=""/>
                                        </div>
                                        <div className="form-group">
                                            <input id="passwordInput" placeholder="Password" className="form-control form-control-sm" type="text" required=""/>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                                        </div>
                                        <div className="form-group text-center">
                                            <small><a href="#" data-toggle="modal" data-target="#modalPassword">Forgot password?</a></small>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        {/* <Link to="/">Home</Link> */}
                        <li className="nav-item item"><Link to="/category" className="nav-link">categoria</Link></li>
                        <li className="nav-item item"><a href="#" className="nav-link">Leiloar</a></li>
                        <li className="nav-item item"><a href="#" className="nav-link">Quem Somos</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div id="modalPassword" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Forgot password</h3>
                        <button type="button" className="close font-weight-light" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        <p>Reset your password..</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                        <button className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header 