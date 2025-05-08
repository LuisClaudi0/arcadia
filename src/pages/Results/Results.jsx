import { useContext } from "react";
import { ScoreContext } from "../../contexts/ScoreContext";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useGetData";

const Results = () => {
  const { score } = useContext(ScoreContext);

  const { data, loading, error } = useFetch("/assets/congrats.json");

  if (loading) return <p className="text-white text-center mt-10 text-2xl">Loading...</p>;
  if (error) return <p className="text-red-400 text-center mt-10 text-2xl">Something went wrong!</p>;

  const congratsData = data?.data || [];

  let index;
  if (score >= 0) index = 0;
  if (score > 3) index = 1;
  if (score > 7) index = 2;
  if (score == null) index = 3

  const currentCongrats = congratsData[index];

  return (
    <div className="results-container">
      <img
        src={`${currentCongrats?.img || ""}`}
        className={`congrats-img ${currentCongrats?.shadow || ""}`}
        alt="Congrats Mario"
      />

      <section className="text-center lg:w-2/5 w-4/5 flex flex-col items-center lg:mt-0">
        {score !== null && score !== undefined && (
          <h1 className="font-bold text-4xl">Score: {score}</h1>
        )}

        <h1 className="font-bold text-xl mb-5">{currentCongrats?.title}</h1>

        <h2>{currentCongrats?.text}</h2>

        <Link to="/quiz" className="home-content__link mt-10 lg:w-2/4 w-3/4 bg-zinc-600 hover:bg-zinc-500">
          {score !== null ? "Play again" : "Play now"}
        </Link>
      </section>
    </div>
  );
};

export default Results;
