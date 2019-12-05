import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import categoriaImg from '../../assets/category-icon.png';
import './item.css'

const ItemDropdown = (props) => {
  
const [dropdownOpen, setDropdownOpen] = useState(false);
const toggle = () => setDropdownOpen(prevState => !prevState);
const components = props.components;
  
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle style={{display:'flex', backgroundColor:"rgb(201, 198, 194)"}}className="item-image" caret={false}>
          Categorias
          <img className="imagem" src={categoriaImg} width="100" alt="Logo"/>
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    );
  }
  
  export default ItemDropdown;