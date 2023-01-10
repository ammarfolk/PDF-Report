import './App.css'
import "chart.js/auto";
import data from "./data/data.json";
import { Bar } from "react-chartjs-2";

function App() {
 
    let avrg: String;
const newData = Object.keys(data)

  const avrgData: string[] = newData.map((object) => object);
console.log(avrgData);


  return (
    <div className="wrapper">
      <h1>pdf report</h1>
      <p>intro/info</p>


 
    </div>
  )
}

export default App
