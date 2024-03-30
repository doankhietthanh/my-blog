import React from "react";
import { Separator } from "@/components/ui/separator";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container block space-y-6 p-10 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">About me</h2>
        <p className="text-muted-foreground">
          My portfolio and a little bit about me.
        </p>
      </div>
      <Separator className="my-6" />
      {children}
    </div>
  );
};

export default AboutLayout;
