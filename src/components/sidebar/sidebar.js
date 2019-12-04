import React, { useState } from 'react';
import { Nav } from 'reactstrap';
import SidebarItem from './sidebar-item';
import './sidebar.css';

const Sidebar = (props) => {
    const [isOpen, setIsXOpen] = useState(false);
    const toggle = () => setIsXOpen(!isOpen);

    const item = [
        {id: 1, title: 'categoria1', itens: ['item1', 'item2', 'item3']},
        {id: 2, title: 'categoria2', itens: ['item1', 'item2', 'item3']},
        {id: 3, title: 'categoria3', itens: ['item1', 'item2', 'item3']}
    ];

    const navStyles = {
      navItem: 'item-button',
      navLink: 'item-link'
    }

    const itens = item.map(item => <SidebarItem key={item.id} item={item} variations={ navStyles }/>);

  return (
    <div className="category-bar">
      
      <Nav vertical>
        {itens}
        <hr />
      </Nav>
    </div>
  );
}

export default Sidebar;