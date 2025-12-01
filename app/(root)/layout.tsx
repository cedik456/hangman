import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Root layout</p>
      {children}
    </div>
  );
};

export default RootLayout;
