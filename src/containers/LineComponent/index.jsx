import { Line } from "react-chartjs-2";

const LineComponent = ({ data }) => {
  return (
    <Line
      data={data}
      width={200}
      height={200}
      options={{
        maintainAspectRatio: false, legend: { display: false },
        scales: {
          xAxes: [{
            type: 'linear', // MANDATORY TO SHOW YOUR POINTS! (THIS IS THE IMPORTANT BIT) 
            display: true, // mandatory
            scaleLabel: {
              display: true, // mandatory
              labelString: 'Month' // optional 
            },
           }], 
          yAxes: [{ // and your y axis customization as you see fit...
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Sells'
            }
         }],
      }}} />
  );
}

export default LineComponent;
