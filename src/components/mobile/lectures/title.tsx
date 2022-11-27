import { Breadcrumbs, Center, Text } from "@mantine/core";
import Link from "next/link";
import { colors } from "../../../config/colorPalette";

export default function LectureTitle({ slug, title }) {
  return (
    <>
      <Center>
        <Breadcrumbs style={{ fontWeight: "bold", margin: "auto" }}>
          {[
            <Link href="/lectures" key={1}>
              <Text size="xs" align="center">
                Lectures
              </Text>
            </Link>,
            <Link href={`/lectures/${slug[0]}`} key={2}>
              <Text size="xs" align="center" transform="capitalize">
                {slug[0].split("-").join(" ")}
              </Text>
            </Link>,
          ]}
        </Breadcrumbs>
      </Center>
      <h1
        style={{
          color: colors.text,
          textAlign: "center",
          letterSpacing: 1.5,
          padding: 0,
          margin: 0,
          marginTop: 5,
        }}
      >
        {title}
      </h1>
    </>
  );
}
