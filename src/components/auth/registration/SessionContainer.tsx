import { Box } from "@mantine/core";
import { useSession } from "next-auth/react";

interface Props {
  user: any;
  content?: any;
  placeholder?: React.ReactNode;
  children: React.ReactNode;
}
export default function SessionContainer({
  user,
  children,
}: Props) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Box style={{ height: 50 }} />;
  } else if (!session) {
    return <Box style={{ height: 50 }} />;
  } else if (session && session.user.email === user.email) {
    return <>{children}</>;
  }
}
