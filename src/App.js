import './App.css';
import ExpenseItem from './components/Expense-Item/ExpenseItem';

function App() {

  let expenseObjects = [
    {
      expenseDate: '20 March 2021',
      expenseTitle: 'Car Insurance',
      expenseAmount: 200.90
    },
    {
      expenseDate: '21 March 2021',
      expenseTitle: 'Food',
      expenseAmount: 50.50
    },
    {
      expenseDate: '01 March 2021',
      expenseTitle: 'Cloths',
      expenseAmount: 100.01
    },
    {
      expenseDate: '25 March 2021',
      expenseTitle: 'Fuel',
      expenseAmount: 210.00
    },
    {
      expenseDate: '15 March 2021',
      expenseTitle: 'House  Rent',
      expenseAmount: 500.00
    }
  ];

  return (
    <div>
      
      {
        expenseObjects.map((item)=> {
          return <ExpenseItem values = {item}/>
        })
      }
    </div>
  );
}

export default App;
