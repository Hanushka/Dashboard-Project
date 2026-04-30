import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

export default function Graphs() {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [12000, 19000, 15000, 22000, 30000],
        backgroundColor: "#e66239",
      },
    ],
  };

  const doughnutData = {
    labels: ["Electronics", "Fashion", "Groceries", "Others"],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ["#e66239", "#00c951", "#00b8db", "#f0b100"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      {/* Bar Graph */}
      <div className="bg-white shadow-md rounded-lg p-6 h-100">
        <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>
        <Bar data={barData} options={options} />
      </div>

      {/* Doughnut Graph */}
      <div className="bg-white shadow-md rounded-lg p-6 h-100 flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold mb-4">Category Breakdown</h2>
        <Doughnut data={doughnutData} options={options} />
      </div>
    </div>
  );
}
