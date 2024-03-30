import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";
import { allPosts, Post } from "@/.contentlayer/generated";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { badgeVariants } from "@/components/ui/badge";

const BlogPage = () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
  });

  return (
    <div>
      {posts.map((post, idx) => (
        <BlogCard key={idx} {...post} />
      ))}
    </div>
  );
};

const BlogCard = (post: Post) => {
  const avatarUrlReplace = post.avatar?.replace("../../public", "");
  return (
    <div className="mb-6 flex h-full w-full flex-col gap-5 md:flex-row">
      <div className="flex w-48 flex-col gap-2">
        <time
          dateTime={post.updatedAt}
          className="block text-sm text-slate-600"
        >
          {format(parseISO(post.updatedAt), "LLLL d, yyyy")}
        </time>
        <div className="flex flex-row items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={avatarUrlReplace} />
            <AvatarFallback>{post.author.at(0)}</AvatarFallback>
          </Avatar>
          <p className="truncate text-sm text-slate-400">{post.author}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Link href={post.url}>
            <div className="text-clip text-2xl font-bold text-primary hover:text-primary/80 dark:text-primary">
              {post.title}
            </div>
          </Link>
          <div className="flex gap-2">
            {post.tags &&
              post.tags.map((tag) => (
                <Link
                  key={tag}
                  className={badgeVariants({ variant: "secondary" })}
                  href={`/tags/${tag}`}
                >
                  {tag}
                </Link>
              ))}
          </div>
        </div>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default BlogPage;
