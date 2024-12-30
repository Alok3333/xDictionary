import { useState } from "react";
import "./App.css";

const dictionaryState = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [searchTxt, setSearchTxt] = useState("");
  const [showDictionaryText, setShowDictionaryText] = useState([]);

  const handleClickSearch = (e) => {
    e.preventDefault();

    let filterState = dictionaryState.filter((w) => w.word.toLocaleLowerCase() === searchTxt.toLocaleLowerCase());
    // console.log(filterState, "here");
    setShowDictionaryText(filterState);
  }

  return (
    <div className="App">
      <div>
        <h1>Dictionary App</h1>
      </div>
      <div>
        <form>
          <input type="text" value={searchTxt} placeholder="Search for a word..." onChange={(e) => setSearchTxt(e.target.value)}/>
          <button onClick={handleClickSearch}>Search</button>
        </form>
      </div>
      <div>
        <p>
          <b>Defination:</b>
        </p>
        {showDictionaryText.map((item) => (
          <p key={item.word}>{item.meaning}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
