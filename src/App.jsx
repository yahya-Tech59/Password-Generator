import { useState } from "react";
import "./Components/Style.scss";
import { MdDelete } from "react-icons/md";
import {
  number,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./Components/Characters";

const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const handleGeneratorPassword = () => {
    if (!uppercase && !lowercase && !numbers && !symbols) {
      alert("you must select at least one option");
    }

    let characterList = "";
    if (uppercase) {
      characterList += upperCaseLetters;
    }

    if (lowercase) {
      CharacterData += lowerCaseLetters;
    }

    if (numbers) {
      characterList += number;
    }

    if (symbols) {
      characterList += specialCharacters;
    }
  };

  const passwordCreator = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = getRandomIndex(characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
  };

  const getRandomIndex = (limit) => {
    return Math.round(Math.random() * limit);
  };

  return (
    <div className="container">
      <div className="generator">
        <h2 className="__header">Password Generator</h2>
        <div className="__password">
          <button className="generate_password  GenerateBtn">
            <MdDelete />
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="password-length">Password Length</label>
          <input
            type="number"
            name="password-length"
            id="password-length"
            max="20"
            min="7"
          />
        </div>

        <div className="form-group">
          <label htmlFor="uppercase-letters">Include Uppercase Letters</label>
          <input
            type="checkbox"
            name="uppercase-letters"
            id="uppercase-letters"
          />
        </div>

        <div className="form-group">
          <label htmlFor="uppercase-letters">Include Lowercase Letters</label>
          <input
            type="checkbox"
            name="lowercase-letters"
            id="lowercase-letters"
          />
        </div>

        <div className="form-group">
          <label htmlFor="include-numbers">Include Numbers</label>
          <input type="checkbox" name="include-numbers" id="include-numbers" />
        </div>

        <div className="form-group">
          <label htmlFor="include-symbols">Include Symbols</label>
          <input type="checkbox" name="include-symbols" id="include-symbols" />
        </div>
        <button className="generator_btn">Generate New Password</button>
      </div>
    </div>
  );
};

export default App;
