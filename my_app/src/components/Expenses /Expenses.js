import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  let expensesContent = <p>No expenses found.</p>

  if (props.items.length > 0) {
    expensesContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  return (
    <Card className="expenses">
     {expensesContent}
    </Card>
  );
}
export default Expenses;
