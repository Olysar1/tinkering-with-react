import { ChangeEvent, useState } from "react";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resetInput: (initialValue?: string) => void;
}

export const useUserInput = (): InputProps => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const resetInput = (initialValue?: string): void => {
    initialValue ? setValue(initialValue) : setValue("");
  };

  const inputProps: InputProps = {
    value: value,
    onChange: handleChange,
    resetInput: resetInput,
  };

  return inputProps;
};
