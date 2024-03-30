import React from "react";
import { Post } from "@/.contentlayer/generated";
import Image from "next/image";
import { format, parseISO } from "date-fns";

const BackgroundCover = ({ post }: { post: Post }) => {
  const imageUrlReplace = post.image.filePath.replace("../public", "");
  return (
    <div className="relative mb-8 h-[60vh] w-full bg-background text-center">
      <div className="absolute left-1/2 top-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
        <h1 className="relative mt-6 inline-block w-5/6 text-2xl font-semibold capitalize !leading-normal text-white md:text-3xl lg:text-5xl">
          {post.title}
        </h1>
        <div className="text-md flex flex-row gap-2 text-white">
          <div>{post.readingTime.text}</div>
          <div> -</div>
          <time dateTime={post.updatedAt} className="block">
            {format(parseISO(post.updatedAt), "LLLL d, yyyy")}
          </time>
          {/*<ViewCounter slug={post._raw.flattenedPath} />*/}
        </div>
      </div>
      <div className="dark:bg-blak/40 absolute bottom-0 left-0 right-0 top-0 h-full rounded-2xl bg-black/60" />
      <Image
        src={imageUrlReplace}
        placeholder="blur"
        blurDataURL={post.image.blurhashDataUrl}
        alt={post.title}
        width={post.image.width}
        height={post.image.height}
        className="aspect-square h-full w-full rounded-2xl object-cover object-center"
        priority
        sizes="100vw"
      />
    </div>
  );
};

export default BackgroundCover;
