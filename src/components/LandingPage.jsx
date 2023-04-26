import React from "react";
import Button from "./Button";

const LandingPage = ({ handleClick }) => {
  return (
    <div className="landing-page">
      <h1>Quizzical</h1>
      <p>Have fun get them all right!!</p>
      <Button
        name="Start Quizz"
        handleClick={handleClick}
        className="btn-start"
      />
    </div>
  );
};

export default LandingPage;
