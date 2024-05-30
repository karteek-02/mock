// src/components/Examiner.js
import React, { useState } from 'react';

function Examiner() {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: null,
  });

  const handleInputChange = (e, index) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = e.target.value;
    setCurrentQuestion({ ...currentQuestion, options: newOptions });
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({ question: '', options: ['', '', '', ''], correctAnswer: null });
  };

  const handleQuizSubmit = () => {
    const quiz = { title: quizTitle, questions };
    localStorage.setItem(quizTitle, JSON.stringify(quiz));
    alert('Quiz created successfully!');
    setQuizTitle('');
    setQuestions([]);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create a Quiz</h2>
      <input
        type="text"
        placeholder="Enter quiz title"
        value={quizTitle}
        onChange={(e) => setQuizTitle(e.target.value)}
        className="w-full py-2 px-4 mb-4 border rounded-lg"
      />
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter question"
          value={currentQuestion.question}
          onChange={(e) => setCurrentQuestion({ ...currentQuestion, question: e.target.value })}
          className="w-full py-2 px-4 mb-2 border rounded-lg"
        />
        {currentQuestion.options.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleInputChange(e, index)}
            className="w-full py-2 px-4 mb-2 border rounded-lg"
          />
        ))}
        <select
          value={currentQuestion.correctAnswer}
          onChange={(e) => setCurrentQuestion({ ...currentQuestion, correctAnswer: Number(e.target.value) })}
          className="w-full py-2 px-4 mb-2 border rounded-lg"
        >
          <option value={null}>Select correct answer</option>
          {currentQuestion.options.map((option, index) => (
            <option key={index} value={index}>
              {`Option ${index + 1}`}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddQuestion}
          className="py-2 px-4 bg-blue-500 text-white rounded-lg"
        >
          Add Question
        </button>
      </div>
      <button
        onClick={handleQuizSubmit}
        className="py-2 px-4 bg-green-500 text-white rounded-lg"
      >
        Submit Quiz
      </button>
    </div>
  );
}

export default Examiner;
