import React, { ReactNode } from "react";
import { ChangeEvent } from "react";

interface RadioComponentProps {
  stooges: string[];
  eventHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioComponent: React.FC<RadioComponentProps> = ({
  stooges,
  eventHandler,
}) => {
  return (
    <div className="form-item form-list-wrapper">
      <label>Best Stooge</label>
      <div className="form-list">
        {stooges.map((stooge: string) => {
          return (
            <div key={stooge} className="form-list-item">
              <input
                name="best_stooge"
                type="radio"
                value={stooge}
                onChange={eventHandler}
                defaultChecked={stooge === "Larry"}
              />
              <label>{stooge}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioComponent;
