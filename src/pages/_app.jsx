import { Layout } from "@/components/Layout";
import { useEffect } from "react";
import "styles/style.scss";

function MyApp({ Component, pageProps }) {
  // viewportの設定
  useEffect(() => {
    !(function () {
      const viewport = document.querySelector('meta[name="viewport"]');
      function switchViewport() {
        const value = window.outerWidth > 375 ? "width=device-width,initial-scale=1" : "width=375";
        if (viewport.getAttribute("content") !== value) {
          viewport.setAttribute("content", value);
        }
      }
      addEventListener("resize", switchViewport, false);
      switchViewport();
    })();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
