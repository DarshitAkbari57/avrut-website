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
import { BsWhatsapp } from "react-icons/bs";
import { useEffect, useState } from "react";
import AOS from 'aos'

type Metadata = {
  [key: string]: {
    title: string;
    description: string;
    keywords: string[];
  };
};

function MyApp({ Component, pageProps }: AppProps) {
  // Global configurations or logic can be added here

  const [loading, setLoading]: any = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: any) => (url !== router?.pathname) && setLoading(true)
    const handleComplete = (url: any) => (url !== router?.pathname) && setLoading(false)

    router?.events.on('routeChangeStart', handleStart)
    router?.events.on('routeChangeComplete', handleComplete)
    router?.events.on('routeChangeError', handleComplete)

    return () => {
      router?.events.off('routeChangeStart', handleStart)
      router?.events.off('routeChangeComplete', handleComplete)
      router?.events.off('routeChangeError', handleComplete)
    }
  }, [])

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
        <link rel="icon" href="/images/favicon.ico" type="image/png" sizes="32x32" />
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords.join(",")} />
      </Head>
      <Nav />
      {
        loading ? <>
          <div className="h-[70vh] w-full bg-white flex items-center justify-center  fixed z-20">
            {/* <div
              className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-[100px] md:h-[100px] h-[100px] w-[100px] aspect-square rounded-full"
            >
              <div
                className="rounded-full h-full w-full bg-slate-100  background-blur-md"
              ></div>
            </div> */}
            <div className="flex-col gap-4 w-full flex items-center justify-center relative">
              <div className="w-[60px] h-[60px] border-4 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
              </div>
              <div className="absolute top-1/2 -translate-y-1/2">
                <img src="/images/logo1.png" className="h-6 w-6" alt="" />
              </div>
            </div>
          </div>

        </> :
          <>
            <Component {...pageProps} />
            <Getintouch />
            <Footer />
          </>
      }
      <div className="fixed bottom-0 right-0 p-4 whatsapp">
        <a target="_blank" href="https://wa.me/">
          <button className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center" >
            <BsWhatsapp className="text-[#27d467]" />
          </button>
        </a>
      </div>
    </>
  );
}

export default MyApp;
