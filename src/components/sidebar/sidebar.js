import React, { useState } from 'react';
import { Nav } from 'reactstrap';
import SidebarItem from './sidebar-item';

const Sidebar = (props) => {
    const [isOpen, setIsXOpen] = useState(false);
    const toggle = () => setIsXOpen(!isOpen);

    const item = [
        {id: 1, title: 'categoria1', itens: ['item1', 'item2', 'item3']},
        {id: 2,title: 'categoria2', itens: ['item1', 'item2', 'item3']},
        {id: 3,title: 'categoria3', itens: ['item1', 'item2', 'item3']}
    ];

    const itens = item.map(item => <SidebarItem key={item.id} item={item}/>);

  return (
    <div style={{background:'#a1f0a1', height:'100%'}}>
      
      <Nav vertical>
        {itens}
        <hr />
      </Nav>
    </div>
  );
}

export default Sidebar;