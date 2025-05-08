import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Quiz from "./pages/Quiz/Quiz"
import P404 from "./pages/P404/P404"
import Results from "./pages/Results/Results"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
      <Route path="/*" element={<P404 />} />
    </Routes>
  )
}

export default App