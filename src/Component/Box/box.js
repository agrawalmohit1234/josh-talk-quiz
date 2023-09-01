import React from "react";

import "./box.css";

const Box = ({ visibility, handleBoxClick }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "1rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            className="visited"
            style={{ width: "20px", height: "20px" }}
          ></div>
          <div>Visited</div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="notVisited"
            style={{ width: "20px", height: "20px" }}
          ></div>
          <div>Not Visited</div>
        </div>
      </div>
      {visibility.map((x, index) => {
        return (
          <div
            key={index}
            className={x === 0 ? "notVisited" : "visited"}
            onClick={() => handleBoxClick(index + 1)}
          >
            <div className="ind">{index + 1}</div>
          </div>
        );
      })}
    </>
  );
};

export default Box;
