import Card from "./components/Card";
import ExpenseItem from "./components/ExpenseItem";
import './Expenses.css'

function Expenses(props) {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 43.22,
      date: new Date(2020, 2, 4),
    },
    {
      id: "e2",
      title: "new tv",
      amount: 799.12,
      date: new Date(2021, 4, 5),
    },
    {
      id: "e3",
      title: "car insurance",
      amount: 123.45,
      date: new Date(2022, 5, 6),
    },
    {
      id: "e4",
      title: "new Desk",
      amount: 450,
      date: new Date(2023, 6, 7),
    },
  ];
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}
export default Expenses;
