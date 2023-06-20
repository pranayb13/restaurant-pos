// import React from 'react';

// const TableNumbers = ({ onTableClick }) => {
//   const tableNumbers = [1, 2, 3, 4, 5]; // Example table numbers

//   return (
//     <div>
//       <h1>Restaurant POS</h1>
//       <h2>Select a table:</h2>
//       <div>
//         {tableNumbers.map(tableNumber => (
//           <button key={tableNumber} onClick={() => onTableClick(tableNumber)}>
//             Table {tableNumber}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TableNumbers;



import React from 'react';

const TableNumbers = ({ onTableClick, onSalesClick }) => {
  const handleTableClick = (number) => {
    onTableClick(number);
  };

  const handleSalesClick = () => {
    onSalesClick();
  };

  return (
    <div>
      <h1>Table Numbers</h1>
      <button onClick={handleSalesClick}>Sales</button>
      <div>
        <button onClick={() => handleTableClick(1)}>Table 1</button>
        <button onClick={() => handleTableClick(2)}>Table 2</button>
        <button onClick={() => handleTableClick(3)}>Table 3</button>
        {/* Add more table buttons as needed */}
      </div>
    </div>
  );
};

export default TableNumbers;
