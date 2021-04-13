import { FC } from "react";
import { IExpense } from "../../model/Expense/Expense";
import { Expense } from "./Expense";

interface ExpenseProps {
  expenses: IExpense[];
  renderItem?: (item: IExpense) => JSX.Element;
}
export const ExpenseList: FC<ExpenseProps> = ({ expenses, renderItem }) => {
  return (
    <>
      {expenses.map((expense) =>
        renderItem ? renderItem(expense) : <Expense expense={expense} />
      )}
    </>
  );
};
