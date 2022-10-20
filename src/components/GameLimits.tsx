import React, { Fragment } from "react";

interface IProps {
  upperLimit: number | string;
  lowerLimit: number | string;
  timeLimit: number | string;
  numLimit: number | string;
  name: string;
  upperLimitInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  lowerLimitInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  timeLimitInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  numLimitInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nameInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setOperation: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const GameLimits: React.FC<IProps> = ({
  upperLimit,
  lowerLimit,
  timeLimit,
  numLimit,
  name,
  upperLimitInputHandler,
  lowerLimitInputHandler,
  timeLimitInputHandler,
  numLimitInputHandler,
  setOperation,
  setName,
}) => {
  const operationInputHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setOperation(e.target.value);
  };

  const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  return (
    <Fragment>
      <div id="gameLimitCard">
        <div className="col-4">
          <div id="rangeCard1">
            <div>
              Range:{" "}
              <input
                value={lowerLimit}
                onChange={lowerLimitInputHandler}
                type="number"
                name="lowerRange"
                className="text-center gameLimitsForm"
                required
              />{" "}
              to{" "}
              <input
                value={upperLimit}
                onChange={upperLimitInputHandler}
                type="number"
                name="upperRange"
                className="text-center gameLimitsForm mb-3"
                required
              />
            </div>
            <div>
              Time Limit (s):{" "}
              <input
                onChange={timeLimitInputHandler}
                value={timeLimit}
                type="number"
                name="timeLimit"
                className="text-center gameLimitsForm mb-3"
                required
              />
            </div>
            <div>
              Number Of Questions:{" "}
              <input
                onChange={numLimitInputHandler}
                value={numLimit}
                type="number"
                name="numLimit"
                className="text-center gameLimitsForm"
                required
              />
            </div>
          </div>
        </div>
        <div className="col-4">
          Operation:{" "}
          <select name="operation" onChange={operationInputHandler}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="/">/</option>
          </select>
        </div>
        <div className="col-4">
          Name: <input onChange={nameInputHandler} type="text" id="nameInput" />
        </div>
      </div>
      <div>
        <button id="startBtn" className="mt-3 btn btn-success">
          Start
        </button>
      </div>
    </Fragment>
  );
};

export default GameLimits;
