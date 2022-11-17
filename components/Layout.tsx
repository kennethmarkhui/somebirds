import { ReactNode } from "react";

import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
