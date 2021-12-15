import { ExpenseItemProps } from "../../models/expense-item-props";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.scss";

export const NewExpense = () => {
  const saveExpenseDateHandler = (enteredExpenseDate: any) => {
    const expenseDate = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    } as ExpenseItemProps;

    console.log(expenseDate);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
};
