import Header from './components/common/Header';
import ExpenseForm from './components/features/ExpenseForm';
import ExpenseLists from './components/features/ExpenseLists';
import './App.css';

const App = () => {
  const arr = [
    {
      title: 'Buy React Native',
      cost: 223,
      date: '2023-10-01',
    },
    {
      title: 'Some thing',
      cost: 287,
      date: '2023-10-01',
    },
    {
      title: 'Buy some books',
      cost: 198,
      date: '2023-10-01',
    },
  ];

  const getTodoValue = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header />
      <div className='sm-container'>
        <ExpenseForm getTodoValue={getTodoValue} />
        <ExpenseLists expenses={arr} />
      </div>
    </>
  );
};

export default App;
