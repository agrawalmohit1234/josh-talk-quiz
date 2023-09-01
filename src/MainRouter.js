import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Component/Home/home";
import Quiz from "./Component/Quiz/quiz";
import Report from "./Component/Report/report";

const MainRouter = () => {
  const [visibility, setVisibility] = useState(
    Array.from({ length: 15 }, () => 0)
  );
  const [quiz, setQuiz] = useState([{}]);
  const [currentQue, setCurrentQue] = useState(0);

  useEffect(
    () =>
      fetch(`https://opentdb.com/api.php?amount=15`)
        .then((res) => res.json())
        .then((data) => {
          let quizData = [];
          data.results.forEach((item, ind) => {
            let random = Math.floor(Math.random() * 10) % 3;
            let option = item.incorrect_answers;
            option.splice(random, 0, item.correct_answer);
            quizData[ind] = {
              question: item.question,
              correct_answer: item.correct_answer,
              user_answer: "",
              option: option,
            };
          });
          setQuiz([...quizData]);
        }),
    []
  );

  useEffect(() => {
    visibility[0] = 1;
    setVisibility([...visibility]);
  }, []);

  const handleVisit = (currQue) => {
    visibility[currQue] = 1;
    setVisibility([...visibility]);
  };

  const handleOption = (op) => {
    quiz[currentQue].user_answer = quiz[currentQue].option[op];
    const que = JSON.parse(JSON.stringify(quiz));
    setQuiz([...que]);
  };

  const handlePrev = () => {
    setCurrentQue(currentQue - 1);
    handleVisit(currentQue - 1);
  };

  const handleNext = () => {
    setCurrentQue(currentQue + 1);
    handleVisit(currentQue + 1);
  };

  const handleBoxClick = (currQue) => {
    setCurrentQue(currQue - 1);
    handleVisit(currQue - 1);
  };

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={
            <Quiz
              visibility={visibility}
              handleVisit={handleVisit}
              handleNext={handleNext}
              handleOption={handleOption}
              handlePrev={handlePrev}
              quiz={quiz}
              currentQue={currentQue}
              handleBoxClick={handleBoxClick}
            />
          }
        />
        <Route
          path="/report"
          element={<Report quiz={quiz} visibility={visibility} />}
        />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
