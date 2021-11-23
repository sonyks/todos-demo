import { ExpenseDateProps } from "../models/expense-date-props";

export const ExpenseItem = ({ date }: ExpenseDateProps) => {
  return <div>{date.toLocaleString()}</div>;
};
