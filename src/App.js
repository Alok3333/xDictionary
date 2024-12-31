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
  const [wordPre, setWordPre] = useState(false);
  const [err, setErr] = useState("");

  // const handleClickSearch = (e) => {
  //   e.preventDefault();

  //   let filterState = dictionaryState.filter(
  //     (w) => w.word.toLocaleLowerCase() === searchTxt.toLocaleLowerCase()
  //   );
  //   // console.log(filterState, "here");
  //   if (filterState.length > 0) {
  //     setShowDictionaryText(filterState);
  //     setWordPre(true);
  //   } else {
  //     setErr("Word not found in the dictionary.");
  //     setWordPre(false);
  //   }
  // };

  const handleClickSearch = (e) => {
    e.preventDefault();

    if (!searchTxt) {
      setErr("Please enter a word to search.");
      setWordPre(false);
      return;
    }

    let filterState = dictionaryState.filter(
      (w) => w.word.toLocaleLowerCase() === searchTxt.toLocaleLowerCase()
    );

    if (filterState.length > 0) {
      setShowDictionaryText(filterState);
      setWordPre(true);
      setErr(""); // Clear error if found
    } else {
      setErr("Word not found in the dictionary.");
      setWordPre(false);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Dictionary App</h1>
      </div>
      <div>
        <form>
          <input
            type="text"
            value={searchTxt}
            placeholder="Search for a word..."
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button onClick={handleClickSearch}>Search</button>
        </form>
      </div>
      <div>
        <p>
          <b>Defination:</b>
        </p>
        {wordPre ? (
          showDictionaryText.map((item) => (
            <div key={item.word}>
              <p>{item.meaning}</p>
            </div>
          ))
        ) : (
          <p>{err}</p>
        )}
      </div>
    </div>
  );
}

export default App;
