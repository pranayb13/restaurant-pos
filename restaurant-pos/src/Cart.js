import React from 'react';
import "./styles/Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cartItems, onRemoveItem, onPaid }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // const handleRemoveItem = (itemId) => {
  //   onRemoveItem(itemId);
  // };

  const handlePaid = () => {
    onPaid(totalPrice);
  };

  return (
    <div id="headerDiv">
      <div id="cartBarTableTop">
          <span id="cartBiggerCircle" onClick={handlePaid}>
            <span id="cartSmallerCircle">
              <FontAwesomeIcon id="scrollUpIcon" icon={faAnglesUp} />
            </span>
          </span>
      </div>
      <div id="priceDiv">
        <span >Total Price: ${totalPrice}</span>
      </div>
      {/* <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Cart;
