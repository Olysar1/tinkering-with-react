import React, { useState } from "react";
import "./styles/styles.css";

interface InputComponentProps {
  title: string;
  inputType: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
  title,
  inputType,
}) => {
  const [inputData, setInputData] = useState();

  return (
    <div className="form-item">
      <label>{title}</label>
      <input className="form-input" type={inputType} placeholder={title} />
    </div>
  );
};

export default InputComponent;
