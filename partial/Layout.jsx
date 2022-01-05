import styles from '../styles/Home.module.css'
import Footer from './footer'
import Header from './header'
import Navbar from './Navbar'

export default function Layout({children}){
    return(
        <div className="font-semibold flex-wrap font-sans"> 
        <Header/>
        <Navbar/>
        <div className="lg:grid grid-cols-12 container mt-1 mx-auto ">
        <div className="px-2 col-start-1 col-span-12">
            {children}
        </div>
        </div>
        <Footer/>
        </div>
    )
}