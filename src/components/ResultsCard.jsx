import React from "react";
import Button from "./Button";
import data from "../data/data.json";
import "./ResultsCard.scss";

const ResultsCard = () => {
  const handleContinue = (event) => {
    console.log("Continue button clicked!", event);
  };

  const calculateAverageScore = () => {
    const totalScore = data.reduce((acc, item) => acc + item.score, 0);
    return Math.round(totalScore / data.length);
  };

  const getCategoryClass = (category) => category.toLowerCase();

  return (
    <section className="results-card" aria-labelledby="results-heading">
      <div className="results-score">
        <h2 id="results-heading">Your Result</h2>
        <div className="score-circle">
          <div className="score">
            <span className="score-value">{calculateAverageScore()}</span>
            <span className="score-out-of">of 100</span>
          </div>
        </div>
        <div className="score-text">
          <h3>Great</h3>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <section className="results-summary" aria-labelledby="summary-heading">
        <h2 id="summary-heading">Summary</h2>

        <ul className="results-list">
          {data.map((item) => (
            <li
              key={item.category}
              className={`result-item ${getCategoryClass(item.category)}`}
            >
              <div className="icon-category">
                <img src={item.icon} alt="" aria-hidden="true" />
                <span className="category">{item.category}</span>
              </div>

              <div className="score" aria-label={`${item.score} out of 100`}>
                {item.score}
                <span className="total" aria-hidden="true">
                  {" "}
                  / 100
                </span>
              </div>
            </li>
          ))}
        </ul>

        <Button text="Continue" onClick={handleContinue} />
      </section>
    </section>
  );
};

export default ResultsCard;
