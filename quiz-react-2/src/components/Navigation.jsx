
export default function Navigation({
  currentQuestion,
  totalQuestions,
  handleNextClick,
}) {
  return (
    <div>
      {currentQuestion + 1 < totalQuestions ? (
        <button onClick={handleNextClick}>Next</button>
      ) : (
        <button onClick={handleNextClick} className="final-submit">
          Submit Answers
        </button>
      )}
    </div>
  );
}
