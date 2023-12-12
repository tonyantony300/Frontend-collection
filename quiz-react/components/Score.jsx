
export default function Score({ score, totalQuestions }) {
  return (
    <div className="score-section">
      {score >= 3 ? (
        <p>
          You scored <span className="green">{score}</span> out of{" "}
          {totalQuestions}
        </p>
      ) : (
        <p>
          You scored <span className="orange">{score}</span> out of{" "}
          {totalQuestions}
        </p>
      )}
    </div>
  );
}
