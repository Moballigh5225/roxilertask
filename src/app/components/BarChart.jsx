import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const BarChart = () => {
  const sourceData = [
    {
      label: "Jan",
      value: 32,
    },
    {
      label: "Feb",
      value: 45,
    },
    {
      label: "Mar",
      value: 23,
    },
    {
      label: "Apr",
      value: 13,
    },
    {
      label: "May",
      value: 33,
    },
    {
      label: "Jun",
      value: 93,
    },
    {
      label: "July",
      value: 8,
    },
    {
      label: "Aug",
      value: 91,
    },
    {
      label: "Sept",
      value: 76,
    },
    {
      label: "Oct",
      value: 52,
    },
    {
      label: "Nov",
      value: 29,
    },
    {
      label: "Dec",
      value: 69,
    },
  ];

  return (
    <>
      <Bar
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label: "Sold items",
              data: sourceData.map((data) => data.value),
              backgroundColor: [
                "rgba(43,63,229,0.8)",
                "rgba(250,192,19,0.8)",
                "rgba(253,135,135,0.8)",
              ],
              borderRadius: 5,
            },
          ],
        }}
      />
    </>
  );
};

export default BarChart;
