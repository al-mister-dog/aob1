import { Box, Card, Center, useMantineTheme } from "@mantine/core";
import OverdraftSlider from "../bank-settings/sliders/slider-overdraft";
import ReserveRequirementSlider from "../bank-settings/sliders/slider-reserve-requirement";
import { useAppSelector } from "../../../../../../../app/hooks";
import { selectActions } from "../../../../../../../features/actions/actionsSlice";
import { sliderSettings } from "../../../../../../../features/settings/initialState";
import { colors } from "../../../../../../../config/colorPalette";
export default function Toolbar() {
  const { currentLectureId } = useAppSelector(selectActions);
  const theme = useMantineTheme();
  const slidersDisabled = sliderSettings[currentLectureId].sliderSettings;
  const overdraftValue =
    sliderSettings[currentLectureId].sliderFixtures?.overdraft || 0;
  return (
    <Card
      shadow="sm"
      style={{
        backgroundColor: colors.background2,
        overflow: "visible",
      }}
    >
      <Card.Section
        mb="xs"
        p="xs"
        style={{ borderBottom: `1px solid ${colors.textColor}` }}
      >
        <Center>
          <h4 style={{ margin: 0, padding: 0, color: colors.textColor }}>
            Board Settings
          </h4>
        </Center>
      </Card.Section>
      <div>
        <Box>
          <OverdraftSlider
            disabled={slidersDisabled.overdraft}
            overdraftValue={overdraftValue}
          />
        </Box>
        <Box>
          <ReserveRequirementSlider
            disabled={slidersDisabled.reserveRequirement}
          />
        </Box>
      </div>
    </Card>
  );
}
