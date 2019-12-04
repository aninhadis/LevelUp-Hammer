import React, { useState } from 'react';
import { Collapse, NavbarToggler, Nav } from 'reactstrap';

const ItemToggle = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => setCollapsed(!collapsed);
    const components = props.components;
  
    return (
      <div>
          <NavbarToggler onClick={toggle} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              {components}
            </Nav>
          </Collapse>
      </div>
    );
  }
  
  export default ItemToggle;