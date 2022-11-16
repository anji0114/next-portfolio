import { Footer } from "@/components/Footer/index.jsx";
import { Header } from "@/components/Header";

export const Layout = (props) => {
  const { children } = props;
  return (
    <div id="__layout">
      <Header />
      <main className="l-main">{children}</main>
      <Footer />
    </div>
  );
};
