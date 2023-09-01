import React from "react";
import { Link } from "react-router-dom";

import "./question.css";

const Question = ({
  quiz,
  handleNext,
  handleOption,
  handlePrev,
  currentQue,
}) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="numbering">{currentQue + 1}</div>
        <div className="question">{String(quiz[currentQue]?.question)}</div>
      </div>

      {quiz[currentQue] &&
        quiz[currentQue].option &&
        quiz[currentQue].option.map((op, ind) => {
          return (
            <div style={{ display: "flex" }}>
              <div className="numbering" style={{ backgroundColor: "crimson" }}>
                {ind + 1}
              </div>
              <div
                className={
                  quiz[currentQue] &&
                  quiz[currentQue].option &&
                  quiz[currentQue].user_answer === quiz[currentQue].option[ind]
                    ? "selected"
                    : "option"
                }
                onClick={() => handleOption(ind)}
              >
                {quiz[currentQue] &&
                  quiz[currentQue].option &&
                  quiz[currentQue]?.option[ind]}
              </div>
            </div>
          );
        })}
      <div className="nxtprev">
        <button
          className="npbtn"
          onClick={handlePrev}
          disabled={currentQue === 0}
        >
          Prev
        </button>
        <button
          className="npbtn"
          onClick={handleNext}
          disabled={currentQue === 14}
        >
          Next
        </button>
      </div>
      <Link className="submit" to="/report">
        Submit
      </Link>
    </div>
  );
};

export default Question;
