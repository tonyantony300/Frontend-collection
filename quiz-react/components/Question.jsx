import React from "react";

export default function Question({
  questionText,
  currentQuestion,
  totalQuestions,
}) {
  return (
    <div className="question-section">
      <div className="question-count">
        <span>Question {currentQuestion + 1}</span>/{totalQuestions}
      </div>
      <div className="question-text">{questionText}</div>
    </div>
  );
}
