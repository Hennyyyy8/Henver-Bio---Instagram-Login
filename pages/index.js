import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Appstore from '@/components/AppStore'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram - Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Instagram_icon.png" />
      </Head>
      <main className={`${styles.main}`}>
            <Login/>
            <Signup/>
            <Appstore/>
      </main>
      <Footer/>
    </>
  )
}
