import { Menu } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons";
import Link from "next/link";

export default function AuthUserMenuItems({ article, user }) {
  return (
    <>
      {user.email === article.user.email && (
        <>
          <Link
            href={{
              pathname: `/articles/users/update-article`,
              query: { articleId: article.id },
            }}
          >
            <Menu.Item icon={<IconEdit size={14} />}>Update Article</Menu.Item>
          </Link>
          <Link
            href={{
              pathname: `/articles/users/delete-article`,
              query: { articleId: article.id },
            }}
          >
            <Menu.Item color="red" icon={<IconTrash size={14} />}>
              Delete Article
            </Menu.Item>
          </Link>
        </>
      )}
    </>
  );
}
