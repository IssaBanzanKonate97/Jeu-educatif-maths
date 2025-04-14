import React, { useState } from "react";

const correctSound = new Audio("/sounds/miaou-bon.mp3");

const MultiplicationQuiz = () => {
  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [mode, setMode] = useState(null);
  const [currentTable, setCurrentTable] = useState(null);
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const generateQuestion = (table) => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = table;
    const correctAnswer = num1 * num2;

    let options = [];
    if (mode === "facile" || mode === "expert") {
      const incorrectAnswers = [
        correctAnswer + 1,
        correctAnswer - 1,
        correctAnswer + 2,
      ].filter((val) => val >= 0);
      options = shuffleArray([correctAnswer, ...incorrectAnswers]);
    }

    setQuestion({
      question: `${num1} x ${num2} = ?`,
      correctAnswer,
      options,
    });
  };

  const generateRandomQuestion = () => {
    const randomTable = tables[Math.floor(Math.random() * tables.length)];
    generateQuestion(randomTable);
  };

  const handleAnswer = (answer) => {
    if (answer === question.correctAnswer) {
      correctSound.play();
      setScore(score + 1);
    }

    setTimeout(() => {
      if (mode === "expert") {
        generateRandomQuestion();
      } else {
        generateQuestion(currentTable);
      }
      setUserAnswer("");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🎓 Jeu des Tables de Multiplication 🐱
      </h1>

      {!mode && (
        <div className="space-y-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Choisis ton mode :</h2>
          <button
            className="bg-green-500 text-white p-4 rounded-lg"
            onClick={() => setMode("facile")}
          >
            Mode Facile (QCM)
          </button>
          <button
            className="bg-yellow-500 text-white p-4 rounded-lg"
            onClick={() => setMode("difficile")}
          >
            Mode Difficile (Réponse Libre)
          </button>
          <button
            className="bg-red-500 text-white p-4 rounded-lg"
            onClick={() => {
              setMode("expert");
              generateRandomQuestion();
            }}
          >
            Mode Expert (Toutes les tables)
          </button>
        </div>
      )}

      {mode && !currentTable && mode !== "expert" && (
        <div className="grid grid-cols-2 gap-4 mt-6">
          {tables.map((table) => (
            <button
              key={table}
              className="bg-purple-500 text-white p-4 rounded-lg"
              onClick={() => {
                setCurrentTable(table);
                generateQuestion(table);
              }}
            >
              Table de {table}
            </button>
          ))}
        </div>
      )}

      {question && (
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-bold mb-4">{question.question}</h2>

          {mode === "facile" || mode === "expert" ? (
            <div className="grid grid-cols-2 gap-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className="bg-blue-500 text-white p-4 rounded-lg"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <div>
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(Number(e.target.value))}
                className="border p-2 rounded w-full mb-4"
              />
              <button
                className="bg-blue-600 text-white p-4 rounded-lg"
                onClick={() => handleAnswer(userAnswer)}
              >
                Valider
              </button>
            </div>
          )}

          <p className="mt-4 text-lg font-semibold">Score : {score}</p>
        </div>
      )}
    </div>
  );
};

export default MultiplicationQuiz;
