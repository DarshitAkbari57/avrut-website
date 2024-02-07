// _app.tsx
import { AppProps } from "next/app";
import "../app/globals.css";
import Nav from "@/component/Nav/Nav";
import Footer from "@/component/Footer/Footer";
import Getintouch from "@/component/Getintouch";
import Head from "next/head";
import Metadata from "next";
import metadata from "../metadata.json";
import { useRouter } from "next/router";

type Metadata = {
  [key: string]: {
    title: string;
    description: string;
    keywords: string[];
  };
};

function MyApp({ Component, pageProps }: AppProps) {
  // Global configurations or logic can be added here

  const router = useRouter();
  const currentPage = router.pathname.substring(1);

  // Set metadata based on the current page or use default metadata
  const pageMetadata = (metadata as Metadata)[currentPage] || {
    title: "Avrut Solutions", // Default title
    description:
      "The official Next.js Course Dashboard, built with App Router.", // Default description
    keywords: ["Next.js", "React"], // Default keywords
  };

  return (
    <>
      <Head>
        <title>{pageMetadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords.join(",")} />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Getintouch />
      <Footer />
    </>
  );
}

export default MyApp;
