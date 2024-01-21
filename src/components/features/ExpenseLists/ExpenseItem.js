import React from 'react';

const ExpenseItem = ({ id, title, cost, getIdHandler }) => {
  const editHandler = () => {
    getIdHandler(id, 'edit');
  };

  const deleteHandler = () => {
    getIdHandler(id, 'delete');
  };
  return (
    <li>
      <div>date</div>
      <h4>{title}</h4>
      <p>${cost}</p>
      <div>
        <button type='button' onClick={editHandler}>
          Edit
        </button>
        <button type='button' onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
