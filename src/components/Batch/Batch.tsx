import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { FC } from "react";
import { GiCalendar } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IBatch } from "../../model/Batch/Batch";

interface BatchProps {
  batch: IBatch;
}
export const BatchComponent: FC<BatchProps> = ({ batch }) => {
  return (
    <Link to={`/batch/${batch.id}`}>
      <Card key={batch.id} style={{ marginBottom: ".5rem" }} hoverable>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Meta
            title={
              batch.startDate.toDateString() +
              " / " +
              batch.endDate.toDateString()
            }
            avatar={<GiCalendar />}
            description={new Date().toDateString()}
          />
          <p style={{ marginBlock: "0" }}>{"Total: 5,00 XAF"}</p>
        </div>
      </Card>
    </Link>
  );
};
