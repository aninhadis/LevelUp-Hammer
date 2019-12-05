import React, { useState } from 'react';
import {
    InputGroup, InputGroupAddon, Button, Input,
  Collapse,
  Navbar,
  Container,
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
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  const components = props.components;


  const pesquisa = (
    // <Col xl="7">
        <InputGroup style = {{paddingRight:'70px', paddingLeft:'70px', paddingTop:'16px', paddingBottom:'16px', maxWidth: '700px'}}>
                <Input placeholder="Digite o nome do produto" />
                <InputGroupAddon addonType="append">
                <Button><span className="fa fa-search form-control-feedback"></span></Button>
            </InputGroupAddon>
        </InputGroup>
    // </Col>

  );

  const componentes = (<Collapse>
        <Link className="item_topbar"to="/category">Leiloar</Link>
    </Collapse>);
                                        

  return (
      <Navbar color="light" className="topbar" light expand="md" style={{display:'flex'}}>
          <Link to="/"><img src={logo} className="ImgLogo" width="100" alt="Logo"/></Link>
            <ItemDropdown className="mr-auto" components={componentes}/>
            <NavbarToggler onClick={toggle} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
          {pesquisa}
            <Nav className="mr-auto" >
                <Link className="item_topbar"to="/category">Leiloar</Link>
                <Link className="item_topbar"to="/category">Quem Somos?</Link>
            </Nav>
            <LoginItem/>
          </Collapse>
              
      </Navbar>
  );
}

export default Header;