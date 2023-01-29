import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      <div className="px-6">{children}</div>
    </div>
  );
};

export default Layout;
