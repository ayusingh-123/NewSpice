import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/components/styles/Home.module.css'
import Headbar from '../components/Headbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='page-container'>
      <Headbar/>
      

    </div>
     
  );
}
