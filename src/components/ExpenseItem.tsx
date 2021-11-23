import { ExpenseItemProps } from "../models/expense-item-props";
import "./ExpenseItem.scss";

export const ExpenseItem = ({ date, title, amount }: ExpenseItemProps) => {
  return (
    <div className="expense-item">
      <div>{date.toLocaleString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};
