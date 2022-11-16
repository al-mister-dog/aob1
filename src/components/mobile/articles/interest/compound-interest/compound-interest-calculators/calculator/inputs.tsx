import { useState } from "react";
import { NumberInput, Select } from "@mantine/core";

import { Box, Button } from "@mantine/core";

export const compoundPeriods = [
  {
    value: 1,
    label: "Annually",
  },
  {
    value: 2,
    label: "Semi-annually",
  },
  {
    value: 4,
    label: "Quarterly",
  },
  {
    value: 12,
    label: "Monthly",
  },
  {
    value: 52,
    label: "Weekly",
  },
  {
    value: 365,
    label: "Daily",
  },
];

export default function CompoundInterestCalculator({ getCompoundInterest }) {
  const [principal, setPrincipal] = useState(1000);
  const [interestRate, setInterestRate] = useState(0.05);
  const [inflationRate, setInflationRate] = useState(0.02);
  const [compoundPeriod, setCompoundPeriod] = useState(1);
  const [years, setYears] = useState(10);
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <NumberInput
          label="Principal"
          radius="xs"
          size="xs"
          min={0}
          max={9999}
          value={principal}
          onChange={(val) => {
            if (isNaN(val)) {
              val = 0;
            } else if (val > 9999) {
              val = 9999;
            }
            setPrincipal(val);
          }}
        />
        <NumberInput
          label="Interest Rate (%)"
          radius="xs"
          size="xs"
          min={0}
          max={100}
          value={interestRate}
          onChange={(val) => {
            if (isNaN(val)) {
              val = 0;
            } else if (val > 100) {
              val = 100;
            }
            setInterestRate(val);
          }}
        />
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <NumberInput
          label="Years"
          radius="xs"
          size="xs"
          min={0}
          max={100}
          value={years}
          onChange={(val) => {
            if (isNaN(val)) {
              val = 0;
            } else if (val > 100) {
              val = 100;
            }
            setYears(val);
          }}
        />
      </Box>

      <Button
        variant="filled"
        color="violet"
        style={{ width: "100%", marginTop: 10 }}
        onClick={() =>
          getCompoundInterest(
            principal,
            interestRate,
            inflationRate,
            years,
            compoundPeriod
          )
        }
      >
        Calculate
      </Button>
    </Box>
  );
}
