
export default function Navigation({
  currentQuestion,
  totalQuestions,
  handleAnswerOptionClick,
}) {
  return (
    <div>
      {currentQuestion + 1 < totalQuestions ? (
        <button onClick={handleAnswerOptionClick}>Next</button>
      ) : (
        <button onClick={handleAnswerOptionClick} className="final-submit">
          Submit Answers
        </button>
      )}
    </div>
  );
}
