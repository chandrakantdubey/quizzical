import React, { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Quizz from "./components/Quizz";

function App() {
  const [start, setStart] = useState(false);

  function handleClick() {
    setStart(!start);
  }

  return (
    <div className="app">
      {start ? <Quizz /> : <LandingPage handleClick={handleClick} />}
    </div>
  );
}

export default App;
