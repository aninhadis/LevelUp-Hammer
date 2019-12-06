import React, { useState } from 'react';
import { Nav } from 'reactstrap';
import SidebarItem from './sidebar-item';
import './sidebar.css';

const Sidebar = (props) => {
    const [isOpen, setIsXOpen] = useState(false);
    const toggle = () => setIsXOpen(!isOpen);

    const item = [
        {id: 1, title: 'color', itens: ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral",
        "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid",
        "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue",
        "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "grey", "green", "greenyellow", "honeydew", "hotpink",
        "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow",
        "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen",
        "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
        "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid",
        "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown",
        "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue","tan", "teal", 
        "thistle", "tomato", "turquoise","violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen", "sky blue", "mint green"]},
        {id: 2, title: 'category', itens: ['Automotive', 'Baby', 'Beauty', 'Books', 'Clothing', 'Computers', 'Eletronics', 'Games', 'Garden', 'Grocery', 'Health', 'Home', 'Industrial', 'Jewelery', 'Kids', 'Movies', 'Music', 'Outdoors', 'Shoes', 'Sports', 'Tools', 'Toys']},
        {id: 3, title: 'stars', itens: [1,2,3,4,5]},
        {id: 4, title: 'categoria3', itens: ['item1', 'item2', 'item3']},
        {id: 5, title: 'categoria3', itens: ['item1', 'item2', 'item3']},
        {id: 6, title: 'categoria3', itens: ['item1', 'item2', 'item3']},
        {id: 7, title: 'categoria3', itens: ['item1', 'item2', 'item3']},
        {id: 8, title: 'categoria3', itens: ['item1', 'item2', 'item3']}

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