import { IBase } from "../Base";

export interface IExpense extends IBase {}
export interface IExpenseState {
  readonly isLoading: boolean;
  readonly expense: IExpense;
  readonly expenses: IExpense[];
  readonly errors: string;
}
