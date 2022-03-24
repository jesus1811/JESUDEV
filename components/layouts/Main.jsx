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
        <meta
          name="keywords"
          content="jesudev,portafolio,reactjs,frontend,javascript"
        />
        <meta name="autor" content="jesus ayarza"/>
        <meta name="generator" content="nextjs"/>
        {
          //agregar etqiuetas metas datos para el SEO
        }
      </Head>

      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};
