import React from 'react';
import "./styles/Sales.css"

const Sales = ({ sales }) => {
  return (
    <div id="salesPage">
      <h1 id="salesHeader">Sales</h1>
      {sales.length === 0 ? (
      <p>No sales yet</p>
      ) : (
        <ul>
          {sales.map((sale, index) => (
            <ul key={index}>
              Table Number: {sale.tableNumber} - Total Price: ${sale.totalPrice}
            </ul>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sales;
