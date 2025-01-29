import { ChangeEvent } from "react";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
export const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
  console.log(event.currentTarget.value);
};
export const renderInput = (name: string, label: string, type: string) => {
  return <Input name={name} label={label} type={type} />;
};
export const renderSelect = (
  items: string[],
  label: string,
  handleChange: (event: any) => void
) => {
  return <Select items={items} label={label} onSelect={handleChange} />;
};

export const renderButton = (
  classes: string,
  label: string,
  handleSubmit: () => void
) => {
  return <Button classes={classes} onClick={handleSubmit} label={label} />;
};
