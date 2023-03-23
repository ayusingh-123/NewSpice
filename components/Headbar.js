import {useRouter} from 'next/router';
import styles from '@/components/styles/Headbar.module.css'


const Headbar = () => {
    const router = useRouter();


  return (
    <>
    
    <div className={styles.main}>
    <p >NewSpice</p>
        <div onClick={e => router.push(`/feed/1`)}>Home</div>
        <div onClick={()=>router.asPath('/business')}>Business</div>
        <div onClick={()=>router.asPath('/sport')}>Sports</div>
        <div onClick={()=>router.asPath('/technology')}>Technology</div>
        <div onClick={()=>window.location.href='https://twitter.com/'}>Twitter</div>
        
        
    </div>
    </>
    
  )
}

export default Headbar;