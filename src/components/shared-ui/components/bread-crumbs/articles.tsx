import { Breadcrumbs, Text, Title } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { colors } from "../../../../config/colorPalette";

export default function ArticleTitle({ title }) {
  const router = useRouter();
  const { asPath } = router;
  const paths = asPath.slice(1).split("/");

  if (paths.length === 1) {
    return (
      <>
        <Breadcrumbs style={{ marginBottom: "25px", fontWeight: "bold" }}>
          {[
            <Link href={`/${paths[0]}`} key={0}>
              <Text style={{color: colors.text}} transform="capitalize">{paths[0]}</Text>
            </Link>,
          ]}
        </Breadcrumbs>
        <h1 style={{color: colors.text}}>{title}</h1>
      </>
    );
  } else if (paths.length === 2) {
    return (
      <>
        <Breadcrumbs style={{ marginBottom: "25px", fontWeight: "bold" }}>
          {[
            <Link href={`/${paths[0]}`} key={0}>
              <Text style={{color: colors.text}} transform="capitalize">{paths[0]}</Text>
            </Link>,
            <Link href={`/${paths[1]}`} key={1}>
              <Text style={{color: colors.text}} transform="capitalize">{paths[1]}</Text>
            </Link>,
          ]}
        </Breadcrumbs>
        <h1 style={{color: colors.text}}>{title}</h1>
      </>
    );
  } else if (paths.length > 2) {
    return (
      <>
        <Breadcrumbs
          style={{ display: "flex", marginBottom: "25px", fontWeight: "bold" }}
        >
          {[
            <Link href={`/${paths[0]}`} key={0}>
              <Text style={{color: colors.text}} transform="capitalize">{paths[0]}</Text>
            </Link>,
            <Link
              href={`/${paths.slice(0, paths.length - 1).join("/")}`}
              key={2}
            >
              <Text style={{color: colors.text}} transform="capitalize">
                . . {paths[paths.length - 2].split("-").join(" ")}
              </Text>
            </Link>,
          ]}
        </Breadcrumbs>
        <h1 style={{color: colors.text}}>{title}</h1>
      </>
    );
  }
}
