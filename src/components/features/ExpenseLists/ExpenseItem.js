import React from 'react';

const ExpenseItem = ({ title, cost }) => {
  return (
    <li>
      <div>date</div>
      <h4>{title}</h4>
      <p>${cost}</p>
      <div>
        <button type='button'>Edit</button>
        <button type='button'>Delete</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
