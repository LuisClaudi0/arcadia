import { useState, useEffect } from "react";
import { useContext } from "react";
import { ScoreContext } from "../../contexts/ScoreContext";

const decodeHTML = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const Answers = ({ answersList, correctAnswer, onRespond }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { score, setScore } = useContext(ScoreContext)

  useEffect(() => {
    setSelectedAnswer(null);
  }, [answersList]);

  const handleAnswerClick = (answer) => {
    if (selectedAnswer !== null) return;
      setSelectedAnswer(answer);
    const isCorrect = answer === correctAnswer;
    onRespond(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const getAnswerClass = (answer) => {
    if (!selectedAnswer) return "answer";

    if (answer === correctAnswer && selectedAnswer === correctAnswer) {
      return "answer shadow-green-600";
    }

    if (answer === correctAnswer && selectedAnswer !== correctAnswer) {
      return "answer shadow-green-400";
    }

    if (answer === selectedAnswer && answer !== correctAnswer) {
      return "answer shadow-red-500";
    }

    return "answer opacity-50";
  };

  return (
    <section className="answers">
      {answersList.map((answer, index) => (
        <h2
          key={index}
          onClick={() => handleAnswerClick(answer)}
          className={getAnswerClass(answer)}
        >
          {decodeHTML(answer)}
        </h2>
      ))}
    </section>
  );
};

export default Answers;
