import React, { useState } from 'react';
import styles from './style.module.css';

const ExpenseForm = ({ getTodoValue }) => {
  const [todo, setTodo] = useState('');

  const inputChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getTodoValue(todo);
    setTodo('');
  };
  return (
    <form onSubmit={submitHandler} id={styles['expense-form']}>
      <input
        type='text'
        placeholder='Add todo...'
        value={todo}
        onChange={inputChangeHandler}
      />
      <div className={styles.cost}>
        <p>$</p>
        <input
          type='number'
          placeholder='Cost...'
          value={todo}
          onChange={inputChangeHandler}
        />
      </div>
      <input type='date' value={todo} onChange={inputChangeHandler} />
      <button type='submit'>Add</button>
    </form>
  );
};

export default ExpenseForm;
