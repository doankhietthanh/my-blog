import React from "react";
import { Separator } from "@/components/ui/separator";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container block space-y-6 p-10 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">All Blogs</h2>
        <p className="text-muted-foreground">
          Explore the latest blogs from our community.
        </p>
      </div>
      <Separator className="my-6" />
      {children}
    </div>
  );
};

export default BlogLayout;
