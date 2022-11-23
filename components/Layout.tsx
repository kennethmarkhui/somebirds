import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
