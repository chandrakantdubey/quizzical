import React, { useState } from "react";
import Question from "./Question";
import Option from "./Option";

const QuestionWithOption = ({
  question,
  handleOptionClick,
  questionId,
  answers,
}) => {
  return (
    <div className="question-with-option">
      <Question question={question.question} number={question.id} />
      <div className="options">
        {question.options.map(({ id: optionId, text }) => (
          <Option
            text={text}
            key={optionId}
            handleOptionClick={handleOptionClick}
            questionId={questionId}
            optionId={optionId}
            answers={answers}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionWithOption;
