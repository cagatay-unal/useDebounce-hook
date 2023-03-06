import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

const DATA_LIST = [
  "Luke Skywalker",
  "C-3PO",
  "R2-D2",
  "Darth Vader",
  "Leia Organa",
  "Owen Lars",
  "Beru Whitesun lars",
  "R5-D4",
  "Biggs Darklighter",
  "Obi-Wan Kenobi",
];

function App() {
  const [results, setResults] = useState([]);
  const [text, setText] = useState("");

  const debounce = useDebounce(text, 500);

  useEffect(() => {
    const data = DATA_LIST.filter((el) => el.toLowerCase().includes(debounce));
    setResults(data);
  }, [debounce]);

  return (
    <div className="app">
      <h1>search</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="search-result">
        {results.length > 0 ? (
          results.map((item, i) => (
            <div key={i} className="result-item">
              {item}
            </div>
          ))
        ) : (
          <p>No Result</p>
        )}
      </div>
    </div>
  );
}

export default App;
