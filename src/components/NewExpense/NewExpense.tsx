import { ExpenseDate } from "../../models/expense-date";
import { ExpenseItemProps } from "../../models/expense-item-props";
import { NewExpenseProps } from "../../models/new-expense-props";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.scss";

export const NewExpense = (props: NewExpenseProps) => {
  const saveExpenseDateHandler = (enteredExpenseDate: ExpenseDate) => {
    const expenseDate = {
      title: enteredExpenseDate.title,
      amount: enteredExpenseDate.amount,
      date: enteredExpenseDate.date,
      id: Math.random().toString(),
    } as ExpenseItemProps;

    props.onAddExpense(expenseDate);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
};
