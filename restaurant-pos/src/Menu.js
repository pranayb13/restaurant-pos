import React from 'react';
import "./styles/Menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
              <div id="itemsTilesQuantityDiv">
                <button className="quantityChangeButton">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span id="quantityDisplay">0</span>
                <button className="quantityChangeButton"onClick={() => onAddToCart(item)}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
          </ul>
        ))}
      </div>
    </body>
  );
};

export default Menu;
