import { useAppSelector } from "../../../../../../app/hooks";
import { bankData } from "../../../../../../domain/structures/objects";
import { selectBanks } from "../../../../../../features/banks/banksSlice";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { useMantineTheme } from "@mantine/core";
import ChartContainer from "./chart-container";
import { colors } from "../../../../../../config/colorPalette";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const { analytics } = useAppSelector(selectBanks);
  const theme = useMantineTheme();

  const banks = Object.keys(analytics.graphs.nationalData).map((id) => {
    return bankData.banks[id];
  });
  let labels = [];
  let deposits = [];
  let reserves = [];
  let max = 200;
  if (Object.keys(analytics.graphs.nationalData).length > 0) {
    labels = banks.map((bank) => bank.name);

    deposits = Object.keys(analytics.graphs.nationalData).map((bank) => {
      const bData =
        analytics.graphs.nationalData[bank][
          analytics.graphs.nationalData[bank].length - 1
        ];
      return bData.deposits;
    });
    reserves = Object.keys(analytics.graphs.nationalData).map((bank) => {
      const bData =
        analytics.graphs.nationalData[bank][
          analytics.graphs.nationalData[bank].length - 1
        ];
      return bData.reserves;
    });
  }
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Balances",
      },
    },
    scales: {
      y: {
        suggestedMax: max,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Deposits",
        data: deposits,
        backgroundColor: colors.charts.qualitative[1],
      },
      {
        label: "Reserves",
        data: reserves,
        backgroundColor: colors.charts.qualitative[2],
      },
    ],
  };
  return (
    <ChartContainer>
      <Bar options={options} data={data} />
    </ChartContainer>
  );
}
