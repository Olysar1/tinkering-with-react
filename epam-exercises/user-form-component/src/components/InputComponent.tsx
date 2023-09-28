import React, { ChangeEvent } from "react";
import "./styles/styles.css";

interface InputComponentProps {
  title: string;
  inputType: string;
  eventHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  title,
  inputType,
  eventHandler,
}) => {
  return (
    <div className="form-item">
      <label>{title}</label>
      <input
        className="form-input"
        type={inputType}
        placeholder={title}
        onChange={eventHandler}
      />
    </div>
  );
};

export default InputComponent;
