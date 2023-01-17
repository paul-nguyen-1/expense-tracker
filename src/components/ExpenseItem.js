import React, { useState } from 'react'
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  let date = props.date;
  let amount = props.amount;

//Click Handler
const [title, setTitle ] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updated!')
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
