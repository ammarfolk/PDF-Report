import "./App.css"
import "chart.js/auto";
import { avrgScoreDiagramData } from "./data/dataexport";
import { Bar } from "react-chartjs-2";

function App() {
 
  

  return (
    <div className="wrapper">
      <h1 className="title">Azomo PDF Report</h1>
      <p className="text">Service för att generera PDF-rapporter utifrån användardata</p>
      <section className="chart">
      <Bar  data={avrgScoreDiagramData} />
      </section>
      
    </div>
  )
}

export default App
