
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"



// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation, Autoplay
} from 'swiper';
import ColCard from "./Card/ColCard";


// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);


export default function SwiperHead() {



    return (
        <div className="p-2 ml-2">
            <Swiper slidesPerView={2}
                spaceBetween={0}
                slidesPerGroup={2}
                loop={true}
                loopFillGroupWithBlank={false}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": true
                }}
                navigation={false}>
                        <SwiperSlide>CHỐNG TIN GIẢ TIN XẤU</SwiperSlide>
                        <SwiperSlide>AFF CUP 2020</SwiperSlide>
                        <SwiperSlide>HOA HỌC TRÒ - 30 NĂM ƯƠM MẦM</SwiperSlide>
                        <SwiperSlide>CHIẾN DỊCH VẮC XIN COVID-19</SwiperSlide>
                        <SwiperSlide>CHỦ NHẬT ĐỎ 2022</SwiperSlide>
            </Swiper>
        </div>
    )
}