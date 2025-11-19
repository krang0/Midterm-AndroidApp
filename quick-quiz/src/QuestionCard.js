import React from "react";

function QuestionCard({ question, onAnswerClick }) {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>

      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerClick(option)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
