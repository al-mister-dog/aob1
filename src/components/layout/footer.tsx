import { createStyles, Text, Container, Box } from "@mantine/core";
import Logo from "../shared-ui/logo";
import { colors } from "../../config/colorPalette";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : "",
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    height: 395,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,
    color: colors.text,
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      paddingTop: 25,
      margin: "auto",
    },
  },

  wrapper: {
    width: 160,
    display: "flex",
    flexDirection: "column",

    alignItems: "center",

    [theme.fn.smallerThan("sm")]: {
      paddingTop: 25,
      margin: "auto",
      marginTop: 0,
    },
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : colors.text,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

const data = [
  {
    title: "About",
    link: "/about",
    links: [
      {
        label: "Features",
        link: "#",
      },
      {
        label: "Pricing",
        link: "#",
      },
      {
        label: "Support",
        link: "#",
      },
      {
        label: "Forums",
        link: "#",
      },
    ],
  },
  {
    title: "Project",
    link: "/lectures",
    links: [
      {
        label: "Lectures",
        link: "#",
      },
      {
        label: "Articles",
        link: "#",
      },
      {
        label: "Contribute",
        link: "#",
      },
    ],
  },
  {
    title: "Community",
    link: "/community",
    links: [
      {
        label: "Join Discord",
        link: "#",
      },
      {
        label: "Follow on Twitter",
        link: "#",
      },
      {
        label: "Email newsletter",
        link: "#",
      },
      {
        label: "GitHub discussions",
        link: "#",
      },
    ],
  },
];

export default function FooterLinks() {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Link href={group.link}>
          <Text className={classes.title}>{group.title}</Text>
        </Link>

        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Box
            style={{
              display: "flex",
            }}
          >
            <Logo />
            <Text
              ml={20}
              size="lg"
              className={classes.description}
              styles={{ color: colors.text }}
            >
              Art of Banking
            </Text>
          </Box>

          <Text size="xs" color="dimmed" className={classes.description}>
            Your Site to Learn Money and Banking
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text size={10} color="dimmed" p="md">
          © 2020 art-of-banking All rights reserved. This site is for
          educational purposes only!! **FAIR USE** Copyright Disclaimer under
          section 107 of the Copyright Act 1976, allowance is made for “fair
          use” for purposes such as criticism, comment, news reporting,
          teaching, scholarship, education and research. Fair use is a use
          permitted by copyright statute that might otherwise be infringing.
          Non-profit, educational or personal use tips the balance in favor of
          fair use.
        </Text>
      </Container>
    </footer>
  );
}
