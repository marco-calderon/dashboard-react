import { Doughnut } from "react-chartjs-2";

const DoughnutComponent = ({ data }) => {
  return (
    <Doughnut
      data={data}
      width={500}
      height={500}
      options={{ maintainAspectRatio: false }}
    />
  );
}

export default DoughnutComponent;
