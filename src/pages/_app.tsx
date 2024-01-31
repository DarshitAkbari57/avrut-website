// _app.tsx
import { AppProps } from 'next/app';
import '../app/globals.css'
import Nav from '@/component/Nav/Nav';
import Footer from '@/component/Footer/Footer';
import Getintouch from '@/component/Getintouch';

function MyApp({ Component, pageProps }: AppProps) {
    // Global configurations or logic can be added here

    return (
        <>
            <Nav />
            <Component {...pageProps} />
            <Getintouch />
            <Footer />

        </>
    );
}

export default MyApp;
