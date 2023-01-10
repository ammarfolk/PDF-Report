import './App.css'
import "chart.js/auto";
import { avrgScoreDiagramData } from "./data/dataexport";
import { Bar } from "react-chartjs-2";

function App() {
 
  

  return (
    <div className="wrapper">
      <h1>pdf report</h1>
      <p>intro/info</p>
      <Bar className="chart" data={avrgScoreDiagramData} />
    </div>
  )
}

export default App
