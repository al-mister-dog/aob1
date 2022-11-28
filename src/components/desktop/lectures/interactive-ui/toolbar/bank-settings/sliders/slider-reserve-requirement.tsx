import { useAppSelector, useAppDispatch } from "../../../../../../../app/hooks";
import {
  selectSettings,
  setReserveRequirement,
} from "../../../../../../../features/settings/settingsSlice";
import { Box, Slider, Text } from "@mantine/core";
import { colors } from "../../../../../../../config/colorPalette";

export default function ReserveRequirementSlider({
  disabled,
}: {
  disabled: boolean;
}) {
  const dispatch = useAppDispatch();
  const { reserveRequirement } = useAppSelector(selectSettings);

  function handleChange(e: { num?: number }) {
    dispatch(setReserveRequirement({ num: e.num }));
  }
  return (
    <Box>
      <Text size="xs" style={{ color: colors.textColor }}>
        Reserve Requirement
      </Text>
      <Slider
        color="violet"
        size="md"
        label={`${reserveRequirement}%`}
        value={reserveRequirement}
        onChange={(num) => handleChange({ num })}
        disabled={disabled}
      />
    </Box>
  );
}
