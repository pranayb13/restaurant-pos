import React from 'react';
import "./styles/Menu.css"

const Menu = ({ items, onAddToCart }) => {
  return (
    <body id="menu">
      <header id="menu_header_div">
        <h1>Menu</h1>
      </header>
      <div id="menu_items_tile">
        {items.map(item => (
          <ul className="menu_items_tile_box" key={item.id}>
              <p>{item.name} - RS. {item.price}</p>
              <button className="menu_items_button"onClick={() => onAddToCart(item)}>Add</button>
          </ul>
        ))}
      </div>
    </body>
  );
};

export default Menu;
