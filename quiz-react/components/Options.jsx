
export default function Options({
  answerOptions,
  selectedAnswers,
  handleAnswerSelection,
}) {
  return (
    <div className="answer-section">
      {answerOptions.map((answerOption, index) => (
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
      ))}
    </div>
  );
}
