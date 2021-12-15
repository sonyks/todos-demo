import { ExpenseDate } from "./expense-date";

export interface ExpenseFormProps {
  onSaveExpenseData: (props: ExpenseDate) => void;
}
