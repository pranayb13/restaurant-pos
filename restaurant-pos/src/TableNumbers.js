import React from 'react';
import "./styles/tableNumber.css";

const TableNumbers = ({ onTableClick, onSalesClick }) => {
  const handleTableClick = (number) => {
    onTableClick(number);
  };

  const handleSalesClick = () => {
    onSalesClick();
  };

  return (
    <div>
      <div>
        <h1 id = "table_number_headings">Table Numbers</h1>
      </div>
      <div id = "table_button_box">
        <button className = "table_button" onClick={() => handleTableClick(1)}>Table 1</button>
        <button className = "table_button" onClick={() => handleTableClick(2)}>Table 2</button>
        <button className = "table_button" onClick={() => handleTableClick(3)}>Table 3</button>
        <button className = "table_button" onClick={() => handleTableClick(4)}>Table 4</button>
        <button className = "table_button" onClick={() => handleTableClick(5)}>Table 5</button>
        <button className = "table_button" onClick={() => handleTableClick(6)}>Table 6</button>
        <button className = "table_button" onClick={() => handleTableClick(7)}>Table 7</button>
        <button className = "table_button" onClick={() => handleTableClick(8)}>Table 8</button>
        <button className = "table_button" onClick={() => handleTableClick(9)}>Table 9</button>
        <button className = "table_button" onClick={() => handleTableClick(10)}>Table 10</button>
        <button className = "table_button" onClick={() => handleTableClick(11)}>Table 11</button>
        <button className = "table_button" onClick={() => handleTableClick(12)}>Table 12</button>
        <button className = "table_button" onClick={() => handleTableClick(13)}>Table 13</button>
        <button className = "table_button" onClick={() => handleTableClick(14)}>Table 14</button>
        <button className = "table_button" onClick={() => handleTableClick(15)}>Table 15</button>
        <button className = "table_button" onClick={() => handleTableClick(16)}>Table 16</button>
        <button className = "table_button" onClick={() => handleTableClick(17)}>Table 17</button>
        <button className = "table_button" onClick={() => handleTableClick(18)}>Table 18</button>
        {/* Add more table buttons as needed */}
      </div>
      <div id ="table_number_sales_button_div">
        <button id ="table_number_sales_button" onClick={handleSalesClick} >Sales</button>
      </div>
    </div>
  );
};

export default TableNumbers;
