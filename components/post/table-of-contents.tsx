import React from "react";
import { Post } from "@/.contentlayer/generated";

const TableOfContents = ({ post }: { post: Post }) => {
  return (
    <details
      className="border-dark dark:border-light text-dark dark:text-light sticky top-20 max-h-[80vh] overflow-hidden overflow-y-auto rounded-lg border-[1px] border-solid p-4"
      open
    >
      <summary className="cursor-pointer text-lg font-semibold capitalize">
        Table Of Content
      </summary>
      <ul className="font-in mt-4 text-base">
        {post.toc.map((heading: any) => {
          return (
            <li key={`#${heading.slug}`} className="py-1">
              <a
                href={`#${heading.slug}`}
                data-level={heading.level}
                className="border-dark/40  flex
                                       items-center justify-start border-solid
                                       data-[level=two]:border-t
                                       data-[level=three]:pl-4
                                       data-[level=two]:pl-0 data-[level=two]:pt-2 sm:data-[level=three]:pl-6
                                       "
              >
                {heading.level === "three" ? (
                  <span className="bg-dark mr-2 flex h-1 w-1 rounded-full">
                    &nbsp;
                  </span>
                ) : null}

                <span className="hover:underline">{heading.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
};

export default TableOfContents;
