import React, { ChangeEvent } from "react";
import "./styles/styles.css";

interface CheckboxComponentProps {
  sauces: string[];
  eventHandler: (sauce: string) => void;
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  sauces,
  eventHandler,
}) => {
  return (
    <div className="form-item form-list-wrapper" style={{ gap: "18%" }}>
      <label>Sauces</label>
      <div className="form-list">
        {sauces.map((sauce) => {
          return (
            <div key={sauce} className="form-list-item">
              <input
                onClick={() => eventHandler(sauce)}
                type="checkbox"
              ></input>
              <label>{sauce}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckboxComponent;
