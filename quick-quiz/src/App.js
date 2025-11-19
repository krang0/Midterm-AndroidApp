import { useState } from "react";
import "./App.css";
import QUESTIONS from "./questions";
import QuestionCard from "./QuestionCard";
import ResultsScreen from "./ResultsScreen";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedOption) => {
    const currentQuestion = QUESTIONS[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const isQuizFinished = currentQuestionIndex >= QUESTIONS.length;

  return (
    <div className="App">
      <h1>Quick Quiz</h1>

      {!isQuizFinished ? (
        <QuestionCard
          question={QUESTIONS[currentQuestionIndex]}
          onAnswerClick={handleAnswerClick}
        />
      ) : (
        <ResultsScreen
          score={score}
          totalQuestions={QUESTIONS.length}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
