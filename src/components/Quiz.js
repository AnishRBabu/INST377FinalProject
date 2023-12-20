import React, { useState } from "react";
import questions from "./questions";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] = useState({});

  const handleResponse = (response) => {
    setUserResponses({
      ...userResponses,
      [currentQuestion]: response,
    });

    setCurrentQuestion(currentQuestion + 1);
  };

  const renderQuestion = () => {
    const categories = Object.keys(questions);

    if (currentQuestion >= 10) {
      return renderResults();
    }

    const currentCategory = categories[currentQuestion % categories.length];
    const categoryQuestions = questions[currentCategory];

    if (
      !categoryQuestions ||
      currentQuestion >= categories.length * categoryQuestions.length
    ) {
      return renderResults();
    }

    const currentQuestionData =
      categoryQuestions[currentQuestion % categoryQuestions.length];

    return (
      <div>
        <h1>{currentQuestionData.question}</h1>
        {currentQuestionData.options.map((option, index) => (
          <button key={index} onClick={() => handleResponse(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  };

  const renderResults = () => {
    const categoryScores = Object.keys(questions).reduce((scores, category) => {
      scores[category] = 0;

      for (let i = 0; i < 10; i++) {
        const response = userResponses[i];
        if (
          response &&
          questions[category][i % questions[category].length].options.includes(
            response
          )
        ) {
          scores[category]++;
        }
      }

      return scores;
    }, {});

    console.log("Category Scores:", categoryScores);

    let maxCount = 0;
    let maxCategory = "";

    Object.keys(categoryScores).forEach((category) => {
      const count = categoryScores[category];

      if (count > maxCount) {
        maxCount = count;
        maxCategory = category;
      }
    });

    console.log("Max Category:", maxCategory);

    return (
      <div>
        <h1>Congratulations!</h1>
        <p>Your needs fit those of a {maxCategory} position!</p>
      </div>
    );
  };

  return <div>{currentQuestion < 10 ? renderQuestion() : renderResults()}</div>;
}

export default Quiz;
