import React, { ChangeEvent } from "react";
import "./styles/styles.css";

interface TextareaComponentProps {
  isValid: boolean;
  value: string;
  eventHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaComponent: React.FC<TextareaComponentProps> = ({
  isValid,
  value,
  eventHandler,
}) => {
  return (
    <div className="form-item textarea">
      <label>Notes</label>
      <textarea
        style={{ borderColor: !isValid ? "red" : "" }}
        value={value}
        onChange={eventHandler}
      ></textarea>
    </div>
  );
};

export default TextareaComponent;
