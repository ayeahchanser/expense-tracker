import { IExpense } from "../Expense/Expense";
import { Iincome } from "../Income/Income";
// import { v4 as uuidv4 } from "uuid";

export interface IBatch {
  id: string;
  startDate: Date;
  endDate: Date;
  expense?: IExpense[];
  incomes?: Iincome[];
}

export interface BatchState {
  readonly isLoading: boolean;
  readonly batch: IBatch;
  readonly batches: IBatch[];
  readonly errors: string;
}

export const BatchData: IBatch[] = [
  {
    id: "7re9",
    startDate: new Date(),
    endDate: new Date(),
    expense: [
      {
        id: "2343",
        amount: 50000,
        description: "Transport",
        createdOn: new Date(),
      },
      {
        id: "9808",
        amount: 500,
        description: "Drink",
        createdOn: new Date(),
      },
    ],
    incomes: [],
  },
  {
    id: "066rt",
    startDate: new Date(),
    endDate: new Date(),
    expense: [
      {
        id: "4656",
        amount: 9000,
        description: "Food",
        createdOn: new Date(),
      },
    ],
    incomes: [],
  },
  {
    id: "009jsd",
    startDate: new Date(),
    endDate: new Date(),
    expense: [
      {
        id: "0076",
        amount: 100,
        description: "Transport",
        createdOn: new Date(),
      },
    ],
    incomes: [],
  },
];

export const getBatches = async (): Promise<IBatch[]> => {
  await wait(500);
  return BatchData.filter((q) => q.expense?.length || [].length > 0);
};

const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getExpenses = async (batchId: string): Promise<IExpense[]> => {
  await wait(500);
  return BatchData.find((batch) => batch.id === batchId)?.expense || [];
};
