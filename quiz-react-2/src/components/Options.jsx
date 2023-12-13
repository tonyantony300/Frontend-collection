
import { useState } from "react";

export default function Options({
  answerOptions,
  selectedAnswers,
  handleAnswerSelection,
  type,
  handleText
}) {

  return (
    <div className="answer-section">
      { type === "choice" ? ( answerOptions.map((answerOption, index) => (
        <div key={index} className="option-div">
          <label className="option-label">
            <input
              type="checkbox"
              name="answer"
              value={answerOption.answerText}
              checked={selectedAnswers.includes(answerOption.answerText)}
              onChange={() => handleAnswerSelection(answerOption.answerText)}
            />
            <span className="option-text">{answerOption.answerText}</span>
          </label>
        </div>
      ))) : (
        <div>
          <textarea name="" id="text" cols="30" rows="10"   onChange={(e) => {handleText(e.target.value)}} ></textarea>
        </div>
      )}
     
    </div>
  );
}
