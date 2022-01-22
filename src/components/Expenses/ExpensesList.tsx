import { ExpenseItemProps } from "../../models/expense-item-props";
import { ExpenseListProps } from "../../models/expense-list-props";
import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.scss";

export const ExpenseList = (props: ExpenseListProps) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense: ExpenseItemProps) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          id={expense.id}
          key={expense.id}
        />
      ))}
    </ul>
  );
};
