import "./ExpenseItem.css";
import Card from "../UI/Card"

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="Expense-Item">
      <div className="Expense-Item-Date">
        <div className="Expense-Item-Date-Month">{month}</div>
        <div className="Expense-Item-Date-Year">{year}</div>
        <div className="Expense-Item-Date-Day">{day}</div>
      </div>
      <div className="Expense-Item-Title">
        <h2>{props.title}</h2>
      </div>
      <div className="Expense-Item-Price">{props.price}</div>
    </Card>
  );
}
export default ExpenseItem;
