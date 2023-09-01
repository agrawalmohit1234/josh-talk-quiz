import React from "react";

import Box from "../Box/box";
import Question from "../Question/question";
import Clock from "../Clock/clock";

import "./quiz.css";

const Quiz = ({
  visibility,
  handleVisit,
  handleNext,
  handleOption,
  handlePrev,
  quiz,
  currentQue,
  handleBoxClick,
}) => {
  return (
    <div className="container">
      <div className="nav">
        <div className="navbar">
          <div className="navHeading">Josh Talk Quiz</div>
          <div>
            <Clock />
          </div>
        </div>
      </div>
      <hr />
      <div className="middlepart">
        <div className="left">
          <Question
            handleVisit={handleVisit}
            quiz={quiz}
            currentQue={currentQue}
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleOption={handleOption}
          />
        </div>
        <div className="middle"></div>
        <div className="right">
          <Box visibility={visibility} handleBoxClick={handleBoxClick} />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
