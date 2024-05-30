// src/components/Student.js
import React, { useState } from 'react';
import Quiz from './Quiz';

function Student() {
  const [quizTitle, setQuizTitle] = useState('');
  const [quiz, setQuiz] = useState(null);

  const handleQuizSelection = () => {
    const storedQuiz = JSON.parse(localStorage.getItem(quizTitle));
    if (storedQuiz) {
      setQuiz(storedQuiz);
    } else {
      alert('Quiz not found!');
    }
  };

  return (
    <div>
      {!quiz ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Select a Quiz</h2>
          <input
            type="text"
            placeholder="Enter quiz title"
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
            className="w-full py-2 px-4 mb-4 border rounded-lg"
          />
          <button
            onClick={handleQuizSelection}
            className="py-2 px-4 bg-blue-500 text-white rounded-lg"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <Quiz quiz={quiz} />
      )}
    </div>
  );
}

export default Student;
