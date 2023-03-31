import { FC, ReactNode } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div id="__layout">
      <Header />
      <main className="l-main">{children}</main>
      <Footer />
    </div>
  );
};
