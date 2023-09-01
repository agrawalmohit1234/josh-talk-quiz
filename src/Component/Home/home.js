import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  const [userData, setUserData] = useState({ name: "", email: "" });

  const handleName = (e) => {
    userData.name = e.target.value;
    setUserData({ ...userData });
  };

  const handleEmail = (e) => {
    userData.email = e.target.value;
    setUserData({ ...userData });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <>
      <div className="nav">
        <div className="navHeading">Josh Talk</div>
      </div>
      <div className="model">
        <div className="modelbox">
          <div className="title">Join As</div>
          <input
            type="text"
            value={userData.name}
            placeholder="Name"
            className="input"
            onChange={handleName}
          />
          <input
            type="email"
            value={userData.email}
            placeholder="Email"
            className="input"
            onChange={handleEmail}
          />
          <Link
            to="/quiz"
            className="submitButton"
            style={{
              pointerEvents:
                userData.name.length >= 1 && validateEmail(userData.email)
                  ? ""
                  : "none",
              backgroundColor:
                userData.name.length >= 1 && validateEmail(userData.email)
                  ? "#1da1f2"
                  : "",
            }}
          >
            Submit
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
