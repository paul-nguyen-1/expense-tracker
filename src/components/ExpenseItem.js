import "./ExpenseItem.css";

function ExpenseItem() {
const expenseDate = new Date(2022, 12, 15);
const expenseTitle = 'Tuition';
const expenseAmount = 4500.73;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">${expenseAmount}</div>
    </div>
  );
}

export default ExpenseItem;
