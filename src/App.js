import { useEffect } from "react";
import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState("");
  const textRef = useRef(null);

  let colors = ["#fff00", "#90ee90", "#ffa500", "#ff68ff", "#a9a9e7"];

  const getQuote = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    let randomNum = Math.floor(Math.random() * data.length);
    setQuotes(data[randomNum]);
  };

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    textRef.current.style.color =
      colors[Math.floor(Math.random() * colors.length)];
  }, [quotes]);

  return (
    <div className="App">
      <div className="quote">
        <p ref={textRef}>{quotes.text}</p>
        <p>Author : {quotes.author}</p>
        <div className="btnContainer">
          <button onClick={getQuote} className="btn">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
