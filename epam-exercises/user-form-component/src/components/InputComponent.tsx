import React, { ChangeEvent } from "react";
import "./styles/styles.css";

interface InputComponentProps {
  isValid?: boolean;
  value: string | boolean;
  title: string;
  inputType: string;
  eventHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  isValid,
  value,
  title,
  inputType,
  eventHandler,
}) => {
  return (
    <div className="form-item">
      <label>{title}</label>
      <input
        style={{ borderColor: !isValid ? "red" : "" }}
        checked={value === true}
        value={value.toString()}
        className="form-input"
        type={inputType}
        placeholder={title}
        onChange={eventHandler}
      />
    </div>
  );
};

export default InputComponent;
