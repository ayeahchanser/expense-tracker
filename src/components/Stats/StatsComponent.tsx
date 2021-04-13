import { Card } from "antd";
import { FC } from "react";

export const StatsComponent: FC = () => {
  return (
    <Card
      bordered={false}
      style={{
        marginBottom: "5px",
        width: "260px",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <h5>THIS MONTH</h5>
      <p>{`$2, 480`}</p>
    </Card>
  );
};
