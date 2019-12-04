import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Collapse } from 'reactstrap';


const SidebarItem = (props) => {
    const [isOpen, setIsXOpen] = useState(false);
    const toggle = () => setIsXOpen(!isOpen);

    const { title, itens } = props.item;
    const { navItem, navLink } = props.variations

    const subitens = itens.map(item => <p>{item}</p> );

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
