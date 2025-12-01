import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>dashboard nav</p>
      {children}
    </div>
  );
};

export default DashboardLayout;
