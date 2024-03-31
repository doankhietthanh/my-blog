import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs",
  description: "Explore the latest blogs from our community.",
};

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="container block space-y-6 p-10 pb-16">{children}</div>;
};

export default BlogLayout;
