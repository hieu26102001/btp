import { HeadNews, TopNew } from "../../elements/news"
import Image from "next/image"
import Top from "../../component/Top"

export default function TopHP(){
    return(
                <Top New={TopNew} Active={true} n={8}/>
    )
}