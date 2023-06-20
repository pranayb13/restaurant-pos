


// import React, { useState } from 'react';
// import TableNumbers from './TableNumbers';
// import Menu from './Menu';
// import Cart from './Cart';
// import Sales from './Sales';

// const App = () => {
//   const [tableNumber, setTableNumber] = useState(null);
//   const [tableCarts, setTableCarts] = useState({});
//   const [salesPageVisible, setSalesPageVisible] = useState(false);

//   const handleTableClick = (number) => {
//     setTableNumber(number);
//   };

//   const handleAddToCart = (item) => {
//     setTableCarts((prevCarts) => {
//       const cart = prevCarts[tableNumber] || [];
//       const existingItem = cart.find((cartItem) => cartItem.id === item.id);

//       if (existingItem) {
//         const updatedCart = cart.map((cartItem) =>
//           cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//         );
//         return { ...prevCarts, [tableNumber]: updatedCart };
//       } else {
//         const updatedCart = [...cart, { ...item, quantity: 1 }];
//         return { ...prevCarts, [tableNumber]: updatedCart };
//       }
//     });
//   };

//   const handleRemoveItem = (itemId) => {
//     setTableCarts((prevCarts) => {
//       const updatedCart = (prevCarts[tableNumber] || []).filter((item) => item.id !== itemId);
//       return { ...prevCarts, [tableNumber]: updatedCart };
//     });
//   };

//   const handleBackToTables = () => {
//     setTableNumber(null);
//   };

//   const handleSalesClick = () => {
//     setSalesPageVisible(true);
//   };

//   const menuItems = [
//     { id: 1, name: 'Item 1', price: 10 },
//     { id: 2, name: 'Item 2', price: 15 },
//     { id: 3, name: 'Item 3', price: 12 },
//     // Add more menu items as needed
//   ];

//   return (
//     <div>
//       {!tableNumber && !salesPageVisible && (
//         <TableNumbers onTableClick={handleTableClick} onSalesClick={handleSalesClick} />
//       )}
//       {tableNumber && (
//         <div>
//           <nav>
//             <button onClick={handleBackToTables}>Back to Tables</button>
//           </nav>
//           <Menu items={menuItems} onAddToCart={handleAddToCart} />
//           <Cart cartItems={tableCarts[tableNumber] || []} onRemoveItem={handleRemoveItem} />
//         </div>
//       )}
//       {salesPageVisible && (
//         <div>
//           <nav>
//             <button onClick={() => setSalesPageVisible(false)}>Back to Table Numbers</button>
//           </nav>
//           <Sales />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import TableNumbers from './TableNumbers';
import Menu from './Menu';
import Cart from './Cart';
import Sales from './Sales';

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
    // Add more menu items as needed
  ];

  return (
    <div>
      {!tableNumber && !salesPageVisible && (
        <TableNumbers onTableClick={handleTableClick} onSalesClick={handleSalesClick} />
      )}
      {tableNumber && (
        <div>
          <nav>
            <button onClick={handleBackToTables}>Back to Tables</button>
          </nav>
          <Menu items={menuItems} onAddToCart={handleAddToCart} />
          <Cart cartItems={tableCarts[tableNumber] || []} onRemoveItem={handleRemoveItem} onPaid={handlePaid} />
        </div>
      )}
      {salesPageVisible && (
        <div>
          <nav>
            <button onClick={() => setSalesPageVisible(false)}>Back to Table Numbers</button>
          </nav>
          <Sales sales={sales} />
        </div>
      )}
    </div>
  );
};

export default App;
