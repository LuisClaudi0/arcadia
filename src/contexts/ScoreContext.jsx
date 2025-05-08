import { createContext, useState } from "react";

const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(null);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export {ScoreContext, ScoreProvider}