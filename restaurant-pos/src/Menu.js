import React from 'react';

const Menu = ({ items, onAddToCart }) => {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => onAddToCart(item)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
