import { useState } from "react";
import "./App.css";
import { ExpensesFilter } from "./components/Expenses/ExpenseFilter";
import { ExpenseItem } from "./components/Expenses/ExpenseItem";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { ExpenseItemProps } from "./models/expense-item-props";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ] as ExpenseItemProps[];

  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const addExpenseDateHandler = (enteredExpenseDate: ExpenseItemProps) => {
    console.log(enteredExpenseDate);
  };

  const onFilteredExpenses = (selectedYear: number) => {
    const newExpenses = expenses.filter((expense) => {
      return expense.date.getFullYear() === selectedYear;
    });
    setFilteredExpenses(newExpenses);
  };

  return (
    <div className="expenses">
      <NewExpense onAddExpense={addExpenseDateHandler} />
      <ExpensesFilter onFilterExpenses={onFilteredExpenses} />
      {filteredExpenses.map((expense: ExpenseItemProps) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          id={expense.id}
          key={expense.id}
        />
      ))}
    </div>
  );
}

export default App;
