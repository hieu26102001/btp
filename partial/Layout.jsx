import styles from '../styles/Home.module.css'
import Footer from './footer'
import Header from './header'
import Navbar from './Navbar'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation, Autoplay
} from 'swiper';
SwiperCore.use([Pagination, Navigation, Autoplay]);

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