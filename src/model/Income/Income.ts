import { IBase } from "../Base";

export interface Iincome extends IBase {}

export interface IincomeState {
  readonly isLoading: boolean;
  readonly income: Iincome;
  readonly incomes: Iincome[];
  readonly errors: string;
}
