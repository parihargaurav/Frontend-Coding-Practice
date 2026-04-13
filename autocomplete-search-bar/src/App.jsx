/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({}); // for caching the data

  // while dealing with data use async-await

  const fetchData = async () => {
    if (cache[input]) {
      console.log("cache", input);
      setResults(cache[input]);
      return;
    }

    console.log("api", input);
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResults(json?.recipes);
    setCache((prev) => ({ ...prev, [input]: json?.recipes }));
  };
  useEffect(() => {
    const timer = setTimeout(() => fetchData(), 300); // debounce fetchData();
    return () => clearTimeout(timer); // when component unmounts clear the timer
  }, [input]);
  return (
    <>
      <h1>Autocomplete Search Bar</h1>
      <div>
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)} // events
          onBlur={() => setShowResults(false)}
        ></input>
        {showResults && (
          <div className="results-container">
            {results.map((r) => (
              <span className="result" key={r.id}>
                {r.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
