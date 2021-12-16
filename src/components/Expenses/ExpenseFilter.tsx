import { ExpenseFilterProps } from "../../models/expense-filter-props";
import "./ExpenseFilter.scss";

export const ExpensesFilter = (props: ExpenseFilterProps) => {
  const onSelectedValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = +event.target.value;
    props.onFilterExpenses(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onSelectedValue}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
