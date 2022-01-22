import { ExpenseItemProps } from "../../models/expense-item-props";
import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.scss";

export const ExpenseItem = ({ date, title, amount }: ExpenseItemProps) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
          <button>Change Title</button>
        </div>
      </Card>
    </li>
  );
};
