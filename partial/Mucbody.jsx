import Refer from "../component/Title/Refer";
import Top from "../component/Title/Top";
import { TopNew } from "../elements/news";
import Multi from "./body/Multimedia";
import { Left1 } from "../elements/body/Zone1News";
import Swiper from "../component/swiper";
import TitleName from "../component/Title/Titlename";
import Title2 from "../component/Title/Title2";
import News from "../component/Title/News";
export default function Mucbody() {

    return (
        <div className="col-span-9">
            <div className="mb-4">
                <TitleName />
            </div>

            <div className="mb-4">
                <Top New={TopNew} Active={true} n={3} />
            </div>

            <div className="mb-8">
                <Refer Refer={TopNew} />
            </div>

            <div className="lg:flex hidden mb-4">
                <Title2 New={TopNew} Title="VIDEO" />
            </div>

            <div className="bg-gray-light lg:block hidden mb-4">
                <Multi />
            </div>

            <div className="grid grid-cols-12 mb-2">
                <div className="flex col-span-12 w-1/4  bg-white text-primary border-b-4 mb-2 border-solid border-red text-bold ">
                    <span className="bg-red p-2 items-center ">MỚI NHẤT </span>
                </div>
                <div className="lg:col-span-9 col-span-12 ">
                    <News New={Left1} n={10} Active={false}/>
                </div>
            </div>

            <div className="bg-gray-light lg:block hidden mb-2">
                <Title2 New={TopNew} Title="VIDEO" />
            </div>

            <div className="bg-gray-light lg:block hidden mb-2">

                <div className="flex bg-white text-primary border-b-4 mb-2 border-solid border-red text-bold ">
                    <span className="bg-red p-2 items-center ">KHÁM PHÁ  </span>
                </div>

                <Swiper New={Left1} n={4}/>

            </div>

        </div>
    )
}