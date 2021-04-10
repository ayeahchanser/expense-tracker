import { Base } from "../Base";

export interface Income extends Base {}

export interface IncomeState {
  isLoading: boolean;
  income: Income;
  incomes: Income[];
}
