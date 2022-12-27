import Head from 'next/head'
import Image from 'next/image'
import VnExpress from "../components/news/VnExpress";
import Stock from "../components/economy/Stock";
import Nav from "../components/layout/Nav";
import Aside from "../components/layout/Aside";
import Script from "next/script";
import {useEffect, useState} from "react";

export default function Index() {
    const [user , setUser ] = useState(null);
    useEffect(() => {
        // update some client side state to say it is now safe to render the client-side only component
        let token = localStorage.getItem('auth_token');

        if (token == null) {
        } else {
            setUser(JSON.parse(atob(token.split('.')[1])));
        }
    }, []);

    return (
        <div id="container">
            <Head>
                <title>The Board</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="main">
                <div id="app">
                    <Nav user={user}/>
                    <Aside/>
                    <section className="section is-main-section">
                        <Stock indexes={['VN','NASDAQ 100','S&P 500']} types={['Gold','Bitcoin','Crude Oil']}/>
                        <br/>
                        <VnExpress types={['tin-moi-nhat']} page={20}/>
                    </section>
                </div>
            </main>

            <footer>
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                   target="_blank"
                   rel="noopener noreferrer">
                    Powered by{' '}
                    <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
            <Script src="scripts/main.js" strategy="beforeInteractive"/>
            <script src="https://accounts.google.com/gsi/client" async defer ></script>
            <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css"/>
        </div>

    )
}
