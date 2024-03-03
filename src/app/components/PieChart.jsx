import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const PieChart = () => {
  const sourceData = [
    {
      label: "men's clothing",
      value: 32,
    },
    {
      label: "jewelery",
      value: 45,
    },
    {
      label: "electronics",
      value: 23,
    },
    {
      label: "women's clothing",
      value: 23,
    },
  ];

  return (
    <>
      <Pie
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label: "",
              data: sourceData.map((data) => data.value),
              backgroundColor: [
                "rgba(43,63,229,0.8)",
                "rgba(250,192,19,0.8)",
                "rgba(253,135,135,0.8)",
                "rgba(25,135,135,0.8)",
              ],
              borderRadius: 5,
            },
          ],
        }}
      />
    </>
  );
};

export default PieChart;
