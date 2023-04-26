import React from "react";

const Question = ({ question, number }) => {
  return (
    <div className="question">
      {number}. {question}
    </div>
  );
};

export default Question;
