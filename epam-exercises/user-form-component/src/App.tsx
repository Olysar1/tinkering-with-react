import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";
import SelectComponent from "./components/SelectComponent";
import RadioComponent from "./components/RadioComponent";
import CheckboxComponent from "./components/CheckboxComponent";
import TextareaComponent from "./components/TextareaComponent";
import { validate } from "./utils/validate";

function App() {
  interface User {
    stooge: string;
    employed: boolean;
    favoriteColor?: string;
    firstName?: string;
    lastName?: string;
    age?: string;
    sauces?: string[];
    notes?: string;
  }

  const [user, setUser] = useState<User | null>(null);
  const [isValidFirstName, setIsValidFirstName] = useState<boolean>(true);
  const [isValidLastName, setIsValidLastName] = useState<boolean>(true);
  const [isValidAge, setIsValidAge] = useState<boolean>(true);
  const [isValidNote, setIsValidNote] = useState<boolean>(true);

  //USER INPUT STATES:
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [employed, setEmployed] = useState<boolean>(false);
  const [favColor, setFavColor] = useState<string>("");
  const [sauces, setSauces] = useState<string[]>([]);
  const [stooge, setStooge] = useState("Larry");
  const [notes, setNotes] = useState<string>("");

  const initialState = {
    stooge: "Larry",
    employed: false,
  };

  let userObject = {
    stooge,
    employed,
    ...(favColor && { favoriteColor: favColor }),
    ...(firstName && { firstName }),
    ...(lastName && { lastName }),
    ...(age && { age: age }),
    ...(sauces.length !== 0 && { sauces }),
    ...(notes && { notes }),
  };

  const stateIsInitial =
    JSON.stringify(initialState) === JSON.stringify(userObject);

  //HANDLERS

  useEffect(() => {
    user && alert(JSON.stringify(user));
  }, [user]);

  const handleReset = (): void => {
    setFirstName("");
    setLastName("");
    setAge("");
    setEmployed(false);
    setFavColor("");
    setSauces([]);
    setStooge("Larry");
    setNotes("");

    setIsValidFirstName(true);
    setIsValidLastName(true);
    setIsValidNote(true);
    setIsValidAge(true);
  };

  const handleSubmit = (userData: User): void => {
    let validationFailed = false;
    //validations
    if (!validate("firstName", firstName)) {
      setIsValidFirstName(false);
      validationFailed = true;
    }
    if (!validate("lastName", lastName)) {
      setIsValidLastName(false);
      validationFailed = true;
    }
    if (!validate("age", age)) {
      setIsValidAge(false);
      validationFailed = true;
    }
    if (!validate("notes", notes)) {
      setIsValidNote(false);
      validationFailed = true;
    }

    //check validations
    if (validationFailed) return;

    setUser(userData);
  };

  const handleFirstName = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!isValidFirstName) setIsValidFirstName(true);
    setFirstName(e.target.value);
  };

  const handleLastName = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!isValidLastName) setIsValidLastName(true);
    setLastName(e.target.value);
  };

  const handleAge = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!isValidAge) setIsValidAge(true);
    setAge(e.target.value);
  };

  const handleEmployed = (): void => {
    setEmployed(!employed);
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
          isValid={isValidFirstName}
          value={firstName}
          title={"First Name"}
          inputType={"text"}
          eventHandler={handleFirstName}
        />
        <InputComponent
          isValid={isValidLastName}
          value={lastName}
          title={"Last Name"}
          inputType={"text"}
          eventHandler={handleLastName}
        />
        <InputComponent
          isValid={isValidAge}
          value={age}
          title={"Age"}
          inputType={"text"}
          eventHandler={handleAge}
        />
        <InputComponent
          value={employed}
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
        <TextareaComponent
          isValid={isValidNote}
          value={notes}
          eventHandler={handleNotes}
        />
      </form>
      <div className="buttons-wrapper">
        <button
          className="button"
          style={{ color: "white", backgroundColor: "#4267B2" }}
          onClick={() => handleSubmit(userObject)}
          disabled={stateIsInitial}
        >
          Submit
        </button>
        <button
          className="button"
          onClick={handleReset}
          disabled={stateIsInitial}
        >
          Reset
        </button>
      </div>
      <div className="json-layout">{JSON.stringify(userObject, null, 7)}</div>
    </div>
  );
}

export default App;
