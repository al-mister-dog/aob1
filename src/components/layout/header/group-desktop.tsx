import {
  createStyles,
  Menu,
  Group,
  Button,
  Text,
  SimpleGrid,
  Divider,
  Center,
  Box,
  useMantineTheme,
  UnstyledButton,
  ThemeIcon,
} from "@mantine/core";

import { IconChevronDown } from "@tabler/icons";
import Link from "next/link";
import { useState } from "react";

import { features } from "./features-data";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function HeaderGroup() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  const links = features.map((item) => (
    <Link key={item.title} href={item.path}>
      <UnstyledButton
        className={classes.subLink}
        key={item.title}
        onClick={() => setOpened(false)}
      >
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={22} color="purple" />
          </ThemeIcon>
          <div>
            <Text size="sm" weight={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
  ));
  return (
    <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
      <a href="/" className={classes.link}>
        Home
      </a>
      <Menu
        width={600}
        position="bottom"
        radius="md"
        shadow="md"
        opened={opened}
        onChange={setOpened}
      >
        <Menu.Target>
          <a href="#" className={classes.link}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color="purple" />
            </Center>
          </a>
        </Menu.Target>

        <Menu.Dropdown sx={{ overflow: "hidden" }}>
          <Group position="apart" px="md">
            <Text weight={500} pt={5}>
              Features
            </Text>
          </Group>

          <Divider
            my="sm"
            mx="-md"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <SimpleGrid cols={2} spacing={0}>
            {links}
          </SimpleGrid>

          <div className={classes.dropdownFooter}>
            <Group position="apart">
              <div>
                <Text weight={500} size="sm">
                  Get started
                </Text>
                <Text size="xs" color="dimmed">
                  Sign in to join the discussion or head straight to learning
                </Text>
              </div>
              <Button variant="default">Get started</Button>
            </Group>
          </div>
        </Menu.Dropdown>
      </Menu>
      <Link href="/lectures" className={classes.link}>
        Lectures
      </Link>

      <Link href="/articles" className={classes.link}>
        Articles
      </Link>
    </Group>
  );
}
