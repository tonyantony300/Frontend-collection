import { useState } from "react";
import Question from "./Question";
import Options from "./Options";
import Score from "./Score";
import Navigation from "./Navigation";

import "./Quiz.css";

const questions = [
  {
    type: "choice",
    questionText: "What does JSX stand for?",
    answerOptions: [
      { answerText: "JavaScript XML", isCorrect: true },
      { answerText: "Java Syntax Extension", isCorrect: false },
      { answerText: "JSON XML", isCorrect: false },
      { answerText: "JavaScript Extension", isCorrect: false },
    ],
  },
  { type: "descriptive",
    questionText:
      "In React, what is used to pass data to a component from its parent?",
    answerOptions: [],
  },
  {
    type: "choice",
    questionText: "Which lifecycle method is called after a component renders?",
    answerOptions: [
      { answerText: "componentDidMount", isCorrect: true },
      { answerText: "componentWillUpdate", isCorrect: false },
      { answerText: "componentRendered", isCorrect: false },
      { answerText: "componentDidRender", isCorrect: false },
    ],
  },
  {
    type: "choice",
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
    type: "choice",
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
let answerArray = [];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [text, setText] = useState("");


  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const saveAnswers = (object, text) => {
    // console.log(object);
    if(text){
      answerArray.push({question: object.questionText, answers: text});
    } else {
      answerArray.push({question: object.questionText, answers: object.answerOptions.filter(i => i.isCorrect)})
    }
    //console.log(answerArray);
  }

  const handleAnswerSelection = (answer) => {
    if (selectedAnswers.includes(answer)) {
      //double click removes from the selected answers 
      //Inseated of using splice or some other method, It Just uses filter, wow
      setSelectedAnswers(selectedAnswers.filter((a) => a !== answer));
    } else {
      setSelectedAnswers([...selectedAnswers, answer]);
    }
  };

  const handleText = (text) => {
    setText(text);
  }

  const handleNextClick = () => {
    const correctAnswers = questions[currentQuestion].answerOptions
      .filter((option) => option.isCorrect)
      .map((option) => option.answerText);
    
    if(correctAnswers.length === 0) {
        setScore(score + 1);
        saveAnswers(questions[currentQuestion],text);
    }

    if (
      selectedAnswers.length === correctAnswers.length &&
      selectedAnswers.every((answer) => correctAnswers.includes(answer))
    ) {
      setAnswers(questions[currentQuestion])
      if(answers.length > 0){
        saveAnswers(answers);
      }else {
        saveAnswers(questions[currentQuestion]);
      }
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
        <Score score={score} totalQuestions={questions.length} answers={answerArray} text={text}/>
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
            type={questions[currentQuestion].type}
            handleText={handleText}
          />
          <Navigation
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            handleNextClick={handleNextClick}
            
          />
        </div>
      )}
    </div>
  );
}
