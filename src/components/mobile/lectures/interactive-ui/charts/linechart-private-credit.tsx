import { useAppSelector } from "../../../../../app/hooks";
import { selectBanks } from "../../../../../features/banks/banksSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useMantineTheme } from "@mantine/core";
import ChartContainer from "./chart-container";
import { colors } from "../../../../../config/colorPalette";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function LineChart() {
  const { analytics } = useAppSelector(selectBanks);

  const theme = useMantineTheme();
  let creditData = [];
  let reservesData = [];
  let privateCreditData = [];
  if (analytics.graphs.credit.length === 0) {
    creditData = [0];
    reservesData = [0];
    privateCreditData = [0];
  } else {
    creditData = [analytics.graphs.credit[0], ...analytics.graphs.credit];
    reservesData = [analytics.graphs.reserves[0], ...analytics.graphs.reserves];
    if (analytics.graphs.privateCredit.length > 0)
      privateCreditData = [
        analytics.graphs.privateCredit[0],
        ...analytics.graphs.privateCredit,
      ];
  }

  const options = {
    // responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: reservesData[0] * 2,
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Private Credit vs Reserves",
        color: theme.colors.violet[9],
      },
    },
  };

  const labels = creditData.map((c, i) => i);
  const data = {
    labels,
    datasets: [
      {
        label: "Credit",
        data: creditData,
        borderColor: colors.charts.qualitative[1],
        backgroundColor: colors.charts.qualitative[1],
      },
      {
        // fill: true,
        label: "Reserves",
        data: reservesData,
        borderColor: colors.charts.qualitative[2],
        backgroundColor: colors.charts.qualitative[2],
      },
      {
        label: "Private Credit",
        data: privateCreditData,
        borderColor: colors.charts.qualitative[3],
        backgroundColor: colors.charts.qualitative[3],
      },
    ],
  };
  return (
    <ChartContainer>
      <Line options={options} data={data} height={250}/>
    </ChartContainer>
  );
}
