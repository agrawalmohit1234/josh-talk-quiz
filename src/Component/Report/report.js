import React from "react";

import "./report.css";

const Report = ({ quiz, visibility }) => {
  return (
    <>
      <div className="reportNav">
        <div className="reportHeading">Report</div>
      </div>
      <div className="main">
        <div>
          <table>
            <tr>
              <th>Question</th>
              <th>Correct Answer</th>
              <th>Your Answer</th>
            </tr>
            {quiz.map((que) => {
              return (
                <tr>
                  <td>{que.question}</td>
                  <td>{que.correct_answer}</td>
                  <td>{que.user_answer}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <div>
        <div className="reportBold">
          Total Score:{" "}
          {quiz.filter((que) => que.correct_answer === que.user_answer).length}
        </div>
        <div className="reportBold">Total Question: {quiz.length}</div>
        <div className="reportBold">
          Total Question Visited: {visibility.filter((v) => v === 1).length}
        </div>
      </div>
      <div className="thank">Thank You so much</div>
    </>
  );
};

export default Report;
