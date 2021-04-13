import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { FC } from "react";
import { GiMoneyStack } from "react-icons/gi";
import { IExpense } from "../../model/Expense/Expense";

interface ExpenseProps {
  expense: IExpense;
}

export const Expense: FC<ExpenseProps> = ({ expense }) => {
  return (
    <Card
      hoverable
      className="antd-custom__card"
      style={{ marginBottom: "10px" }}
      bordered={false}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Meta
          title={expense.description}
          avatar={<GiMoneyStack />}
          description={new Date(expense.createdOn).toDateString()}
        />
        <p style={{ marginBlock: "0" }}>{expense.amount}</p>
      </div>
    </Card>
  );
};
