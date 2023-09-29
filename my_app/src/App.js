import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses /Expenses";
function App() {
  const addExpenseHandler = () => {
    console.log("in app js");
  };
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
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
