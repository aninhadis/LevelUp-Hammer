import React, { useState } from 'react';
import { Card, NavItem, NavLink, Collapse } from 'reactstrap';
import './sidebar.css';
import StarRatingComponent from 'react-star-rating-component';

import {Link} from 'react-router-dom';




const SidebarItem = (props) => {
    const [isOpen, setIsXOpen] = useState(false);
    const toggle = () => setIsXOpen(!isOpen);

    const { title, itens } = props.item;
    const { navItem, navLink } = props.variations

    const subitens = itens.map(item => 
        <Card style={{backgroundColor:'#00000000'}}><NavItem  onClick={props.filtro.bind(props, title, item)} style={{paddingLeft:'25px', cursor:'pointer'}}>{(title != "stars")? item : <StarRatingComponent starCount={5} editing={false}  value={item}/>}<Link to="/category" onClick={props.filtro.bind(props, title, item)} className="stretched-link"></Link></NavItem></Card>
    );

    return (
        <div>
            <NavItem className={ navItem }>
                <NavLink className={ navLink } onClick={toggle} style={{cursor:'pointer'}}>{title}</NavLink>
            </NavItem>
            <NavItem>
                <Collapse isOpen={isOpen}>
                    {subitens}
                </Collapse>
            </NavItem>
        </div>
    )
}

export default SidebarItem;
