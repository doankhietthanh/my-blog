import type { DocumentGen } from "contentlayer/core";

export const urlFromFilePath = (doc: DocumentGen): string =>
  doc._raw.flattenedPath.replace(/posts\/?/, "");
