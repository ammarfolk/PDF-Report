import './App.css'
import "chart.js/auto";
import { avrgScoreDiagramData } from "./data/dataexport";
import { Bar, Pie } from "react-chartjs-2";

function App() {
 
  console.log(avrgScoreDiagramData);
  
  


  return (
    <div className="wrapper">
      <h1>pdf report</h1>
      <p>intro/info</p>
      <Bar data={avrgScoreDiagramData} />

 
    </div>
  )
}

export default App
