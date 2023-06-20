import React from 'react';

const Sales = ({ sales }) => {
  return (
    <div>
      <h1>Sales</h1>
      {sales.length === 0 ? (
        <p>No sales yet</p>
      ) : (
        <ul>
          {sales.map((sale, index) => (
            <li key={index}>
              Table Number: {sale.tableNumber} - Total Price: ${sale.totalPrice}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sales;
