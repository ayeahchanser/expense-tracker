import { FC, useEffect, useState } from "react";
import { BatchList } from "../components/Batch/BatchList";
import { getBatches, IBatch } from "../model/Batch/Batch";

export const HomePage: FC = () => {
  const [batches, setBatches] = useState<IBatch[] | null>();

  useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getBatches();
      setBatches(unansweredQuestions);
    };
    doGetUnansweredQuestions();
  }, []);

  return (
    <>
      <BatchList batches={batches || []} />
    </>
  );
};
