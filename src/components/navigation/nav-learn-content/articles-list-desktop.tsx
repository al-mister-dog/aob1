import {
  Accordion,
  List,
  Text,
  Box,
  Center,
  createStyles,
  Group,
  Tabs,
  Autocomplete,
} from "@mantine/core";
import { articleRoutes } from "../../../config/routes/articleRoutes";

import Link from "next/link";
import { colors } from "../../../config/colorPalette";
import { Book } from "tabler-icons-react";
import { IconSearch } from "@tabler/icons";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  listItem: {
    borderLeft: "1px solid gray",
    padding: "5px 0px 5px 20px",
    "&:hover": {
      backgroundColor: theme.colors.violet[1],
      borderLeft: "1px solid blue",
    },
  },
}));

export default function ArticlesContent() {
  const router = useRouter();
  function onClickTab(val: string) {

    if (val === "dictionary") {
      router.replace("/articles");
    } else if (val === "community") {
      router.replace("/articles/users/home");
    }
  }

  return (
    <>
      <Box mt={10}>
        <Center>
          <Group>
            <Book color="purple" />
            <Text style={{ color: colors.text }}>Articles</Text>
          </Group>
        </Center>
      </Box>
      <Tabs mt={10} color="violet" defaultValue="dictionary">
        <Tabs.List position="center">
          <Tabs.Tab value="dictionary" onClick={() => onClickTab("dictionary")}>
            Dictionary
          </Tabs.Tab>
          <Tabs.Tab value="community" onClick={() => onClickTab("community")}>
            Community
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="dictionary" pt="xs">
          <Dictionary />
        </Tabs.Panel>
        <Tabs.Panel value="community" pt="xs">
          <Autocomplete
            icon={<IconSearch size={16} stroke={1.5} />}
            data={["money", "banking", "alchemy"]}
          />
          <Text>User Articles</Text>
        </Tabs.Panel>
      </Tabs>
    </>
  );
}

function NestedRoutes({ title, path, id, routes }) {
  const { classes } = useStyles();

  return (
    <div key={id}>
      <List.Item className={classes.listItem} style={{ cursor: "pointer" }}>
        <Link
          href={{
            pathname: `/articles${path}`,
            query: { path, id },
          }}
          as={`/articles${path}`}
          passHref
        >
          <Text size={13.9}>{title}</Text>
        </Link>
      </List.Item>
      <List size="xs">
        {routes[0].routes.map((route, i) => (
          <List.Item
            key={route.id}
            className={classes.listItem}
            style={{ cursor: "pointer" }}
          >
            <Link
              href={{
                pathname: `/articles${route.path}`,
                query: { path, id },
              }}
              as={`/articles${route.path}`}
              passHref
            >
              <Text>{route.title}</Text>
            </Link>
          </List.Item>
        ))}
      </List>
    </div>
  );
}

function Dictionary() {
  const { classes } = useStyles();
  return (
    <Accordion variant="filled">
      {articleRoutes.map((route) => {
        const { id, title, path, routes } = route;
        return (
          <Accordion.Item value={title} key={id}>
            <Accordion.Control>
              <Link href={path}>
                <Text size={14.2} weight={500}>
                  {title}
                </Text>
              </Link>
            </Accordion.Control>
            <Accordion.Panel>
              <List listStyleType="none">
                {routes.map((route: any, i) => {
                  const { id, title, path, routes } = route;
                  if (routes) {
                    return (
                      <NestedRoutes
                        key={id}
                        title={title}
                        path={path}
                        id={id}
                        routes={routes}
                      />
                    );
                  }
                  return (
                    <div key={id}>
                      <List.Item
                        className={classes.listItem}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <Link
                          href={{
                            pathname: `/articles${path}`,
                            query: { path, id },
                          }}
                          as={`/articles${path}`}
                          passHref
                        >
                          <Text size={13.9}>{title}</Text>
                        </Link>
                      </List.Item>
                    </div>
                  );
                })}
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
