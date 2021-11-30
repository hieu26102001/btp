import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../partial/footer'
import Header from '../partial/header'
import Menu from '../partial/Navbar'
import Layout from './Layout'
import Body from '../partial/body'
export default function Home() {

    return (
        <Layout class="flex-wrap">
            <Header/>
            <Menu />
            <Body />
            <Footer />
        </Layout>
    
    )
}
