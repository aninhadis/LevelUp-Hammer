import React, { useState } from 'react';

const ItemDropdown = (props) => {
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
  
  export default ItemDropdown;