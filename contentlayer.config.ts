import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import highlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";
import GithubSlugger from "github-slugger";
import { urlFromFilePath } from "./lib/contentlayer";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    image: { type: "image", required: true },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
    },
    isPublished: {
      type: "boolean",
      description: "Is the post published",
      required: true,
    },
    publishedAt: {
      type: "date",
      description: "The date the post was published",
      required: true,
    },
    updatedAt: {
      type: "date",
      description: "The date the post was last updated",
      required: true,
    },
    author: {
      type: "string",
      description: "The authors of the post",
      required: true,
    },
    avatar: {
      type: "string",
      description: "The avatar of the authors",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blog/${urlFromFilePath(doc)}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: "json",
      resolve: async (doc) => {
        const regex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        return Array.from(doc.body.raw.matchAll(regex)).map(
          ({ groups }: any) => {
            const flag = groups?.flag;
            const content = groups?.content;

            return {
              level:
                flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          },
        );
      },
    },
  },
}));

const About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: "about/doankhietthanh.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    author: {
      type: "string",
      description: "The authors of the post",
      required: true,
    },
    avatar: {
      type: "string",
      description: "The avatar of the authors",
      required: false,
    },
    level: {
      type: "string",
      description: "The level of the authors",
      required: false,
    },
    social: {
      type: "json",
      description: "The social of the authors",
    },
    publishedAt: {
      type: "date",
      description: "The date the post was published",
      required: true,
    },
    updatedAt: {
      type: "date",
      description: "The date the post was last updated",
      required: true,
    },
  },
}));

const codeOptions = {
  theme: "monokai",
  grid: false,
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, About],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      highlight,
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions],
    ],
  },
});
