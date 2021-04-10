import { Base } from "../Base";

export interface Expense extends Base {}

export interface ExpenseState {
  isLoading: boolean;
  expense: Expense;
  expenses: Expense[];
}
