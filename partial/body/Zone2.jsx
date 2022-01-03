import Hoahau from "./Zone2/Hoahau";
import Video from "./Zone2/Video";
import { TopNew, TopNew2 } from "../../elements/news"
import Cate from "../../component/Title/Cate";
import Title from "../../component/Title/title";

export default function Zone2(){
    return(
        <div className="mx-auto">
            <div className=" grid md:grid-cols-3  grid-cols-1 mt-2 gap-x-8">
                <Cate New={TopNew} title="GIỚI TRẺ"/>
                <Cate New={TopNew2} title="GIÁO DỤC"/>
                <Cate New={TopNew} title="SỨC KHỎE"/>
            </div>
            <Video/>
            <div className=" grid lg:grid-cols-3 grid-cols-1 mt-2 gap-x-8">
                <Cate New={TopNew} title="NHỊP SỐNG" Active={true}/>
                <Cate New={TopNew} title="THỂ THAO" Active={true}/>
                <Cate New={TopNew} title="NGƯỜI LÍNH" Active={true}/>
            </div>
            <Title Title="Hoa Hau" New={TopNew} isActive={true}/>
        </div>
    )
}