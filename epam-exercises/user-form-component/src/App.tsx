import { useState } from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";
import SelectComponent from "./components/SelectComponent";
import RadioComponent from "./components/RadioComponent";
import CheckboxComponent from "./components/CheckboxComponent";
import TextareaComponent from "./components/TextareaComponent";

function App() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<number | "">("");
  const [emplayed, setEmployed] = useState<boolean>(false);
  const [favColor, setFavColor] = useState<string>("");
  const [sauces, setSauces] = useState<string[]>([]);
  const [stooge, setStooge] = useState("Larry");
  const [notes, setNotes] = useState<string>("");

  return (
    <div className="App">
      <form>
        <InputComponent title={"First Name"} inputType={"text"} />
        <InputComponent title={"Last Name"} inputType={"text"} />
        <InputComponent title={"Age"} inputType={"text"} />
        <InputComponent title={"Employed"} inputType={"checkbox"} />
        <SelectComponent x={""} />
        <CheckboxComponent
          sauces={["Ketchup", "Mustard", "Mayonnaise", "Guacamole"]}
        />
        <RadioComponent />
        <TextareaComponent />
      </form>
      <div style={{ backgroundColor: "purple" }}>TEST</div>
    </div>
  );
}

export default App;
