import { useState } from "react";
import Question from "./Question";
import Options from "./Options";
import Score from "./Score";
import Navigation from "./Navigation";

import "./Quiz.css";

const questions = [
  {
    questionText: "What does JSX stand for?",
    answerOptions: [
      { answerText: "JavaScript XML", isCorrect: true },
      { answerText: "Java Syntax Extension", isCorrect: false },
      { answerText: "JSON XML", isCorrect: false },
      { answerText: "JavaScript Extension", isCorrect: false },
    ],
  },
  {
    questionText:
      "In React, what is used to pass data to a component from its parent?",
    answerOptions: [
      { answerText: "state", isCorrect: false },
      { answerText: "props", isCorrect: true },
      { answerText: "data", isCorrect: false },
      { answerText: "passData", isCorrect: false },
    ],
  },
  {
    questionText: "Which lifecycle method is called after a component renders?",
    answerOptions: [
      { answerText: "componentDidMount", isCorrect: true },
      { answerText: "componentWillUpdate", isCorrect: false },
      { answerText: "componentRendered", isCorrect: false },
      { answerText: "componentDidRender", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which of the following are valid lifecycle methods in a React class component?",
    answerOptions: [
      { answerText: "componentDidMount", isCorrect: true },
      { answerText: "componentWillUnmount", isCorrect: true },
      { answerText: "componentDidUpdate", isCorrect: true },
      { answerText: "componentRender", isCorrect: false },
    ],
  },
  {
    questionText:
      "In React, which lifecycle method is used for cleanup and resource management?",
    answerOptions: [
      { answerText: "componentDidMount", isCorrect: false },
      { answerText: "componentWillUnmount", isCorrect: true },
      { answerText: "componentDidUpdate", isCorrect: false },
      { answerText: "componentWillUpdate", isCorrect: true },
    ],
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerSelection = (answer) => {
    if (selectedAnswers.includes(answer)) {
      setSelectedAnswers(selectedAnswers.filter((a) => a !== answer));
    } else {
      setSelectedAnswers([...selectedAnswers, answer]);
    }
  };

  const handleAnswerOptionClick = () => {
    const correctAnswers = questions[currentQuestion].answerOptions
      .filter((option) => option.isCorrect)
      .map((option) => option.answerText);

    if (
      selectedAnswers.length === correctAnswers.length &&
      selectedAnswers.every((answer) => correctAnswers.includes(answer))
    ) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswers([]);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="main">
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <div className="content">
          <Question
            questionText={questions[currentQuestion].questionText}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
          />
          <Options
            answerOptions={questions[currentQuestion].answerOptions}
            selectedAnswers={selectedAnswers}
            handleAnswerSelection={handleAnswerSelection}
          />
          <Navigation
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        </div>
      )}
    </div>
  );
}
