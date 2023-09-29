import React, { ChangeEvent } from "react";
import "./styles/styles.css";

interface TextareaComponentProps {
  value: string;
  eventHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaComponent: React.FC<TextareaComponentProps> = ({
  value,
  eventHandler,
}) => {
  return (
    <div className="form-item textarea">
      <label>Notes</label>
      <textarea value={value} onChange={eventHandler}></textarea>
    </div>
  );
};

export default TextareaComponent;
