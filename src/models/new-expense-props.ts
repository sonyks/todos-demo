import { ExpenseItemProps } from "./expense-item-props";

export interface NewExpenseProps {
  onAddExpense: (props: ExpenseItemProps) => void;
}
