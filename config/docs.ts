import { MainNavItem, SidebarNavItem } from "@/types/nav";
import { allPosts } from "@/.contentlayer/generated";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

const allBlogs = allPosts.map(
  (post) =>
    ({
      title: post.title,
      href: post.url,
    }) as SidebarNavItem,
);

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  sidebarNav: [
    {
      title: "Blogs",
      items: allBlogs,
    },
  ],
};
