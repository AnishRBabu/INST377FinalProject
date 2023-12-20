import React, { useState, useEffect } from "react";
import questions from "./questions";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] = useState({});
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [questionOrder, setQuestionOrder] = useState([]);

  useEffect(() => {
    const categories = Object.keys(questions);
    const shuffled = categories.sort(() => Math.random() - 0.5);
    setQuestionOrder(shuffled);
    setShuffledQuestions(shuffleQuestions(categories));
  }, []);

  const shuffleQuestions = (categories) => {
    return categories.reduce((acc, category) => {
      const categoryQuestions = questions[category];
      const shuffledCategoryQuestions = [...categoryQuestions].sort(() => Math.random() - 0.5);
      acc[category] = shuffledCategoryQuestions;
      return acc;
    }, {});
  };

  const handleResponse = (response) => {
    setUserResponses({
      ...userResponses,
      [currentQuestion]: response,
    });

    setCurrentQuestion(currentQuestion + 1);
  };

  const renderQuestion = () => {
    if (currentQuestion >= 10) {
      return renderResults();
    }
  
    const currentCategory = questionOrder[currentQuestion % questionOrder.length];
    const categoryQuestions = shuffledQuestions[currentCategory];
  
    if (!categoryQuestions || currentQuestion >= categoryQuestions.length * questionOrder.length) {
      return renderResults();
    }
  
    const currentQuestionData = categoryQuestions[currentQuestion % categoryQuestions.length];
  
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ textAlign: "center" }}>{currentQuestionData.question}</h1>
        {currentQuestionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleResponse(option)}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              margin: "5px 0",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };
  
  const renderResults = () => {
    const categoryScores = Object.keys(shuffledQuestions).reduce((scores, category) => {
      scores[category] = 0;
  
      for (let i = 0; i < 10; i++) {
        const response = userResponses[i];
        if (response && shuffledQuestions[category][i % shuffledQuestions[category].length].options.includes(response)) {
          scores[category]++;
        }
      }
  
      return scores;
    }, {});
  
    let maxCount = 0;
    let maxCategory = "";

    Object.keys(categoryScores).forEach((category) => {
    const count = categoryScores[category];

    if (count > maxCount) {
      maxCount = count;
      maxCategory = category;
    }
    });

    return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", margin: "20px 0" }}>Congratulations!</h1>
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Your needs fit those of a {maxCategory} position!
      </p>
      <p style={{ fontSize: "16px", margin: "20px 0" }}>
        <a href="/" style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>
          Click here to return to the home page
        </a>
      </p>
    </div>
  );
};
return (
    <div style={{ backgroundColor: "antiquewhite", padding: "20px" }}>
      {currentQuestion < 10 ? renderQuestion() : renderResults()}
    </div>
)};
export default Quiz;