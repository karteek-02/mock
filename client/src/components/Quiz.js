// src/components/Quiz.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of U.S.A?",
    options: ["Washington D.C", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of England?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 1,
  },
  {
    question: "What is the capital of Australia?",
    options: ["Canberra", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Spain?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 3,
  },
  {
    question: "What is the capital of Odisha?",
    options: ["Bhubaneswar", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Bihar?",
    options: ["Patna", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Tamil Nadu?",
    options: ["Chennai", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Maharashtra?",
    options: ["Mumbai", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of U.S.A?",
    options: ["Washington D.C", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of U.S.A?",
    options: ["Washington D.C", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of U.S.A?",
    options: ["Washington D.C", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of U.S.A?",
    options: ["Washington D.C", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of U.S.A?",
    options: ["Washington D.C", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of U.S.A?",
    options: ["Washington D.C", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of U.S.A?",
    options: ["Washington D.C", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },    
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleAnswerSelect = (index) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = index;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setQuizCompleted(true);
  };

  const navigateToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="flex">
      <Sidebar
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        navigateToQuestion={navigateToQuestion}
      />
      <div className="flex-grow p-8">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Quiz App</h1>
          {!quizCompleted ? (
            <>
              <p className="text-lg mb-4">{questions[currentQuestionIndex].question}</p>
              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full py-3 px-4 rounded-lg border-2 ${
                      selectedAnswers[currentQuestionIndex] === index
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex <= 0}
                  className="py-2 px-4 bg-gray-300 text-gray-800 rounded-lg disabled:opacity-50"
                >
                  Previous
                </button>
                {currentQuestionIndex < questions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="py-2 px-4 bg-blue-500 text-white rounded-lg"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="py-2 px-4 bg-green-500 text-white rounded-lg"
                  >
                    Submit
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">
                Your final score is: {score}/{questions.length}
              </p>
              <p className="text-lg mt-4">Congratulations! You have completed the quiz.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
