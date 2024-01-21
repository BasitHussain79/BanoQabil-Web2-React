import React, { useEffect, useState } from 'react';
import styles from './style.module.css';

const ExpenseForm = ({ getData, editExpenseData, editHandler }) => {
  const [expenseData, setExpenseData] = useState({
    title: '',
    cost: '',
    date: '',
  });

  useEffect(() => {
    setExpenseData({
      title: editExpenseData?.title ?? '',
      cost: editExpenseData?.cost ?? '',
      date: editExpenseData?.date ?? '',
    });
  }, [editExpenseData]);

  const onChangeHandler = (e) => {
    setExpenseData({
      ...expenseData,
      [e.target.name]: e.target.value,
    });
  };

  // const [title, setTitle] = useState('');
  // const [cost, setCost] = useState('');
  // const [date, setDate] = useState('');

  // const titleHandler = (e) => setTitle(e.target.value);
  // const costHandler = (e) => setCost(e.target.value);
  // const dateHandler = (e) => setDate(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    if (editExpenseData !== null) {
      editHandler({ ...expenseData, id: editExpenseData.id });
    } else {
      getData(expenseData);
    }
  };

  return (
    <form onSubmit={submitHandler} id={styles['expense-form']}>
      <input
        type='text'
        placeholder='Add todo...'
        name='title'
        value={expenseData.title}
        onChange={onChangeHandler}
      />
      <div className={styles.cost}>
        <p>$</p>
        <input
          type='number'
          name='cost'
          value={expenseData.cost}
          onChange={onChangeHandler}
          placeholder='Cost...'
        />
      </div>
      <input
        type='date'
        name='date'
        value={expenseData.date}
        onChange={onChangeHandler}
      />
      <button type='submit'>
        {editExpenseData !== null ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default ExpenseForm;
