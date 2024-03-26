import { format, parseISO } from "date-fns";
import { allBlogs } from "@/.contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

interface MetadataProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));

export const generateMetadata = async ({ params }: MetadataProps) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return null;
  }
  return { title: blog.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return null;
  }

  const Content = getMDXComponent(blog.body.code);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={blog.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(blog.date), "LLLL d, yyyy")}
        </time>
        <h1>{blog.title}</h1>
      </div>
      <Content />
    </article>
  );
};

export default PostLayout;
