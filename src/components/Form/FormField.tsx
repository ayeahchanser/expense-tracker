import React from "react";
import { DatePicker, Form, Input, TimePicker, Select } from "antd";

const FormItem = Form.Item;
const { Option } = Select;

interface Props {
  field: any;
  form: any;
  hasFeedback: any;
  label: string;
  selectedOptions: string[];
  submitCount: number;
  type: string;
}

const FormField: React.SFC<Props> = ({
  label,
  selectedOptions,
  submitCount,
  type,
  hasFeedback,
  field,
  form,
}) => {
  return (
    <>
      <Input placeholder="Basic usage" />
    </>
  );
};

// export const SelectInputField = FormField(Select);
// export const DatePickerInputField = FormField(DatePicker);
// export const TextInputField = FormField(Input);
// export const TimePickerInputField = FormField(TimePicker);
