import Hoahau from "./Zone2/Hoahau";
import News1 from "./Zone2/News1";
import Video from "./Zone2/Video";
import { TopNew, TopNew2 } from "../../elements/news"
export default function Zone2(){
    return(
        <div className="mx-auto">
            <div className=" grid md:grid-cols-3  grid-cols-1 mt-2 gap-x-8">
                <News1 TopNew={TopNew} title="Giar tri"></News1>
                <News1 TopNew={TopNew2} title="Giar tri"/>
                <News1 TopNew={TopNew} title="Giar tri"/>
            </div>
            <Video/>
            <div className=" grid md:grid-cols-3 grid-cols-1 mt-2 gap-x-8">
                <News1 TopNew={TopNew} title="Giar tri" Active={true}/>
                <News1 TopNew={TopNew} title="Giar tri" Active={true}/>
                <News1 TopNew={TopNew} title="Giar tri" Active={true}/>
            </div>
            <Hoahau/>
        </div>
    )
}