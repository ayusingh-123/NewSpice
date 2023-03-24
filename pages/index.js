import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/components/styles/Home.module.css'
import Headbar from '../components/Headbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.main} >
      <Headbar/>
      <div className={styles.cont}>
      <div>Welcome to the NewSpice !!</div>
      <div> Click the <div style={{color:'red'}}> -- Home --</div> on Navbar to explore the latest News Headlines</div>
      </div>
    </div>
     
  );
}
