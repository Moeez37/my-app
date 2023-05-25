import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "./Card";
const data = [
    { id: "0", date: new Date(2202,4,2), title: "Water Pump", price: "$ 2500" },
    { id: "1", date: new Date(2023,4,2), title: "Electric Car", price: "$ 3000" },
    { id: "2", date: new Date(2022,4,2), title: "Laptop", price: "$ 300" },
    { id: "3", date: new Date(2025,4,2), title: "Shoes", price: "$ 400" },
  ];
function Expense(){
return(<Card className="Expense"><ExpenseItem
        date={data[0].date}
        price={data[0].price}
        title={data[0].title}
      />
      <ExpenseItem
        date={data[1].date}
        price={data[1].price}
        title={data[1].title}
      />
      <ExpenseItem
        date={data[2].date}
        price={data[2].price}
        title={data[2].title}
      />
      <ExpenseItem
        date={data[3].date}
        price={data[3].price}
        title={data[3].title}
      />
      <ExpenseItem
        date={data[2].date}
        price={data[2].price}
        title={data[2].title}
      />
      <ExpenseItem
        date={data[1].date}
        price={data[1].price}
        title={data[1].title}
      /></Card>)
    }
    export default Expense;