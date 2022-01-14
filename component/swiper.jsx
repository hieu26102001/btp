
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


export default function Swipe({ New,n }) {



    return (
        <div className="p-2">
            <Swiper slidesPerView={n}
                spaceBetween={0}
                slidesPerGroup={n}
                loop={true}
                loopFillGroupWithBlank={false}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": true
                }}
                navigation={false}>
                {New.map((item, i) => {
                    return (
                        <SwiperSlide>
                        <div className="px-2">
                                <ColCard item={item} w={300} h={180} />
                        </div>
                        </SwiperSlide>
                    )
                })
                }
            </Swiper>
        </div>
    )
}