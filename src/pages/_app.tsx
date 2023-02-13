import { AppProps } from "next/app";
import { Layout } from "src/layouts/Layout";
import "styles/style.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
