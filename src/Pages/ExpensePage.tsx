import { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { ExpenseList } from "../components/Expense/ExpenseList";
import { getExpenses } from "../model/Batch/Batch";
import { IExpense } from "../model/Expense/Expense";

interface RouteParams {
  batchId: string;
}

export const ExpensePage: FC<RouteComponentProps<RouteParams>> = ({
  match,
}) => {
  const [expenses, setExpenses] = useState<IExpense[] | null>();

  useEffect(() => {
    const getEnteredExpenses = async () => {
      const batchId = match.params.batchId;
      if (batchId) {
        const enteredExpenses = await getExpenses(batchId);
        setExpenses(enteredExpenses);
      }
    };
    getEnteredExpenses();
  }, [match.params.batchId]);

  return (
    <>
      <ExpenseList expenses={expenses || []} />
    </>
  );
};
