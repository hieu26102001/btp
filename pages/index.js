import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './partial/footer'
import Header from './partial/header'
import Menu from './partial/Navbar'
import { RecoilRoot } from 'recoil'
import Layout from './Layout'
export default function Home() {

  return (
  <Layout>
   <RecoilRoot>
     <Header/>
    <Menu className={styles.footer}/>
   <Footer className={styles.footer}/>
   </RecoilRoot>
   </Layout>
   
  )
}
