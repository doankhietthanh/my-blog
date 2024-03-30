import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PostInfo = ({ post }: { post: Post }) => {
  const avatarUrlReplace = post.avatar?.replace("../../public", "");
  return (
    <div className="sticky top-20 flex justify-center md:justify-end">
      <div className=" flex max-w-48 flex-col items-center justify-center gap-2">
        <time
          dateTime={post.updatedAt}
          className="block text-sm text-slate-600"
        >
          {format(parseISO(post.updatedAt), "LLLL d, yyyy")}
        </time>
        <div className="flex flex-row items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={avatarUrlReplace} />
            <AvatarFallback>{post.author.at(0)}</AvatarFallback>
          </Avatar>
          <p className="truncate text-sm text-slate-400">{post.author}</p>
        </div>
        <div className="text-center">
          {post.tags &&
            post.tags.map((tag) => (
              <Link
                key={tag}
                className={cn(badgeVariants({ variant: "default" }), "mr-2")}
                href={`/tags/${tag}`}
              >
                {tag}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
