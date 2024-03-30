import { allPosts } from "@/.contentlayer/generated";
import RenderMdx from "@/components/render-mdx";
import React from "react";
import TableOfContents from "@/components/post/table-of-contents";
import PostInfo from "@/components/post/post-info";
import BackgroundCover from "@/components/post/background-cover";
import { urlFromFilePath } from "@/lib/contentlayer";

interface MetadataProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: urlFromFilePath(post) }));

export const generateMetadata = async ({ params }: MetadataProps) => {
  const post = allPosts.find((post) => urlFromFilePath(post) === params.slug);
  if (!post) {
    return null;
  }
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => urlFromFilePath(post) === params.slug);
  if (!post) {
    return null;
  }

  return (
    <div className="mx-auto flex flex-col gap-5 py-8">
      <BackgroundCover post={post} />
      <div className="flex flex-col gap-5 md:grid md:grid-cols-12">
        <div className="col-span-2">
          <PostInfo post={post} />
        </div>
        <article className="col-span-7">
          <RenderMdx mdxSource={post} />
        </article>
        <div className="hidden md:col-span-3 md:block">
          <TableOfContents post={post} />
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
