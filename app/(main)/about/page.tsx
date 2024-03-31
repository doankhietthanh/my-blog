import { About, allAbouts } from "@/.contentlayer/generated";
import RenderMdx from "@/components/render-mdx";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import React from "react";

const AboutPage = () => {
  const about = allAbouts[0];
  return (
    <div className="flex flex-col gap-10 md:grid md:grid-cols-12">
      <div className="col-span-4 xl:col-span-2">
        <AboutInformation about={about} />
      </div>
      <div className="col-span-8 xl:col-span-10">
        <RenderMdx mdxSource={about} />
      </div>
    </div>
  );
};

export default AboutPage;

const AboutInformation = ({ about }: { about: About }) => {
  const avatarUrlReplace = about.avatar?.replace("../../public", "") || "";

  return (
    <>
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">About me</h2>
        <p className="text-muted-foreground">
          My portfolio and a little bit about me.
        </p>
      </div>
      <Separator className="my-6" />;
      <div className="sticky top-20 flex w-full flex-col items-center justify-center md:items-end md:justify-end">
        <div className="flex w-48 flex-col items-center justify-center gap-3">
          <Image
            src={avatarUrlReplace}
            alt="avatar"
            width={192}
            height={192}
            className="rounded-lg"
          />
          <div className="text-xl font-semibold">{about.author}</div>
          <div className="text-md font-light text-slate-500">{about.level}</div>
        </div>
      </div>
    </>
  );
};
