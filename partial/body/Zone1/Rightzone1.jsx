import { TopNew } from "../../../elements/news"
import { TopNew2 } from "../../../elements/news"
import Cate from "../../../component/Title/Cate"

export default function RZone1(){
    return(
        <div className="col-span-3 md:grid-cols-3 md:grid lg:block mt-4 gap-x-8">
                <Cate New={TopNew} title="XÃ HỘI" /> 
                <Cate New={TopNew} title="KINH TẾ" />  
                <Cate New={TopNew} title="PHÁP LUẬT" /> 
        </div>
    )
}