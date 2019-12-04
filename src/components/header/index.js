import React, { useState } from 'react';
import {
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
import './header.css';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const componentes = (<Nav navbar>
                            <NavItem>
                                {/* <Link href="/components/">Components</Link> */}
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>);

  return (
      <Navbar color="light" style={{width:'100%'}} light expand="md">
          <Row>
              <Col>
                <Link to="/"><img src="img/logo.jpg" width="100" alt="Logo"/></Link>
              </Col>
              <Col>
                <Row className="pesquisa form-group has-search">
                    <Col>
                        <input type="text" className="form-control" placeholder="Search"></input>
                    </Col>
                    <Col>
                        <span className="fa fa-search form-control-feedback"></span>
                    </Col>
                </Row>
              </Col>

              <ItemToggle components={componentes}/>
              <Link to="/category" className="nav-link">categoria</Link>

                {/* <li className="nav-item item"><a href="#" className="nav-link">Leiloar</a></li>
                <li className="nav-item item"><a href="#" className="nav-link">Quem Somos</a></li> */}
                

              <LoginItem/>
          </Row>

        {/* 
            <Col>
                
            </Col>
            <Col>
                
            </Col>
        </Row> */}

        




        {/* <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse> */}
      </Navbar>
  );
}

export default Header;