import React from 'react';
import ExpenseItem from './ExpenseItem';
import styles from './style.module.css';

const ExpenseLists = ({ expenses }) => {
  return (
    <ul id={styles['expense-lists']}>
      {expenses &&
        expenses.length &&
        expenses.map((d, idx) => (
          <ExpenseItem key={idx} title={d.title} cost={d.cost} date={d.date} />
        ))}
    </ul>
  );
};

export default ExpenseLists;
