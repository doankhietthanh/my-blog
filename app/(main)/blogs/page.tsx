import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";
import { allBlogs, Blog } from "@/.contentlayer/generated";

const BlogsPage = () => {
  const blogs = allBlogs.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <title>Contentlayer Blog Example</title>

      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

      {blogs.map((blog, idx) => (
        <BlogCard key={idx} {...blog} />
      ))}
    </div>
  );
};

const BlogCard = (blog: Blog) => {
  return (
    <div className="mb-6">
      <time dateTime={blog.date} className="block text-sm text-slate-600">
        {format(parseISO(blog.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg">
        <Link href={blog.url}>
          <div className="text-blue-700 hover:text-blue-900">{blog.title}</div>
        </Link>
      </h2>
    </div>
  );
};

export default BlogsPage;
