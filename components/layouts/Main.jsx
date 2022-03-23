import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Main = ({ children }) => {
  return (
    <>
      <Head>
        <title>JesuDev</title>
        <meta
          name="description"
          content="te invito a ver mi web personal desarrollado en NextJS"
        />
        <link rel="icon" href="/favicon.ico" />
        {
          //agregar etqiuetas metas datos para el SEO
        }
      </Head>
      <Header />
      <main>{children}</main>

      <Footer />
    </>
  );
};
