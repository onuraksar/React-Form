import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='React Form'></meta>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
    </div>
  )
}
 