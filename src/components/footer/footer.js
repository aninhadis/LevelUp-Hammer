import React from 'react';
import {Row,Col} from 'reactstrap';
import PucLogo from '../../assets/logo-puc-minas.png';
import './footer.css';

function Footer () {
    return(
        <footer className="Footer">
            <h1>Hammer</h1>
            <Row >
                <Col xl="9" id="col1-content">
            <h3 style={{color: "#ff6f00"}}>Desenvolvedores:</h3>
                <h5>Ana Flávia Dias Rodrigues</h5>
                <h5>Luiz</h5>
                <h5>Pedro Augusto Moraes Nunes</h5>
                </Col>
                <Col xl="3" id="col2-content">
                    <img src={PucLogo} style={{width:"100px"}}></img>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer 