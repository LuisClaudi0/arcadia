import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { ScoreContext } from "../../contexts/ScoreContext";

const NextButton = ({onRespond, setOnRespond, questionsList, currentIndex, setCurrentIndex}) => {
  const [redirect, setRedirect] = useState(false);
  const { setScore } = useContext(ScoreContext)

  const handleNextQuestion = () => {
    setOnRespond(null);
    if(currentIndex == 0){
      setScore(0)
    }
    if (currentIndex < questionsList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setRedirect(true)
    }
  };

  if (redirect) {
    return <Navigate to="/results" />;
  }

  return (
    <section className="text-center w-full">
      {onRespond !== null && (
        <button className="next-button" onClick={handleNextQuestion}>
          Avançar
        </button>
      )}
    </section>
  )
}

export default NextButton