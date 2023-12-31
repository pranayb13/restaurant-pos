import React, { useState } from 'react';
import TableNumbers from './TableNumbers';
import Menu from './Menu';
import Cart from './Cart';
import Sales from './Sales';
import "./styles/App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons"

const App = () => {
  const [tableNumber, setTableNumber] = useState(null);
  const [tableCarts, setTableCarts] = useState({});
  const [salesPageVisible, setSalesPageVisible] = useState(false);
  const [sales, setSales] = useState([]);

  const handleTableClick = (number) => {
    setTableNumber(number);
  };

  const handleAddToCart = (item) => {
    setTableCarts((prevCarts) => {
      const cart = prevCarts[tableNumber] || [];
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        const updatedCart = cart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        return { ...prevCarts, [tableNumber]: updatedCart };
      } else {
        const updatedCart = [...cart, { ...item, quantity: 1 }];
        return { ...prevCarts, [tableNumber]: updatedCart };
      }
    });
  };

  const handleRemoveItem = (itemId) => {
    setTableCarts((prevCarts) => {
      const updatedCart = (prevCarts[tableNumber] || []).filter((item) => item.id !== itemId);
      return { ...prevCarts, [tableNumber]: updatedCart };
    });
  };

  const handleBackToTables = () => {
    setTableNumber(null);
  };

  const handleSalesClick = () => {
    setSalesPageVisible(true);
  };

  const handlePaid = (totalPrice) => {
    const paidSale = {
      tableNumber,
      totalPrice,
    };
    setSales((prevSales) => [...prevSales, paidSale]);
    setTableCarts((prevCarts) => {
      const updatedCarts = { ...prevCarts };
      delete updatedCarts[tableNumber];
      return updatedCarts;
    });
  };

  const menuItems = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 12 },
    { id: 4, name: 'Item 4', price: 12 },
    { id: 5, name: 'Item 5', price: 12 },
    { id: 6, name: 'Item 6', price: 12 },
    { id: 4, name: 'Item 4', price: 12 },
    { id: 5, name: 'Item 5', price: 12 },
    { id: 6, name: 'Item 6', price: 12 },
    // Add more menu items as needed
  ];

  return (
    <div id="mainDiv"> 
      <nav id = "navbar_items">
        <div id="navbarHeader">
          <h1>Breakaffe</h1>
        </div>
        <div>
          <FontAwesomeIcon id="exitButton" icon={faArrowRightFromBracket} />
        </div>
      </nav>
      {!tableNumber && !salesPageVisible && (
        <TableNumbers onTableClick={handleTableClick} onSalesClick={handleSalesClick} />
      )}
      {tableNumber && (
        <div>
          <div id="backButtonDiv">
            <FontAwesomeIcon onClick={handleBackToTables} icon={faArrowLeft} className="backButton"/>
          </div>
          <Menu items={menuItems} onAddToCart={handleAddToCart} />
          <Cart cartItems={tableCarts[tableNumber] || []} onRemoveItem={handleRemoveItem} onPaid={handlePaid} />
        </div>
      )}
      {salesPageVisible && (
        <div>
          <div>
            <FontAwesomeIcon onClick={() => setSalesPageVisible(false)} icon={faArrowLeft} className="backButton"/>
          </div>
          <Sales sales={sales} />
        </div>
      )}
    </div>
  );
};

export default App;
