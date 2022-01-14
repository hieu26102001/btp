import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import Rowcard from "./Card/Rowcard";
import Colcard from "./Card/Colcard";

// import Swiper core and required modules
import SwiperCore, {
    FreeMode, Navigation, Thumbs
} from 'swiper';
import Image from "next/image";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);


export default function VerSwiper({ New }) {


    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <div className="mt-2 text-primary grid-cols-2 overflow-hidden" >
            <div>
            <Swiper direction="vertical" slidesPerView={4}  slideToClickedSlide={true} loop={true} loopedSlides={20}
                className="float-right   h-96" onSwiper={setThumbsSwiper} spaceBetween={20}
            >
                {New.map((item, i) => {
                    return (
                        <div>
                            {i < 6 ?
                                <SwiperSlide>
                                    <div className="flex p-2">
                                        <Image src={item.images} width={140} height={80} />
                                        <div className="w-3/5 mx-2">
                                            {item.article}
                                        </div>
                                    </div>
                                </SwiperSlide>
                                : null}
                        </div>
                    )
                })}
            </Swiper>
            </div>
            <div>
            <Swiper loop={true} spaceBetween={10} slidesPerView={1} navigation={false} thumbs={{ swiper: thumbsSwiper }} className=" ">
                {New.map((item, i) => {
                    return (
                        <div>
                            {i < 6 ?
                                <SwiperSlide>
                                    <div className="p-2 float-left text-3xl">
                                        <Image src={item.images} width={800} height={400} />
                                        {item.article}
                                    </div>
                                </SwiperSlide>
                                : null}
                        </div>
                    )
                })}
            </Swiper>
            </div>
        </div>
    )
}  