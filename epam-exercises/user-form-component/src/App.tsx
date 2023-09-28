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

  let jsonObject = {
    stooge,
    emplayed,
    ...(favColor && { favoriteColor: favColor }),
    ...(firstName && { name: firstName }),
    ...(lastName && { lastName }),
    ...(age && { age: age }),
    ...(sauces && { sauces }),
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

  const handleEmployed = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmployed(!emplayed);
  };

  // const handleFavColor = ()

  return (
    <div className="App">
      <form>
        <InputComponent
          title={"First Name"}
          inputType={"text"}
          eventHandler={handleFirstName}
        />
        <InputComponent
          title={"Last Name"}
          inputType={"text"}
          eventHandler={handleLastName}
        />
        <InputComponent
          title={"Age"}
          inputType={"text"}
          eventHandler={handleAge}
        />
        <InputComponent
          title={"Employed"}
          inputType={"checkbox"}
          eventHandler={handleEmployed}
        />
        <SelectComponent x={""} />
        <CheckboxComponent
          sauces={["Ketchup", "Mustard", "Mayonnaise", "Guacamole"]}
        />
        <RadioComponent />
        <TextareaComponent />
      </form>
      <div className="json-layout">{JSON.stringify(jsonObject, null, 7)}</div>
    </div>
  );
}

export default App;
