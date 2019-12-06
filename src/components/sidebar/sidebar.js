import React from 'react';
import { Nav } from 'reactstrap';
import SidebarItem from './sidebar-item';
import {store} from '../../store';

import './sidebar.css';

const Sidebar = (props) => {
    //const [isOpen, setIsXOpen] = useState(false);
    //const toggle = () => setIsXOpen(!isOpen);


    const distinct = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    const colors = store.getState().map(produto => produto['color']).filter(distinct).sort();
    const category = store.getState().map(produto => produto['category']).filter(distinct).sort();
    const brand = store.getState().map(produto => produto['brand']).filter(distinct).slice(0,15).sort();
    const currency = store.getState().map(produto => produto['currency']).filter(distinct).slice(0,15).sort();

    



    const item = [
        {id: 1, title: 'color', itens: colors},
        {id: 2, title: 'category', itens: category},
        {id: 3, title: 'rating', itens: [1,2,3,4,5]},
        {id: 4, title: 'brand', itens: brand},
        {id: 5, title: 'currency', itens: currency}
        // {id: 2, title: 'category', itens: ['Automotive', 'Baby', 'Beauty', 'Books', 'Clothing', 'Computers', 'Eletronics', 'Games', 'Garden', 'Grocery', 'Health', 'Home', 'Industrial', 'Jewelery', 'Kids', 'Movies', 'Music', 'Outdoors', 'Shoes', 'Sports', 'Tools', 'Toys']},
        // {id: 3, title: 'rating', itens: [1,2,3,4,5]},
    ];

    const navStyles = {
      navItem: 'item-button',
      navLink: 'item-link'
    }

    const itens = item.map(item => <SidebarItem filtro={props.filtro} key={item.id} item={item} variations={ navStyles }/>);

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