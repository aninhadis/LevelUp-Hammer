import React, { useState } from 'react';

const LoginItem = (props) => {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggle = () => setCollapsed(!collapsed);
    const components = props.components;
  
    return (
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
    );
  }
  
  export default LoginItem;