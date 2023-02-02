import { Footer } from "src/layouts/Footer/index.jsx";
import { Header } from "src/layouts/Header";

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
