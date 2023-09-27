import React from "react";
import "./styles/styles.css";

interface SelectComponentProps {
  x: string;
}

const SelectComponent: React.FC<SelectComponentProps> = ({}) => {
  return (
    <div className="form-item">
      <label>Favorite Color</label>
      <select className="form-input" style={{ width: "72%" }}>
        <option disabled selected></option>
        <option>Punainen</option>
        <option>Vihreä</option>
        <option>Sininen</option>
      </select>
    </div>
  );
};

export default SelectComponent;
