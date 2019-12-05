import React, { useState } from 'react';
import {
    InputGroup, InputGroupAddon, Button, Input,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col
} from 'reactstrap';
import {Link} from 'react-router-dom';
import ItemToggle from '../item-toggle';
import LoginItem from './login-item';
import ItemDropdown from '../item-toggle/item-dropdown';
import './header.css';
import logo from '../../assets/logo.png';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  const componentes = (<Nav navbar>
                            {/* <Col xl="1"> */}
                            <Row xl='12'>
                                {/* <Row> */}
                                    <Link to="/category">Categoria</Link>
                                    {/* <Col xl="1"> */}
                                        <Link to="/category">Leiloar</Link>
                                    {/* </Col> */}
                                    {/* <Col xl="1"> */}
                                        <Link to="/category">Quem Somos</Link>
                                    {/* </Col> */}
                                {/* </Row> */}

                                <LoginItem/>

                            </Row>
                
              {/* </Col> */}


                               

//                         </Nav>);                

  return (
      <Navbar color="light" className="topbar" light expand="md" style={{flexWrap:'initial', display:'flex'}}>
                <Link to="/"><img src={logo} className="ImgLogo" width="100" alt="Logo"/></Link>

                <ItemDropdown components={componentes}/>

                <Col xl="4">
                    <InputGroup>
                            <Input placeholder="Digite o nome do produto" />
                            <InputGroupAddon addonType="append">
                            <Button><span className="fa fa-search form-control-feedback"></span></Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>

                <Col style={{justifyContent: 'end'}}>
                    <Row>
                        <Link className="item_topbar"to="/category">Categoria</Link>
                        <LoginItem/>
                    </Row>
                    <Row>
                        <Link className="item_topbar"to="/category">Leiloar</Link>
                        <Link className="item_topbar"to="/category">Quem Somos?</Link>
                    </Row>
                </Col>
                

                {/* <Col xl='1'>
                

                </Col>

              <Col xl="4">
                  <Row>
                  <input type="text" className="form-control texto-pesquisa" placeholder="Digite o nome do produto"></input>
                  </Row>
              </Col>

              <Col xl='6'>
                <ItemToggle components={componentes}/>
              </Col> */}

              
      </Navbar>
  );
}

export default Header;