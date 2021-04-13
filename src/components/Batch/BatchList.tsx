import { FC } from "react";
import { IBatch } from "../../model/Batch/Batch";
import { BatchComponent } from "./Batch";

interface BatchProps {
  batches: IBatch[];
  renderItem?: (item: IBatch) => JSX.Element;
}
export const BatchList: FC<BatchProps> = ({ batches, renderItem }) => {
  return (
    <>
      {batches.map((batch) =>
        renderItem ? renderItem(batch) : <BatchComponent batch={batch} />
      )}
    </>
  );
};
