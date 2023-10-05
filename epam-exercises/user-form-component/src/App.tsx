import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";
import SelectComponent from "./components/SelectComponent";
import RadioComponent from "./components/RadioComponent";
import CheckboxComponent from "./components/CheckboxComponent";
import TextareaComponent from "./components/TextareaComponent";
import { validate } from "./utils/validate";
import { useUserInput } from "./hooks/useUserInput";

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
  const firstName = useUserInput();
  const lastName = useUserInput();
  const age = useUserInput();
  const stooge = useUserInput();
  const [notes, setNotes] = useState<string>("");
  const [employed, setEmployed] = useState<boolean>(false);
  const [favColor, setFavColor] = useState<string>("");
  const [sauces, setSauces] = useState<string[]>([]);

  const initialState = {
    stooge: "Larry",
    employed: false,
  };

  let userObject = {
    stooge: stooge.value,
    employed,
    ...(favColor && { favoriteColor: favColor }),
    ...(firstName.value && { firstName: firstName.value }),
    ...(lastName.value && { lastName: lastName.value }),
    ...(age.value && { age: age.value }),
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
    firstName.resetInput();
    lastName.resetInput();
    age.resetInput();
    stooge.resetInput("Larry");
    setEmployed(false);
    setFavColor("");
    setSauces([]);
    setNotes("");

    setIsValidFirstName(true);
    setIsValidLastName(true);
    setIsValidNote(true);
    setIsValidAge(true);
  };

  const handleSubmit = (userData: User): void => {
    let validationFailed = false;
    //validations
    if (!validate("firstName", firstName.value)) {
      setIsValidFirstName(false);
      validationFailed = true;
    }
    if (!validate("lastName", lastName.value)) {
      setIsValidLastName(false);
      validationFailed = true;
    }
    if (!validate("age", age.value)) {
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

  // event handlers
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

  const handleNotes = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setNotes(e.target.value);
  };

  return (
    <div className="App">
      <form>
        <InputComponent
          isValid={isValidFirstName}
          value={firstName.value}
          title={"First Name"}
          inputType={"text"}
          eventHandler={firstName.onChange}
        />
        <InputComponent
          isValid={isValidLastName}
          value={lastName.value}
          title={"Last Name"}
          inputType={"text"}
          eventHandler={lastName.onChange}
        />
        <InputComponent
          isValid={isValidAge}
          value={age.value}
          title={"Age"}
          inputType={"text"}
          eventHandler={age.onChange}
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
          stateStooge={stooge.value}
          stooges={["Larry", "Moe", "Curly"]}
          eventHandler={stooge.onChange}
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
