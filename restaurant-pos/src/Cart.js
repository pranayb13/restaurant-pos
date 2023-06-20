// import React from 'react';

// const Cart = ({ cartItems, onRemoveItem }) => {
//   const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handleRemoveItem = (itemId) => {
//     onRemoveItem(itemId);
//   };

//   return (
//     <div>
//       <h1>Cart</h1>
//       <ul>
//         {cartItems.map(item => (
//           <li key={item.id}>
//             {item.name} - ${item.price} - Quantity: {item.quantity}
//             <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <h3>Total Price: ${totalPrice}</h3>
//     </div>
//   );
// };

// export default Cart;


import React from 'react';

const Cart = ({ cartItems, onRemoveItem, onPaid }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemoveItem = (itemId) => {
    onRemoveItem(itemId);
  };

  const handlePaid = () => {
    onPaid(totalPrice);
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
      <button onClick={handlePaid}>Paid</button>
    </div>
  );
};

export default Cart;
