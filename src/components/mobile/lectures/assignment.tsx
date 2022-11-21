import { createStyles } from "@mantine/core";
import { Text, Title } from "@mantine/core";
import { colors } from "../../../config/colorPalette";

const useStyles = createStyles((theme) => ({
  title: {
    padding: 16,
    marginBottom: 0,
    display: "inline-block",
    backgroundColor: colors.background1,
    borderTop: `1px solid ${theme.colors.violet[1]}`,
    borderRight: `1px solid ${theme.colors.violet[1]}`,
    borderTopRightRadius: 5,
  },
  card: {
    paddingTop: 25,
    backgroundColor: colors.background1,
  },
}));
export default function Assignment({ assignment }) {
  const { classes } = useStyles();

  return (
    <div>
      <Title className={classes.title} style={{ color: colors.text }} order={2}>
        Assignment
      </Title>
      <div className={`${classes.card}`}>
        <div
          style={{
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <Text
            size="sm"
            weight="bold"
            style={{
              paddingBottom: 0,
              letterSpacing: "1px",
              color: colors.text,
            }}
          >
            {assignment}
          </Text>
        </div>
      </div>
    </div>
  );
}
