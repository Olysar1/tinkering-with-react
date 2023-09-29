import { ChangeEvent, useState } from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";
import SelectComponent from "./components/SelectComponent";
import RadioComponent from "./components/RadioComponent";
import CheckboxComponent from "./components/CheckboxComponent";
import TextareaComponent from "./components/TextareaComponent";

function App() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [emplayed, setEmployed] = useState<boolean>(false);
  const [favColor, setFavColor] = useState<string>("");
  const [sauces, setSauces] = useState<string[]>([]);
  const [stooge, setStooge] = useState("Larry");
  const [notes, setNotes] = useState<string>("");

  const handleReset = (): void => {
    setFirstName("");
    setLastName("");
    setAge("");
    setEmployed(false);
    setFavColor("");
    setSauces([]);
    setStooge("Larry");
    setNotes("");
  };

  let jsonObject = {
    stooge,
    emplayed,
    ...(favColor && { favoriteColor: favColor }),
    ...(firstName && { name: firstName }),
    ...(lastName && { lastName }),
    ...(age && { age: age }),
    ...(sauces.length !== 0 && { sauces }),
    ...(notes && { notes }),
  };

  const handleFirstName = (e: ChangeEvent<HTMLInputElement>): void => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e: ChangeEvent<HTMLInputElement>): void => {
    setLastName(e.target.value);
  };

  const handleAge = (e: ChangeEvent<HTMLInputElement>): void => {
    setAge(e.target.value);
  };

  const handleEmployed = (): void => {
    setEmployed(!emplayed);
  };

  const handleFavColor = (e: ChangeEvent<HTMLSelectElement>): void => {
    setFavColor(e.target.value);
  };

  const handleSauces = (sauce: string): void => {
    setSauces((prevSauces: string[]): string[] => {
      const result = prevSauces.includes(sauce)
        ? prevSauces.filter((item) => item !== sauce)
        : [...sauces, sauce];

      return result;
    });
  };

  const handleStooge = (e: ChangeEvent<HTMLInputElement>): void => {
    setStooge(e.target.value);
  };

  const handleNotes = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setNotes(e.target.value);
  };

  return (
    <div className="App">
      <form>
        <InputComponent
          value={firstName}
          title={"First Name"}
          inputType={"text"}
          eventHandler={handleFirstName}
        />
        <InputComponent
          value={lastName}
          title={"Last Name"}
          inputType={"text"}
          eventHandler={handleLastName}
        />
        <InputComponent
          value={age}
          title={"Age"}
          inputType={"text"}
          eventHandler={handleAge}
        />
        <InputComponent
          value={emplayed}
          title={"Employed"}
          inputType={"checkbox"}
          eventHandler={handleEmployed}
        />
        <SelectComponent value={favColor} eventHandler={handleFavColor} />
        <CheckboxComponent
          stateSauces={sauces}
          sauces={["Ketchup", "Mustard", "Mayonnaise", "Guacamole"]}
          eventHandler={handleSauces}
        />
        <RadioComponent
          stateStooge={stooge}
          stooges={["Larry", "Moe", "Curly"]}
          eventHandler={handleStooge}
        />
        <TextareaComponent value={notes} eventHandler={handleNotes} />
      </form>
      <div className="buttons-wrapper">
        <button
          className="button"
          style={{ color: "white", backgroundColor: "#4267B2" }}
        >
          Submit
        </button>
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="json-layout">{JSON.stringify(jsonObject, null, 7)}</div>
    </div>
  );
}

export default App;
