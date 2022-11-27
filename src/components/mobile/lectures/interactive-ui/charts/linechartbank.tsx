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
import { colors } from "../../../../../config/colorPalette";
import { Totals } from "../../../../../domain/analytics/totals";
import { BankingSystem } from "../../../../../domain/banking-system";
import ChartContainer from "./chart-container";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Accounts",
    },
  },
};

export default function LineChart({ bank }) {
  const selectedBank = BankingSystem.getBankById(bank.cardInfo.id);
  const totals = Totals.getTotalAssetsAndReserves(selectedBank);
  const deposits = [0];
  deposits.push(totals);
  const labels = deposits.map((n) => "");
  const data = {
    labels,
    datasets: [
      {
        label: "Credit",
        data: deposits,
        borderColor: colors.charts.qualitative[1],
        backgroundColor: colors.charts.qualitative[1],
      },
      {
        label: "Reserves",
        data: deposits.map((d) => d - 5),
        borderColor: colors.charts.qualitative[2],
        backgroundColor: colors.charts.qualitative[2],
      },
    ],
  };

  return (
    <ChartContainer>
      <Line options={options} data={data} height={250}/>
    </ChartContainer>
  );
}
