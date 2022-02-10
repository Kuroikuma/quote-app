/*import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { randomQuote, authorQuotes } from "./quote.services";
import "./App.css";

function App() {
  useEffect(() => {
    
"Novak Djokovic"
    randomQuote()
      .then((quote) => {
        console.log(quote);
      })
      .catch((error) => {
        console.log(error);
      });
      
    authorQuotes("Novak Djokovic")
      .then((quote) => {
        console.log(quote);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
