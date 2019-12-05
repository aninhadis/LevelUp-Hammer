import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import './sidebar.css';
import {Link} from 'react-router-dom';




const SidebarItem = (props) => {
    const [isOpen, setIsXOpen] = useState(false);
    const toggle = () => setIsXOpen(!isOpen);

    const { title, itens } = props.item;
    const { navItem, navLink } = props.variations

    const subitens = itens.map(item => <Link to="/category"><NavItem onClick={props.filtro.bind(props, title, item)} style={{paddingLeft:'25px', cursor:'pointer'}}>{item}</NavItem></Link> );

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
