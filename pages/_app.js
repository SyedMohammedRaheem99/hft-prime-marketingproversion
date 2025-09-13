
import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }){
  useEffect(()=>{
    const j = document.getElementById('__next')
    if(j) j.style.visibility = 'visible'
  },[])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="HFT Prime Marketing — We build product-grade apps and clean code that scales." />
        <title>HFT Prime Marketing</title>
        <meta property="og:title" content="HFT Prime Marketing" />
        <meta property="og:description" content="We build product-grade apps and clean code that scales." />
      </Head>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
