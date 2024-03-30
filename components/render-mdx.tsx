"use client";

import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { About, Post } from "@/.contentlayer/generated";

const mdxComponents = {
  Image,
};

const RenderMdx = ({ mdxSource }: { mdxSource: Post | About }) => {
  const MDXContent = useMDXComponent(mdxSource.body.code);

  return (
    <div
      className="font-in  dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark prose col-span-12 max-w-max
    dark:prose-invert
    sm:prose-base
    md:prose-lg
    first-letter:text-3xl
    prose-blockquote:rounded-r-lg
    prose-blockquote:border-accent

    prose-blockquote:bg-accent/20

    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:not-italic
    prose-li:marker:text-accent

    sm:first-letter:text-5xl
    lg:col-span-8
    "
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
