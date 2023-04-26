import QuestionWithOption from "./QuestionWithOption";
import Button from "./Button";
import { useState, useEffect } from "react";
import he from "he";

const Quizz = () => {
  const [questions, setQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleOptionClick = (questionId, optionId, e) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: e.target.textContent,
    }));
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function generateOptionArr(options) {
    let optionsArr = [];
    for (let i = 0; i < options.length; i++) {
      optionsArr[i] = { id: i, text: he.decode(options[i]) };
    }
    return shuffleArray(optionsArr);
  }

  useEffect(() => {
    async function fetchQuestions() {
      const res = await fetch("https://opentdb.com/api.php?amount=5");
      const data = await res.json();
      setQuestions(() =>
        data.results.map((q, index) => ({
          id: index + 1,
          question: he.decode(q.question),
          options: generateOptionArr([
            ...q.incorrect_answers,
            q.correct_answer,
          ]),
          answer: q.correct_answer,
        }))
      );
    }
    fetchQuestions();
  }, [submitted]);

  function getAnswersArr() {
    let answersArr = [];
    for (let i = 0; i < 5; i++) {
      answersArr[i] = questions[i].answer;
    }
    return answersArr;
  }

  function getCorrectCount(answersArr) {
    let count = 0;
    for (let i = 0; i < answersArr.length; i++) {
      if (answers[`${i + 1}`] === answersArr[i]) {
        count++;
      }
    }
    return count;
  }

  function handleSubmit() {
    const answersArr = getAnswersArr();

    const correctCount = getCorrectCount(answersArr);

    setSubmitted(!submitted);

    setCorrectAnswers(correctCount);
  }

  function handlePlayAgain() {
    setSubmitted(!submitted);
  }

  return (
    <div className="quizz">
      {submitted ? (
        <div className="playagain">
          <span>You have got {correctAnswers} correct out of 5</span>
          <Button
            name="Play again"
            className="btn-play-again"
            handleClick={handlePlayAgain}
          />
        </div>
      ) : (
        <div className="play">
          {questions.map((question) => (
            <QuestionWithOption
              key={question.id}
              question={question}
              handleOptionClick={handleOptionClick}
              questionId={question.id}
              answers={answers}
            />
          ))}
          <Button
            name="Submit to check"
            className="btn-footer"
            handleClick={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};
export default Quizz;
