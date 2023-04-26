import React from "react";

const Option = ({ text, optionId, questionId, handleOptionClick, answers }) => {
  return (
    <button
      className="option"
      onClick={(e) => handleOptionClick(questionId, optionId, e)}
      style={{
        backgroundColor: answers[questionId] === text ? "yellow" : "aliceblue",
      }}
    >
      {text}
    </button>
  );
};

export default Option;
