import { TopNew } from "../../../elements/news"
import News1 from "../Zone2/News1"
import { TopNew2 } from "../../../elements/news"
import Cate from "../../../component/Title/Cate"

export default function RZone1(){
    return(
        <div className="col-span-3 md:grid-cols-3 md:grid lg:block mt-2 gap-x-8">
                <Cate New={TopNew} title="XÃ HỘI" /> 
                <Cate New={TopNew} title="KINH TẾ" />  
                <Cate New={TopNew} title="PHÁP LUẬT" /> 
        </div>
    )
}