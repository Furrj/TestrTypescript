import React, { useState } from "react";
import GameLimits from "./GameLimits";

const TestBox: React.FC = () => {
  //Views
  const [beforeQuiz, setBeforeQuiz] = useState<boolean>(true);
  const [startedQuiz, setStartedQuiz] = useState<boolean>(false);
  const [showScore, setShowScore] = useState<boolean>(false);

  //Game Controls
  const [upperLimit, setUpperLimit] = useState<number | string>(0);
  const [lowerLimit, setLowerLimit] = useState<number | string>(0);
  const [timeLimit, setTimeLimit] = useState<number | string>(15);
  const [numLimit, setNumLimit] = useState<number | string>(5);

  //Game Object Data
  const [questions, setQuestions] = useState<object[]>([]);
  const [score, setScore] = useState<number>(0);
  const [results, setResults] = useState<object[]>([]);
  const [operation, setOperation] = useState<string>("+");
  const [name, setName] = useState<string>("");

  //Input Handlers
  const timeLimitInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newValue = parseInt(e.target.value);

    if (isNaN(newValue)) {
      setTimeLimit("");
    } else {
      setTimeLimit(newValue);
    }
  };

  const numLimitInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newValue = parseInt(e.target.value);

    if (isNaN(newValue)) {
      setNumLimit("");
    } else {
      setNumLimit(newValue);
    }
  };

  const lowerLimitInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newValue = parseInt(e.target.value);

    if (isNaN(newValue)) {
      setLowerLimit("");
    } else {
      setLowerLimit(newValue);
    }
  };

  const upperLimitInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newValue = parseInt(e.target.value);

    if (isNaN(newValue)) {
      setUpperLimit("");
    } else {
      setUpperLimit(newValue);
    }
  };

  const operationUpdateHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setOperation(e.target.value);
  };

  const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  return (
    <div className="testBox questionsCont">
      <GameLimits
        upperLimit={upperLimit}
        lowerLimit={lowerLimit}
        timeLimit={timeLimit}
        numLimit={numLimit}
        name={name}
        upperLimitInputHandler={upperLimitInputHandler}
        lowerLimitInputHandler={lowerLimitInputHandler}
        numLimitInputHandler={numLimitInputHandler}
        timeLimitInputHandler={timeLimitInputHandler}
        nameInputHandler={nameInputHandler}
        setName={setName}
        setOperation={setOperation}
      />
    </div>
  );
};

export default TestBox;
