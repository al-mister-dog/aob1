import {
  Box,
  Navbar,
  Button,
  UnstyledButton,
  Badge,
  Text,
  ActionIcon,
  Tooltip,
  Group,
  Center,
  Avatar,
  TextInput,
  createStyles,
  Textarea,
} from "@mantine/core";
import {
  IconBulb,
  IconUser,
  IconCheckbox,
  IconSearch,
  IconPlus,
  IconSelector,
} from "@tabler/icons";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  navbar: {
    paddingTop: 0,
    borderRight: "1px solid #dee2e6",
    backgroundColor: "#fff",
    
  },

  section: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    marginBottom: theme.spacing.md,

    "&:not(:last-of-type)": {
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },
  },

  searchCode: {
    fontWeight: 700,
    fontSize: 10,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
  },

  mainLinks: {
    paddingLeft: theme.spacing.md - theme.spacing.xs,
    paddingRight: theme.spacing.md - theme.spacing.xs,
    paddingBottom: theme.spacing.md,
  },

  mainLink: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: theme.fontSizes.xs,
    padding: `8px ${theme.spacing.xs}px`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  },

  mainLinkBadge: {
    padding: 0,
    width: 20,
    height: 20,
    pointerEvents: "none",
  },

  collections: {
    paddingLeft: theme.spacing.md - 6,
    paddingRight: theme.spacing.md - 6,
    paddingBottom: theme.spacing.md,
  },

  collectionsHeader: {
    paddingLeft: theme.spacing.md + 2,
    paddingRight: theme.spacing.md,
    marginBottom: 5,
  },

  collectionLink: {
    display: "block",
    padding: `8px ${theme.spacing.xs}px`,
    textDecoration: "none",
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.xs,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    lineHeight: 1,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },
}));

const links = [
  { icon: IconBulb, label: "Activity", notifications: 3 },
  { icon: IconCheckbox, label: "Tasks", notifications: 4 },
  { icon: IconUser, label: "Contacts" },
];

const collections = [
  { emoji: "👍", label: "Sales" },
  { emoji: "🚚", label: "Deliveries" },
  { emoji: "💸", label: "Discounts" },
  { emoji: "💰", label: "Profits" },
  { emoji: "✨", label: "Reports" },
  { emoji: "🛒", label: "Orders" },
  { emoji: "📅", label: "Events" },
  { emoji: "🙈", label: "Debts" },
  { emoji: "💁‍♀️", label: "Customers" },
];

export default function NavbarSearch({ user }) {
  const { classes } = useStyles();
  const [editButtonHidden, setEditButtonHidden] = useState(false);
  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge
          size="sm"
          variant="filled"
          color="violet"
          className={classes.mainLinkBadge}
        >
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const collectionLinks = collections.map((collection) => (
    <a
      href="/"
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: 9, fontSize: 16 }}>{collection.emoji}</span>{" "}
      {collection.label}
    </a>
  ));

  return (
    <Box
      style={{ height: "100%", width: "22.5vw",top: 0, left: 0 }}
      w={{ sm: 300 }}
      p="md"
      className={classes.navbar}
    >
      <Box className={classes.section}>
        <Center>
          <Avatar src={user.image} alt={user.name} size={200} radius={200} />
        </Center>
        <Center>
          <h2>{user.name}</h2>
        </Center>
        <Center>
          {!editButtonHidden && (
            <Button
              variant="outline"
              mb="sm"
              color="violet"
              style={{ width: "95%" }}
              onClick={() => setEditButtonHidden(true)}
            >
              Edit Profile
            </Button>
          )}
        </Center>
        {editButtonHidden && (
          <ProfileForm setEditButtonHidden={setEditButtonHidden} />
        )}
      </Box>

      <Box className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </Box>

      <Box className={classes.section} style={{ height: "100%" }}>
        <Group className={classes.collectionsHeader} position="apart">
          <Text size="xs" weight={500} color="dimmed">
            Collections
          </Text>
          <Tooltip label="Create collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <IconPlus size={12} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>{collectionLinks}</div>
      </Box>
    </Box>
  );
}

import { useForm } from "@mantine/form";

function ProfileForm({ setEditButtonHidden }) {
  const form = useForm({
    initialValues: {
      tag: "",
      bio: "",
    },

    validate: {
      tag: (value) => (value.length > 1 ? null : "Invalid tag"),
      bio: (value) => (value.length > 5 ? null : "Invalid bio"),
    },
  });

  return (
    <Box mx="auto" style={{ width: "90%" }} mb={5}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Tag"
          placeholder="Tag Line"
          {...form.getInputProps("tag")}
        />
        <Textarea
          minRows={2}
          maxRows={4}
          label="Bio"
          placeholder="Bio"
          {...form.getInputProps("bio")}
        />
        <Group position="left" mt="md">
          <Button color="violet" type="submit" disabled>
            Submit
          </Button>
          <Button color="violet" onClick={() => setEditButtonHidden(false)}>
            Cancel
          </Button>
        </Group>
      </form>
    </Box>
  );
}
