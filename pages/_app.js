import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="m-0 p-0 border-box">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
