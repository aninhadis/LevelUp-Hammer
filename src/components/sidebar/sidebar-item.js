import React, { useState } from 'react';
import { NavItem, NavLink, Collapse } from 'reactstrap';
import './sidebar.css';
import {Link} from 'react-router-dom';




const SidebarItem = (props) => {
    const [isOpen, setIsXOpen] = useState(false);
    const toggle = () => setIsXOpen(!isOpen);

    const { title, itens } = props.item;
    const { navItem, navLink } = props.variations

    const subitens = itens.map((item, index) => <Link key={index} to="/category"><div onClick={props.filtro.bind(props, title, item)} style={{paddingLeft:'25px', cursor:'pointer'}}>{item}</div></Link> );

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
