import { ExpenseItemProps } from "../models/expense-item-props";
import { Card } from "./Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.scss";

export const ExpenseItem = ({ date, title, amount }: ExpenseItemProps) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};
