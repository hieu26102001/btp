import { TopNew } from "../../../elements/news"
import News1 from "../Zone2/News1"
import { TopNew2 } from "../../../elements/news"

export default function RZone1(){
    return(
        <div className="col-span-3 md:grid-cols-3 md:grid lg:block mt-2 gap-x-8">
                <News1 TopNew={TopNew} title="Giar tri" /> 
                <News1 TopNew={TopNew2} title="Giar tri" /> 
                <News1 TopNew={TopNew} title="Giar tri" /> 
        </div>
    )
}