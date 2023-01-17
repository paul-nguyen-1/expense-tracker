import React, {useState} from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from "./Card";
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021')
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }



  return (
    <div>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <Card className='expenses'>
        <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
    </div>
  )
}

export default Expenses