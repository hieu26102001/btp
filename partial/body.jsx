
import { TopNew } from "../elements/news"
import Multi from "./body/Multimedia"
import Refer from "../component/Title/Refer"
import Zone1 from "./body/Zone1"
import Zone2 from "./body/Zone2"
import Top from "../component/Title/Top"
import { ReferNews } from "../elements/news"
import Title2 from "../component/Title/Title2"
export default function Body(){

    return(
        <div>
            <Top New={TopNew} Active={false} n={8}/>
            <Refer Refer={ReferNews} isTitle={true}/>
            <Multi/>
            <Zone1/>
            <Zone2/>
            <Title2 New={TopNew} Title="KHOA HỌC"/>
        </div>

    )
}