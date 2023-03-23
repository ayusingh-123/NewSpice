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
      <h1>Welcome to the NewSpice !!</h1>
      <h2> Click the <h1 style={{color:'red'}}>Home</h1> on Navbar to explore the latest News Headlines</h2>

    </div>
     
  );
}
