import { useState } from 'react';
import Header from './components/common/Header';
import ExpenseForm from './components/features/ExpenseForm';
import ExpenseLists from './components/features/ExpenseLists';
import './App.css';

const arr = [
  {
    id: 1,
    title: 'Buy React Native',
    cost: 223,
    date: '2023-10-01',
  },
  {
    id: 2,
    title: 'Some thing',
    cost: 287,
    date: '2023-10-01',
  },
  {
    id: 3,
    title: 'Buy some books',
    cost: 198,
    date: '2023-10-01',
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(arr);
  const [editExpenseData, setEditExpenseData] = useState(null);

  const getExpenseData = (data) => {
    setExpenses([
      { ...data, id: Math.floor(Math.random() * 9999) },
      ...expenses,
    ]);
  };

  const editDeleteHandler = (data) => {
    console.log(data);
    if (data.action === 'edit') {
      const filteredData = expenses.filter((d) => d.id === data.id);
      setEditExpenseData(filteredData[0]);
    }

    if (data.action === 'delete') {
      const filteredData = expenses.filter((d) => d.id !== data.id);
      setExpenses(filteredData);
    }
  };

  const editHandler = (data) => {
    const updatedExpenseArr = expenses.map((d) => {
      if (editExpenseData.id === d.id) {
        return data;
      }
      return d;
    });
    setExpenses(updatedExpenseArr);
    setEditExpenseData(null);
  };

  return (
    <>
      <Header />
      <div className='sm-container'>
        <ExpenseForm
          getData={getExpenseData}
          editExpenseData={editExpenseData}
          editHandler={editHandler}
        />
        <ExpenseLists
          expenses={expenses}
          editDeleteHandler={editDeleteHandler}
        />
      </div>
    </>
  );
};

export default App;
