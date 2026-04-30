import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function SalesOverview() {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "This Year",
        data: [
          42000, 53000, 47000, 61000, 72000, 69000, 74000, 82000, 78000, 86000,
          91000, 97000,
        ],
        borderColor: "#e66239",
        backgroundColor: "rgba(230, 98, 57, 0.2)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#e66239",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
      {
        label: "Last Year",
        data: [
          38000, 45000, 47000, 56000, 65000, 63000, 68000, 70000, 69000, 75000,
          80000, 84000,
        ],
        borderColor: "#00c951",
        backgroundColor: "rgba(0, 201, 81, 0.2)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#00c951",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          boxWidth: 10,
        },
      },
      title: {
        display: true,
        text: "Sales Overview",
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `₹${value.toLocaleString()}`,
        },
        title: {
          display: true,
          text: "Sales (INR)",
          font: { weight: "bold" },
        },
      },
    },
  };

  return (
    
    <div className="border border-gray-300 bg-white shadow-md rounded-lg p-6">
      <Line data={data} options={options} />
      <div className="flex justify-end mt-4">
        <button className="bg-[#e66239] text-white px-4 py-2 rounded hover:bg-[#a0300e] transition">
          Show This Year Only
        </button>
      </div>
    </div>
  );
}
