import React from "react";
import ResultsCard from "./components/ResultsCard";
import "./styles/_variables.scss";
import "./styles/reset.scss";
import "./styles/fonts.scss";
import "./styles/app.scss";

function App() {
  return (
    <div className="app-container">
      <ResultsCard />
    </div>
  );
}

export default App;
