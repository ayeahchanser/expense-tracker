
export interface Batch {
    code: string;
    startDate: Date;
    endDate: Date;
}

export interface BatchState {
    isLoading: boolean;
    batch: Batch;
    batches: Batch[];
}