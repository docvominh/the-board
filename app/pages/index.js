import Head from 'next/head'
import Image from 'next/image'
import VnExpress from "../components/news/VnExpress";
import Stock from "../components/economy/Stock";
import Nav from "../components/layout/Nav";
import Aside from "../components/layout/Aside";
import Script from "next/script";
import {useEffect} from "react";

export default function Index() {

    return (
        <div id="container">
            <Head>
                <title>The Board</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="main">
                <div id="app">
                    <Nav/>
                    <Aside/>
                    <section className="section is-main-section">
                        <Stock indexes={['VN','NASDAQ 100','S&P 500']} types={['Gold','Bitcoin','Crude Oil']}/>
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
            <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css"/>
        </div>

    )
}
