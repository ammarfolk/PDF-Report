import data from "./data.json"

const newData = data.data.courseDashboard.modules;


//avrg score





const avrgData: any = newData.map((object) => object.goals);

let newlabelData: string[] = [];
avrgData.forEach((object: any[]) => {
  
  object.map((score) => {
    console.log(score.avgScore);
    newlabelData.push(score.text);
    
  });
});

let newScoreData: number[] = [];
avrgData.forEach((object: any[]) => {
  
  object.map((score) => {
    console.log(score.avgScore);
    newScoreData.push(score.avgScore);
    
  });
});
// console.log(avrgDataTitle);
console.log('avrgscore: ', newScoreData);

const titleData = data.data.courseDashboard.modules;
const subData: string[] = titleData.map((object: any) =>
  object.title ? object.title : null);

const avrgScoreDiagramData = {
	labels: newlabelData ,
	datasets: [
		{
			label: "courses",
			data: newScoreData,
			backgroundColor: ['#00005C', '#3B185F', '#C060A1'],
      hoverOffset: 0,
    }
	],

}  
  

export { avrgScoreDiagramData}    
  
/*    import data from "./data.json";

const colors = [
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
];

function avrgScore() {
  let avrg: any = {};
  const newData = data.data.courseDashboard.modules{goals:any};
  const subData: string[] = newData.map((object: any) =>
    object.title ? object.title : ""
  );

  console.log(avrg);
  for (const avrgdata of subData) {
    avrg[avrgdata] = avrg[avrgdata] ? avrg[avrgdata] +1: 1;
  }
  return avrg;
  
  
}

const avrgStats = avrgScore();
const avrgScoreDiagramData = {
  labels: Object.keys(avrgStats),
  datasets: [
    {
      label: "avrg",
      data: Object.values(avrgStats),
      backgroundColor: colors,
      hoverOffset: 0,
    },
  ],
};

export { avrgScoreDiagramData };
 */