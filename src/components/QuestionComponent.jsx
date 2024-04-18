import React, { useState, useEffect } from "react";

import quizQuestions from "../MockData/quizQuestions.json";
import AnswerComponent from "./AnswerComponent";

const QuestionComponent = () => {
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState([]);

  return (
    <div className="m-4">
      {question !== quizQuestions.results.length - 1 ? (
        quizQuestions.results
          .slice(question + 1, question + 2)
          .map((items, index) => {
            return (
              <div key={index} className="box-border h-full w-full p-4 border-4 rounded-xl">
                <h3>{items.question}</h3>
                <AnswerComponent
                  options={items.options}
                  setQuestion={setQuestion}
                  correctAnswer={items.correct_answer}
                  isCorrect={isCorrect}
                  setIsCorrect={setIsCorrect}
                  setCount={setCount}
                />
              </div>
            );
          })
      ) : (
        <React.Fragment className="m-4">
          <h1>Quiz Completed. Your score is {count}.</h1>
          <button onClick={() => setQuestion(0)}>Want to play again?</button>
        </React.Fragment>
      )}
    </div>
  );
};

export default QuestionComponent;
