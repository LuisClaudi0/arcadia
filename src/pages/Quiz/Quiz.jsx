import { useEffect, useState } from "react"
import useFetch from "../../hooks/useGetData"
import Answers from "../../utils/Answers/Answers"
import Question from "../../utils/Question/Question"
import FetchException from "../../utils/FetchException/FetchException"
import NextButton from "../../components/NextButton/NextButton"

const Quiz = () => {

  const { data, loading, error } = useFetch('https://opentdb.com/api.php?amount=10&category=15&type=multiple')
  let questionsList = data?.results || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [onRespond, setOnRespond] = useState(null)
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const currentQuestion = questionsList[currentIndex];

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    if (currentQuestion) {
      const mixedAnswers = shuffleArray([
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
      ]);
      setShuffledAnswers(mixedAnswers);
    }
  }, [currentIndex, data, currentQuestion]);

  return (
    <div className="content">

      {
        loading || error ? (
          <FetchException loading={loading} error={error} />
        ) : (
          <div className="quiz-content">

            <Question question={currentQuestion.question} />

            <Answers
              answersList={shuffledAnswers}
              onRespond={setOnRespond}
              correctAnswer={currentQuestion.correct_answer}
            />

            <NextButton onRespond={onRespond} 
              setOnRespond={setOnRespond}
              questionsList={questionsList} 
              currentIndex={currentIndex} 
              setCurrentIndex={setCurrentIndex}
            />

          </div>
        )
      }

    </div>
  )
}

export default Quiz