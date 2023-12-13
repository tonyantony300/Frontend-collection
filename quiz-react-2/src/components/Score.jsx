
export default function Score({ score, totalQuestions, answers, text }) {
  console.log("answers", answers)
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
    <div className="answer-display">
      {answers.map(i => (
        <>
        <div>
          {i.question}
        </div>
        <div>
          {typeof i.answers === "string" ? (
            <div className='score-option'>{i.answers}</div>
            
          ) : (
              i.answers.map(i => (
                <div className='score-option'>{i.answerText}</div>
              ))
          )}
        
        </div>
        </>
      ))}
    </div>
    </div>
  );
}
