import { ReactNode } from "react";

type DarkLayoutProps = {
  children: ReactNode;
};

const DarkLayout = ({ children }: DarkLayoutProps) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 0, 0, 0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>DarkLayout</h3>
      <div>{children}</div>
    </div>
  );
};

export default DarkLayout;
