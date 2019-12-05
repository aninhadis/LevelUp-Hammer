import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row } from 'reactstrap';
import categoriaImg from '../../assets/category-icon.png';
import './item.css'
import {categoriaStore, add_categoria} from '../../store';
import {Link} from 'react-router-dom';


const ItemDropdown = (props) => {



  const gotoCategoria = (e) =>{
    categoriaStore.dispatch({
      type: add_categoria,
      busca: 'category',
      item: e.currentTarget.textContent
    });
    console.log(e.currentTarget.textContent);
  }


  const categorias = ['Automotive', 'Baby', 'Beauty', 'Books', 'Clothing', 'Computers', 'Eletronics', 'Games', 'Garden', 'Grocery', 'Health', 'Home', 'Industrial', 'Jewelery', 'Kids', 'Movies', 'Music', 'Outdoors', 'Shoes', 'Sports', 'Tools', 'Toys'];
  const itensDropdown = categorias.map(item => <DropdownItem><Link to="/category" onClick={gotoCategoria} >{item}</Link></DropdownItem>);
 
  
const [dropdownOpen, setDropdownOpen] = useState(false);
const toggle = () => setDropdownOpen(prevState => !prevState);
const components = props.components;
  
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle style={{display:'flex', backgroundColor:"rgb(201, 198, 194)", marginLeft:"20px"}}className="item-image" caret={false}>
          <img className="imagem" src={categoriaImg} width="100" alt="Logo"/>
          <span className="item-text">Categorias</span>
        </DropdownToggle>
      <DropdownMenu>
        {itensDropdown}
      {/* <Row onClick={gotoCategoria('Automotive')}>Automotive</Row>
      <DropdownItem>Baby</DropdownItem>
      <DropdownItem>Beauty</DropdownItem>
      <DropdownItem>Books</DropdownItem>
      <DropdownItem>Clothing</DropdownItem>
      <DropdownItem>Computers</DropdownItem>
      <DropdownItem>Eletronics</DropdownItem>
      <DropdownItem>Games</DropdownItem>
      <DropdownItem>Garden</DropdownItem>
      <DropdownItem>Grocery</DropdownItem>
      <DropdownItem>Health</DropdownItem>
      <DropdownItem>Home</DropdownItem>
      <DropdownItem>Industrial</DropdownItem>
      <DropdownItem>Jewelery</DropdownItem>
      <DropdownItem>Kids</DropdownItem>
      <DropdownItem>Movies</DropdownItem>
      <DropdownItem>Music</DropdownItem>
      <DropdownItem>Outdoors</DropdownItem>
      <DropdownItem>Shoes</DropdownItem>
      <DropdownItem>Sports</DropdownItem>
      <DropdownItem>Tools</DropdownItem>
      <DropdownItem>Toys</DropdownItem> */}

{/* 



        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
    );
  }
  
  export default ItemDropdown;