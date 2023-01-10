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


const avrgScoreDiagramData = {
	labels: newlabelData ,
	datasets: [
		{
			label: "Course",
			data: newScoreData,
			backgroundColor: ['#00005C', '#3B185F', '#C060A1', '#F0CAA3', '#DC3535', '#FFE15D', '#FF8FB1'],
			borderColor: '#3c2f2f'
		}
	],
  options: {
    responsive:true,
    maintainAspectRatio: false
    
}
}  
  

export { avrgScoreDiagramData}    
  
/*     for (const categoryTypeName of categoryData) {
      categoryCount[categoryTypeName] = categoryCount[categoryTypeName]
        ? categoryCount[categoryTypeName] + 1
        : 1;
    }
    return categoryCount; */
  
  
/*   const categoryStats = avrgScore();
  const ByCategoryData = {
    labels: Object.keys(categoryStats),
    datasets: [
      {
        label: "Winners by category",
        data: Object.values(categoryStats),
        backgroundColor: colors,
        hoverOffset: 0,
      },
    ],
  }; */