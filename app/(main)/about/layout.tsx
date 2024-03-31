import React from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="container block space-y-6 p-10 pb-16">{children}</div>;
};

export default AboutLayout;
