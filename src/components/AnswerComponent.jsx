import React,{useState} from 'react';

const AnswerComponent = ({options,setQuestion,correctAnswer,isCorrect,setIsCorrect,setCount}) => {

  

  const handleClick = (chosenAnswer)=>{
    (correctAnswer === chosenAnswer)?setCount((prev)=>prev+1):null;
    setQuestion((prev) => prev + 1);
  }

  return (
    <div className="flex justify-around gap-3 m-3">
      <div className="grid gap-2">
        {options.slice(0, 2).map((eachOption, index) => {
          return (
            <button
              className=""
              key={index}
              onClick={() => handleClick(eachOption)}
            >
              {eachOption}
            </button>
          );
        })}
      </div>
      <div className="grid gap-2">
        {options.slice(2, 4).map((eachOption, index) => {
          return (
            <button
              className=""
              key={index}
              onClick={() => handleClick(eachOption)}
            >
              {eachOption}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AnswerComponent;
