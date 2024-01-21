import React from 'react';
import ExpenseItem from './ExpenseItem';
import styles from './style.module.css';

const ExpenseLists = ({ expenses, editDeleteHandler }) => {
  const getIdHandler = (id, action) => {
    editDeleteHandler({ id, action });
  };
  return (
    <ul id={styles['expense-lists']}>
      {expenses.length === 0 && <h3>No expense found!</h3>}
      {expenses && expenses.length
        ? expenses.map((d, idx) => (
            <ExpenseItem
              key={idx}
              id={d.id}
              title={d.title}
              cost={d.cost}
              date={d.date}
              getIdHandler={getIdHandler}
            />
          ))
        : ''}
    </ul>
  );
};

export default ExpenseLists;
