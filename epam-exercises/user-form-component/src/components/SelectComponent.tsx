import React, { ChangeEvent } from "react";
import "./styles/styles.css";

interface SelectComponentProps {
  eventHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({ eventHandler }) => {
  return (
    <div className="form-item">
      <label>Favorite Color</label>
      <select
        onChange={eventHandler}
        name="colors"
        className="form-input"
        style={{ width: "72%" }}
      >
        <option></option>
        <option value={"punainen"}>Punainen</option>
        <option value={"vihreaä"}>Vihreä</option>
        <option value={"sininen"}>Sininen</option>
      </select>
    </div>
  );
};

export default SelectComponent;
