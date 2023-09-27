import React from "react";
import "./styles/styles.css";

interface CheckboxComponentProps {
  sauces: string[];
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({ sauces }) => {
  return (
    <div className="form-item form-list-wrapper" style={{ gap: "18%" }}>
      <label>Sauces</label>
      <div className="form-list">
        {sauces.map((sauce) => {
          return (
            <div key={sauce} className="form-list-item">
              <input type="checkbox"></input>
              <label>{sauce}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckboxComponent;
