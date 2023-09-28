import React from "react";
import "./styles/styles.css";

interface SelectComponentProps {
  x: string;
}

const SelectComponent: React.FC<SelectComponentProps> = ({}) => {
  return (
    <div className="form-item">
      <label>Favorite Color</label>
      <select name="colors" className="form-input" style={{ width: "72%" }}>
        <option></option>
        <option value={"punainen"}>Punainen</option>
        <option value={"vihreaä"}>Vihreä</option>
        <option value={"sininen"}>Sininen</option>
      </select>
    </div>
  );
};

export default SelectComponent;
