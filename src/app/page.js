import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import Head from "next/head";
import newsLetterImage from '/public/newsletter-2.jpg'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Form</title>
        <meta name='description' content='React Form'></meta>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <main className='h-screen flex items-center justify-center px-6 '>
        <form className='bg-white flex rounded-lg  md:w-1/2' >
          <div className='p-6 flex-1'>
            <h1 className='text-lg text-bold mb-2'>Let's get started!</h1>
            <p className='mb-3'>Join our newsletter and learn the latest trends before anyone else. </p>
            <div className='py-2'>
              <div className='mb-3'>
                <label htmlFor="name" className='block mb-2'>Name</label>
                <input type="text" name="name" placeholder='Enter your name' className='rounded-md w-full p-1 border-4 border-gray-500 focus:border-sky-200 focus:ring-2 focus:ring-sky-200 outline-none transition-all' />
              </div>
              <div className='mb-3'>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input type="email" name="email" placeholder='Enter your email' className='rounded-md w-full p-1 border-4 border-gray-500 focus:border-sky-200 focus:ring-2  focus:ring-sky-200 outline-none transition-all' />
              </div>
              <div className='mb-3'>
                <label className='block mb-2' htmlFor="country">Country</label>

                <select className='w-full rounded-md border-4 bg-white border-gray-500 p-2 focus:border-sky-200 focus:ring-2  focus:ring-sky-200 outline-none transition-all' name="" id="country">
                  <option value="tr">Turkey</option>
                  <option value="nl">Netherlands</option>
                  <option value="de">Germany</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                </select>
              </div>
              <div className='mb-3' >
                <p className='mb-2'>Terms and Conditions</p>

                <div className='flex items-center gap-2'>
                  <input className='w-6 h-6 transition-all' type="checkbox" name='terms' id='terms' />
                  <label htmlFor="terms">I agree to the Terms and Conditions that my data will be taken and sold.</label>
                </div>
              </div>
              <button className='text-white bg-sky-400 w-full p-1 rounded-md hover:bg-sky-600 transition-all' type='submit'>Submit!</button>
            </div>
          </div>
          <div className='relative flex-1 hidden lg:block'>
            <Image alt='Newsletter Image' fill priority src={newsLetterImage} className='object-cover rounded-lg'></Image>
          </div>
        </form>
      </main>
    </div>
  )
}
 